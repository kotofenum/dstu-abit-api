import { SpecialtyDto } from "src/modules/specialties/dto/specialty.dto";
export declare class ProgramDto {
    readonly uid: string;
    readonly title: string;
    readonly attendance: boolean;
    readonly degree: string;
    readonly studyPeriod: number;
    readonly languages: string;
    readonly description: string;
    readonly specialty: SpecialtyDto;
}
