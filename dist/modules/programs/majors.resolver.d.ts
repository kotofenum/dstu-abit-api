import { MajorsService } from "./majors.service";
import { MajorDto } from "./dto/major.dto";
import { MajorInput } from "./inputs/major.input";
import { UserEntity } from "../users/entities/user.entity";
export declare class MajorsResolver {
    private readonly majorsService;
    constructor(majorsService: MajorsService);
    majors(): Promise<MajorDto[]>;
    major(uid: string): Promise<MajorDto>;
    addMajor(input: MajorInput, user: UserEntity): Promise<MajorDto>;
}
