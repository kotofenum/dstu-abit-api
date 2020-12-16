import { UserTagEntity } from "./entities/user-tag.entity";
import { Repository } from "typeorm";
import { UserTagInput } from "./inputs/user-tag.input";
import { UserEntity } from "../users/entities/user.entity";
import { MajorsService } from "../majors/majors.service";
import { SpecialtiesService } from "../specialties/specialties.service";
import { ProgramsService } from "../programs/programs.service";
import { ConnectedUserTagsDto } from "./dto/connected-user-tags.dto";
export declare class UserTagsService {
    private readonly userTagsRepository;
    private readonly majorsService;
    private readonly specialtiesService;
    private readonly programsService;
    constructor(userTagsRepository: Repository<UserTagEntity>, majorsService: MajorsService, specialtiesService: SpecialtiesService, programsService: ProgramsService);
    private getTagIdFromInput;
    createUserTag(data: UserTagInput, user: UserEntity): Promise<UserTagEntity>;
    getAllUserTags(): Promise<UserTagEntity[]>;
    getUserTags(user: UserEntity): Promise<ConnectedUserTagsDto>;
    getUserTagById(id: string): Promise<UserTagEntity>;
}
