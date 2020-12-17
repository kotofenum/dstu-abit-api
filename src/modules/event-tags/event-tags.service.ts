import { EventTagEntity } from "./entities/event-tag.entity";
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { EventTagInput } from "./inputs/event-tag.input";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengeEntity } from "../challenges/entities/challenge.entity";
import { UserExercisesService } from "../user-exercises/user-exercises.service";
import { ChallengeConfig } from "src/proto/challenge";
import { ChallengeExercisesService } from "../challenge-exercises/challenge-exercises.service";
import { ChallengesService } from "../challenges/challenges.service";
import { MajorsService } from "../majors/majors.service";
import { SpecialtiesService } from "../specialties/specialties.service";
import { ProgramsService } from "../programs/programs.service";
import { ConnectedEventTagsDto } from "./dto/connected-event-tags.dto";
import {
  TagRelationType,
  UserTagEntity,
} from "../user-tags/entities/user-tag.entity";
import { EventEntity } from "../events/entities/event.entity";
import { EventsService } from "../events/events.service";
import { UserTagsService } from "../user-tags/user-tags.service";

const evnts = []

@Injectable()
export class EventTagsService {
  constructor(
    @InjectRepository(EventTagEntity)
    private readonly eventTagsRepository: Repository<EventTagEntity>,
    private readonly eventsService: EventsService,
    private readonly userTagsService: UserTagsService,
    private readonly majorsService: MajorsService,
    private readonly specialtiesService: SpecialtiesService,
    private readonly programsService: ProgramsService
  ) {}

  private async getTagIdFromInput(
    input: EventTagInput
  ): Promise<string | null> {
    switch (input.relationType) {
      case TagRelationType.major: {
        const major = await this.majorsService.getMajorById(input.relationId);
        return major?.uid;
      }
      case TagRelationType.specialty: {
        const specialty = await this.specialtiesService.getSpecialtyById(
          input.relationId
        );
        return specialty?.uid;
      }
      case TagRelationType.program: {
        const program = await this.programsService.getProgramById(
          input.relationId
        );
        return program?.uid;
      }
    }
  }

  async populateTags() {
    const allMajors = await this.majorsService.getMajors()
    const allMajorCodes = allMajors.map(major => major.code)
    for (const event of evnts) {
      const vnt = await this.eventsService.getEventByTitle(event.name)
      for (const majorCode of event.specialtyCodes || allMajorCodes || []) {
        const major = await this.majorsService.getMajorByCode(majorCode);
        await this.createEventTag({
          relationId: major.uid,
          relationType: TagRelationType.major,
          eventId: vnt.uid,
        });
      }
    }
  }

  async createEventTag(data: EventTagInput): Promise<EventTagEntity> {
    const relationId = await this.getTagIdFromInput(data);

    if (!relationId) {
      throw new BadRequestException(
        "No relation found for requested type and id"
      );
    }

    const event = await this.eventsService.getEventById(data.eventId);

    if (!event) {
      throw new BadRequestException("No event found with such id");
    }

    const currentTag = await this.eventTagsRepository.findOne({
      where: { relationId, relationType: data.relationType },
    });

    if (currentTag) {
      return currentTag;
    }

    return await this.eventTagsRepository.save({
      relationId: relationId,
      relationType: data.relationType,
      event: event,
    });
  }

  async getAllEventTags(): Promise<EventTagEntity[]> {
    return await this.eventTagsRepository.find();
  }

  async getEventTags(eventId: string): Promise<EventTagEntity[]> {
    return await this.eventTagsRepository.find({ where: { eventId: eventId } });
  }

  async getEventsForUserTags(user: UserEntity): Promise<EventEntity[]> {
    const tagData = await this.userTagsService.getUserTags(user);

    const finalEventIds: string[] = [];

    const programIds = tagData.programs.map((program) => program.uid);

    const programEventTags = await this.eventTagsRepository.find({
      where: {
        relationId: In(programIds),
        relationType: TagRelationType.program,
      },
    });

    const implicitSpecialtyIdsFromPrograms = [
      ...new Set(tagData.programs.map((program) => program.specialty.uid)),
    ];
    const implicitMajorIdsFromPrograms = [
      ...new Set(
        tagData.programs.map((program) => program.specialty.major.uid)
      ),
    ];

    const explicitSpecialtyIds = tagData.specialties.map(
      (specialty) => specialty.uid
    );

    const finalSpecialtyIds = [
      ...new Set([
        ...implicitSpecialtyIdsFromPrograms,
        ...explicitSpecialtyIds,
      ]),
    ];

    console.log("final specialty", finalSpecialtyIds);
    const specialtyEventTags = await this.eventTagsRepository.find({
      where: {
        relationId: In(finalSpecialtyIds),
        relationType: TagRelationType.specialty,
      },
    });

    const implicitMajorIdsFromSpecialties = [
      ...new Set(tagData.specialties.map((specialty) => specialty.major.uid)),
    ];

    const explicitMajorIds = tagData.majors.map((major) => major.uid);

    const finalMajorIds = [
      ...new Set([
        ...implicitMajorIdsFromPrograms,
        ...implicitMajorIdsFromSpecialties,
        ...explicitMajorIds,
      ]),
    ];

    const majorEventTags = await this.eventTagsRepository.find({
      where: {
        relationId: In(finalMajorIds),
        relationType: TagRelationType.major,
      },
    });

    finalEventIds.push(
      ...programEventTags.map((tag) => tag.event.uid),
      ...specialtyEventTags.map((tag) => tag.event.uid),
      ...majorEventTags.map((tag) => tag.event.uid)
    );

    console.log(finalEventIds);

    return await this.eventsService.getEventsByIds([...new Set(finalEventIds)]);
  }

  async getEventTagById(id: string): Promise<EventTagEntity> {
    return await this.eventTagsRepository.findOne(id);
  }
}
