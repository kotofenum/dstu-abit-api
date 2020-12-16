import { ProgramsService } from "./programs.service";
import { ProgramDto } from "./dto/program.dto";
import { ProgramInput } from "./inputs/program.input";
import { UserEntity } from "../users/entities/user.entity";
import { SpecialtiesService } from "../specialties/specialties.service";
import { ProgramsOfSpecialtyInput } from "./inputs/programsOfSpecialty.input";
export declare class ProgramsResolver {
    private readonly programsService;
    private readonly specialtiesService;
    constructor(programsService: ProgramsService, specialtiesService: SpecialtiesService);
    programs(): Promise<ProgramDto[]>;
    program(uid: string): Promise<ProgramDto>;
    programsOfSpecialty(input: ProgramsOfSpecialtyInput): Promise<ProgramDto[]>;
    addProgram(input: ProgramInput, user: UserEntity): Promise<ProgramDto>;
}
