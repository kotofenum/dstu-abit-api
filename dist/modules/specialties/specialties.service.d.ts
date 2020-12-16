import { SpecialtyEntity } from "./entities/specialty.entity";
import { Repository } from "typeorm";
import { SpecialtyInput } from "./inputs/specialty.input";
import { MajorEntity } from "../majors/entities/major.entity";
export declare class SpecialtiesService {
    private readonly specialtiesRepository;
    constructor(specialtiesRepository: Repository<SpecialtyEntity>);
    createSpecialty(data: SpecialtyInput, major: MajorEntity): Promise<SpecialtyEntity>;
    getSpecialties(): Promise<SpecialtyEntity[]>;
    getSpecialtyById(id: string): Promise<SpecialtyEntity>;
    getSpecialtiesByIds(ids: string[]): Promise<SpecialtyEntity[]>;
    getSpecialtiesOfMajor(majorId: string): Promise<SpecialtyEntity[]>;
}
