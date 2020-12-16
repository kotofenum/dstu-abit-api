import { MajorEntity } from "./entities/major.entity";
import { Repository } from "typeorm";
import { MajorInput } from "./inputs/major.input";
import { UserEntity } from "../users/entities/user.entity";
export declare class MajorsService {
    private readonly majorsRepository;
    constructor(majorsRepository: Repository<MajorEntity>);
    createMajor(data: MajorInput, owner: UserEntity): Promise<MajorEntity>;
    getMajors(): Promise<MajorEntity[]>;
    getMajorById(id: string): Promise<MajorEntity>;
}
