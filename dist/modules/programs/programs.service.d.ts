import { ProgramEntity } from "./entities/program.entity";
import { Repository } from "typeorm";
import { ProgramInput } from "./inputs/program.input";
import { SpecialtyEntity } from "../specialties/entities/specialty.entity";
export declare class ProgramsService {
    private readonly programsRepository;
    constructor(programsRepository: Repository<ProgramEntity>);
    createProgram(data: ProgramInput, specialty: SpecialtyEntity): Promise<ProgramEntity>;
    getPrograms(): Promise<ProgramEntity[]>;
    getProgramById(id: string): Promise<ProgramEntity>;
    getProgramsByIds(ids: string[]): Promise<ProgramEntity[]>;
    getProgramsOfSpecialty(specialtyId: string): Promise<ProgramEntity[]>;
}
