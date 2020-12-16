import {
  TransactionEntity,
  TransactionPurpose,
  TransactionStatus,
} from "./entities/transaction.entity";
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { getConnection, Repository } from "typeorm";
import { WalletEntity } from "../wallets/entities/wallet.entity";

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionsRepository: Repository<TransactionEntity>
  ) {}

  async transferFunds(
    amount: number,
    from?: WalletEntity,
    to?: WalletEntity,
    purpose?: TransactionPurpose
  ): Promise<TransactionEntity> {
    if (!from && !to) {
      throw new BadRequestException(
        "No internal wallets specified for the transaction"
      );
    } else {
      const transaction = await this.transactionsRepository.create({
        amount: amount,
        from: from,
        to: to,
        purpose: purpose || TransactionPurpose.other,
        status: TransactionStatus.queued,
      });

      transaction.status = TransactionStatus.processing;
      await this.transactionsRepository.save(transaction)

      const connection = getConnection();
      const queryRunner = connection.createQueryRunner();
      await queryRunner.connect();

      await queryRunner.startTransaction();
      try {
        if (to) {
          to.balance += amount;
        }

        if (from) {
          if (from.balance < amount) {
            throw new BadRequestException(
              "Insufficient funds for withdraw operation"
            );
          }
          from.balance -= amount;
        }

        if (to) {
          await queryRunner.manager.save(to);
        }

        if (from) {
          await queryRunner.manager.save(from);
        }

        transaction.status = TransactionStatus.resolved;
        await queryRunner.manager.save(transaction);
        
        await queryRunner.commitTransaction();
        const updatedTransaction = await this.getTransactionById(transaction.uid);
        return updatedTransaction;
      } catch (err) {
        await queryRunner.rollbackTransaction();

        transaction.status = TransactionStatus.rejected;
        await this.transactionsRepository.save(transaction)

        throw err;
      } finally {
        await queryRunner.release()
      }
    }
  }

  async getTransactions(): Promise<TransactionEntity[]> {
    return await this.transactionsRepository.find();
  }

  async getOutgoingWalletTransactions(
    wallet: WalletEntity
  ): Promise<TransactionEntity[]> {
    return await this.transactionsRepository.find({ from: wallet });
  }

  async getIncomingWalletTransactions(
    wallet: WalletEntity
  ): Promise<TransactionEntity[]> {
    return await this.transactionsRepository.find({ to: wallet });
  }

  async getTransactionById(id: string): Promise<TransactionEntity> {
    return await this.transactionsRepository.findOne(id);
  }
}
