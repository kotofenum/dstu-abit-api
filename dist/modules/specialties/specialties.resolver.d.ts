import { SpecialtiesService } from "./specialties.service";
import { SpecialtyDto } from "./dto/specialty.dto";
import { SpecialtyInput } from "./inputs/specialty.input";
import { UserEntity } from "../users/entities/user.entity";
import { MajorsService } from "../majors/majors.service";
import { SpecialtiesOfMajorInput } from "./inputs/specialtiesOfMajor.input";
export declare class SpecialtiesResolver {
    private readonly specialtiesService;
    private readonly majorsService;
    constructor(specialtiesService: SpecialtiesService, majorsService: MajorsService);
    specialties(): Promise<SpecialtyDto[]>;
    specialty(uid: string): Promise<SpecialtyDto>;
    specialtiesOfMajor(input: SpecialtiesOfMajorInput): Promise<SpecialtyDto[]>;
    addSpecialty(input: SpecialtyInput, user: UserEntity): Promise<SpecialtyDto>;
}
