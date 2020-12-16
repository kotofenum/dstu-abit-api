import { ObjectType, Field } from '@nestjs/graphql';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { WalletType } from 'src/proto/wallet';

@ObjectType()
export class WalletDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly balance: number;

  @Field()
  readonly owner: UserDto;

  @Field(() => WalletType)
  readonly type: WalletType;

  @Field()
  readonly secure: boolean;
}
