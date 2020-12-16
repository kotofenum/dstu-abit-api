import { SpecialtyEntity } from "src/modules/specialties/entities/specialty.entity";
export declare class MajorEntity {
    uid: string;
    title: string;
    code: string;
    fundedPlaces: number;
    specialties: SpecialtyEntity[];
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
