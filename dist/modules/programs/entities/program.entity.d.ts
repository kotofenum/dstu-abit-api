import { SpecialtyEntity } from "src/modules/specialties/entities/specialty.entity";
export declare class ProgramEntity {
    uid: string;
    title: string;
    attendance: boolean;
    degree: string;
    studyPeriod: number;
    languages: string;
    description: string;
    specialty: SpecialtyEntity;
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
