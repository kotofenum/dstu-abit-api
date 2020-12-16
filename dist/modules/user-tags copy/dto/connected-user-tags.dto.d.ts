import { MajorDto } from 'src/modules/majors/dto/major.dto';
import { ProgramDto } from './../../programs/dto/program.dto';
import { SpecialtyDto } from './../../specialties/dto/specialty.dto';
export declare class ConnectedUserTagsDto {
    readonly majors: MajorDto[];
    readonly specialties: SpecialtyDto[];
    readonly programs: ProgramDto[];
}
