import { MajorEntity } from "src/modules/majors/entities/major.entity";
import { ProgramEntity } from "src/modules/programs/entities/program.entity";
export declare class SpecialtyEntity {
    uid: string;
    title: string;
    code: string;
    major: MajorEntity;
    programs: ProgramEntity[];
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
