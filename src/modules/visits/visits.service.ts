import { VisitEntity } from "./entities/visit.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VisitInput } from "./inputs/visit.input";
import { UserEntity } from "../users/entities/user.entity";
import { EventsService } from "../events/events.service";

@Injectable()
export class VisitsService {
  constructor(
    @InjectRepository(VisitEntity)
    private readonly visitsRepository: Repository<VisitEntity>,
    private readonly eventsService: EventsService
  ) {}

  async createVisit(data: VisitInput, user: UserEntity): Promise<VisitEntity> {
    const event = await this.eventsService.getEventById(data.eventId);

    return await this.visitsRepository.save({
      user: user,
      event: event,
    });
  }

  async getVisits(): Promise<VisitEntity[]> {
    return await this.visitsRepository.find();
  }

  async getVisitById(id: string): Promise<VisitEntity> {
    return await this.visitsRepository.findOne(id);
  }
}
