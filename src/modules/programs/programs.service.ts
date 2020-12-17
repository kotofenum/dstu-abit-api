import { ProgramEntity } from "./entities/program.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { ProgramInput } from "./inputs/program.input";
import { SpecialtyEntity } from "../specialties/entities/specialty.entity";
import { SpecialtiesService } from "../specialties/specialties.service";
import { PlacesMeta } from "../majors/entities/major.entity";

const pgms = {};

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(ProgramEntity)
    private readonly programsRepository: Repository<ProgramEntity>,

    private readonly specialtiesService: SpecialtiesService // TODO: remove
  ) {}

  async createProgram(
    data: ProgramInput,
    specialty: SpecialtyEntity
  ): Promise<ProgramEntity> {
    return await this.programsRepository.save({
      title: data.title,
      specialty: specialty,
      fullTimePlaces: data.fullTimePlaces,
      fullTimeMeta: data.fullTimeMeta,
      mixedPlaces: data.mixedPlaces,
      mixedMeta: data.mixedMeta,
      extramuralPlaces: data.extramuralPlaces,
      extramuralMeta: data.extramuralMeta,
      fullTimeForm: data.fullTimeForm,
      mixedForm: data.mixedForm,
      extramuralForm: data.extramuralForm,
      degree: data.degree,
      studyPeriod: data.studyPeriod,
      languages: data.languages,
      description: data.description,
      advantages: data.advantages,
      partners: data.partners,
      projectsAndPractices: data.projectsAndPractices,
      leadProfessors: data.leadProfessors,
      graduates: data.graduates,
      unit: data.unit,
      supervisor: data.supervisor,
    });
  }

  async populate() {
    for (const key of Object.keys(pgms)) {
      const programs = pgms[key];

      const specialty = await this.specialtiesService.getSpecialtyByCode(key);

      for (const program of programs) {
        const fullTimeForm = program.educationForms?.includes("очная") || false;
        const mixedForm =
          program.educationForms?.includes("очно-заочная") || false;
        const extramuralForm =
          program.educationForms?.includes("заочная") || false;

        await this.createProgram(
          {
            title: program.title,
            specialtyId: specialty.uid,
            fullTimePlaces: program.fullTime?.amount,
            fullTimeMeta: program.fullTime?.meta as PlacesMeta,
            mixedPlaces: program.mixed?.amount,
            mixedMeta: program.mixed?.meta as PlacesMeta,
            extramuralPlaces: program.extramural?.amount,
            extramuralMeta: program.extramural?.meta as PlacesMeta,
            fullTimeForm: fullTimeForm,
            mixedForm: mixedForm,
            extramuralForm: extramuralForm,
            degree: program.degree || "bachelor",
            studyPeriod: program.studyPeriod || "4 года",
            languages: program.languages?.join(',') || "русский",
            description: program.description,
            advantages: program.advantages,
            partners: program.partners,
            projectsAndPractices: program.projectsAndPractices,
            leadProfessors: program.leadProfessors,
            graduates: program.graduates,
            unit: program.unit,
            supervisor: program.supervisor,
          },
          specialty
        );
      }
    }
  }

  async getPrograms(): Promise<ProgramEntity[]> {
    return await this.programsRepository.find();
  }

  async getProgramById(id: string): Promise<ProgramEntity> {
    return await this.programsRepository.findOne(id);
  }

  async getProgramsByIds(ids: string[]): Promise<ProgramEntity[]> {
    return await this.programsRepository.findByIds(ids);
  }

  async getProgramsOfSpecialty(specialtyId: string): Promise<ProgramEntity[]> {
    return await this.programsRepository.find({
      where: { specialty: specialtyId },
    });
  }
}
