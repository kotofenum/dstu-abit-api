import { PreuniversityRequestEntity } from "./entities/preuniversity-request.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PreuniversityRequestInput } from "./inputs/preuniversity-request.input";
import { UserEntity } from "../users/entities/user.entity";

@Injectable()
export class PreuniversityRequestsService {
  constructor(
    @InjectRepository(PreuniversityRequestEntity)
    private readonly preuniversityRequestsRepository: Repository<
      PreuniversityRequestEntity
    >
  ) {}

  async createPreuniversityRequest(
    data: PreuniversityRequestInput,
    user: UserEntity
  ): Promise<PreuniversityRequestEntity> {
    return await this.preuniversityRequestsRepository.save({
      category: data.category,
      subcategory: data.subcategory,
      program: data.program,
      user: user,
    });
  }

  async getPreuniversityRequests(): Promise<PreuniversityRequestEntity[]> {
    return await this.preuniversityRequestsRepository.find();
  }

  async getPreuniversityRequestById(
    id: string
  ): Promise<PreuniversityRequestEntity> {
    return await this.preuniversityRequestsRepository.findOne(id);
  }
}
