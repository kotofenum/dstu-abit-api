import { ProgramEntity } from "./entities/program.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { ProgramInput } from "./inputs/program.input";
import { SpecialtyEntity } from "../specialties/entities/specialty.entity";
import { SpecialtiesService } from "../specialties/specialties.service";
import { PlacesMeta } from "../majors/entities/major.entity";
import { EditProgramInput } from "./inputs/edit-program.input";

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
      score: data.score,
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

  async editProgram(
    data: EditProgramInput,
    specialty: SpecialtyEntity
  ): Promise<ProgramEntity> {
    const program = await this.programsRepository.findOne(data.uid);

    program.title = data.title;
    if (data.score) {
      program.score = data.score;
    }
    program.specialty = specialty;
    if (data.fullTimePlaces) {
      program.fullTimePlaces = data.fullTimePlaces;
    }
    if (data.fullTimeMeta) {
      program.fullTimeMeta = data.fullTimeMeta;
    }
    if (data.mixedPlaces) {
      program.mixedPlaces = data.mixedPlaces;
    }
    if (data.mixedMeta) {
      program.mixedMeta = data.mixedMeta;
    }
    if (data.extramuralPlaces) {
      program.extramuralPlaces = data.extramuralPlaces;
    }
    if (data.extramuralMeta) {
      program.extramuralMeta = data.extramuralMeta;
    }
    program.fullTimeForm = data.fullTimeForm;
    program.mixedForm = data.mixedForm;
    program.extramuralForm = data.extramuralForm;
    program.degree = data.degree;
    program.studyPeriod = data.studyPeriod;
    program.languages = data.languages;

    if (data.description) {
      program.description = data.description;
    }
    if (data.advantages) {
      program.advantages = data.advantages;
    }
    if (data.partners) {
      program.partners = data.partners;
    }
    if (data.projectsAndPractices) {
      program.projectsAndPractices = data.projectsAndPractices;
    }
    if (data.leadProfessors) {
      program.leadProfessors = data.leadProfessors;
    }
    if (data.graduates) {
      program.graduates = data.graduates;
    }
    if (data.unit) {
      program.unit = data.unit;
    }
    if (data.supervisor) {
      program.supervisor = data.supervisor;
    }

    return await this.programsRepository.save({
      title: data.title,
      score: data.score,
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
            score: program.score,
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
            languages: program.languages?.join(",") || "русский",
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

  async getProgramByName(name: string): Promise<ProgramEntity> {
    return await this.programsRepository.findOne({
      where: { title: name },
    });
  }

  async getProgramsWithSubjects(): Promise<ProgramEntity[]> {
    return await this.programsRepository.find({
      relations: ["subjects"],
    });
  }
}
