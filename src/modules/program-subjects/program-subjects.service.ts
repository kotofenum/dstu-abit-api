import { ProgramSubjectEntity } from "./entities/program-subject.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProgramsService } from "../programs/programs.service";
import { SubjectsService } from "../subjects/subjects.service";
import { SubjectEntity } from "../subjects/entities/subject.entity";
import { ProgramEntity } from "../programs/entities/program.entity";

const subjects = [
  {
    title:
      "Применение математических методов к решению инженерных и экономических задач",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Математическое обеспечение и администрирование информационных систем",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Моделирование процессов и производств нефтегазового комплекса",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Архитектурное проектирование",
    required: [
      {
        title: "рисунок",
        score: "40",
      },
      {
        title: "специальная графика",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "обществознание",
        score: "45",
      },
      {
        title: "математика",
        score: "39",
      },
    ],
  },
  {
    title: "Ландшафтное проектирование",
    required: [
      {
        title: "рисунок",
        score: "40",
      },
      {
        title: "специальная графика",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "обществознание",
        score: "45",
      },
      {
        title: "математика",
        score: "39",
      },
    ],
  },
  {
    title: "Реконструкция и реставрация архитектурного наследия",
    required: [
      {
        title: "рисунок",
        score: "40",
      },
      {
        title: "специальная графика",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "обществознание",
        score: "45",
      },
      {
        title: "математика",
        score: "39",
      },
    ],
  },
  {
    title: "Градостроительство",
    required: [
      {
        title: "рисунок",
        score: "40",
      },
      {
        title: "специальная графика",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "обществознание",
        score: "45",
      },
      {
        title: "математика",
        score: "39",
      },
    ],
  },
  {
    title: "Автодорожные мосты и тоннели",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Автомобильные дороги",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Водоснабжение и водоотведение",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Гидротехническое строительство",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Городское планирование и управление недвижимостью",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Инновационное промышленное и гражданское строительство",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Проектирование зданий",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Проектирование и строительство инженерных систем альтернативной энергетики",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Производство строительных материалов, изделий и конструкций",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Промышленное и гражданское строительство",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Строительное материаловедение и контроль качества в промышленном и гражданском строительстве",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Таможенная и судебная экспертиза строительных материалов и изделий",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Теплогазоснабжение и вентиляция",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Технический контроль и экспертиза в стройиндустрии",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Экспертиза и управление недвижимостью",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Автоматизированные системы обработки информации и управления",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Информатика и вычислительная техника",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Системы автоматизированного проектирования",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Web-ориентированные информационно-аналитические системы",
    required: [
      {
        title: "Русский язык",
      },
      {
        title: "Математика",
      },
    ],
    optional: [
      {
        title: "Физика",
      },
      {
        title: "Информатика",
      },
      {
        title: "Химия",
      },
    ],
  },
  {
    title: "Интеллектуальные информационные системы в технике и технологиях",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Информационные системы и технологии",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Искусственный интеллект и математическое моделирование в информационных системах",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Прикладная информатика в информационной сфере",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Прикладная информатика в экономике",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Разработка игр и прикладных программ",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Программное обеспечение вычислительной техники и автоматизированных систем",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Безопасность автоматизированных систем",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Радиотехнические средства передачи, приема и обработки сигналов",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Сети связи и системы коммутации",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Промышленная электроника и микропроцессорная техника",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Светотехника и источники света",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Информационно-измерительная техника и технологии",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Инженерное дело в медико-биологической практике",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Автоматизированные электрические распределительные сети",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Электрооборудование автомобилей и тракторов",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Электроэнергетические системы и сети",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Гидравлическая, вакуумная и компрессорная техника",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Информационные технологии обработки металлов давлением",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Машины и технология литейного производства",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Оборудование и технология сварочного производства",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Машины и аппараты пищевых производств",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Машины и оборудование нефтяных и газовых промыслов",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Программные системы компьютерного инжиниринга",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Автоматизация технологических процессов и производств в машиностроении",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Автоматизация технологических процессов и производств нефтегазового комплекса",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Конструирование машин и оборудования",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Оборудование и технологии высокоэффективной обработки материалов",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Технология машиностроения",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Мехатроника",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Роботы и робототехнические системы",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Холодильная техника и системы кондиционирования воздуха",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Технология переработки нефти и газа",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Технология электрохимических производств и защита от коррозии в нефтегазовом комплексе",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Процессы и оборудование биотехнологии",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Технологические процессы и оборудование бродильных производств и виноделия",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Технологические процессы и оборудование хранения и переработки зерна",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Технологические процессы и оборудование производства продуктов животного происхождения",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Безопасность жизнедеятельности в техносфере",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Безопасность технологических процессов и производств",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Безопасность труда",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Инженерная защита окружающей среды",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Городской кадастр",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Оценка и мониторинг земель",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Геодезия",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Материаловедение и технологии материалов в приборостроении и медицинской технике",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Металлургия черных металлов",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Интеллектуальные транспортные системы в дорожном движении",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Организация и безопасность движения",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Организация перевозок на автомобильном транспорте",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Транспортная логистика",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Средства аэродромно-технического обеспечения полетов авиации",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Цифровые технологии в АПК",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Цифровые технологии в производстве сельскохозяйственной техники",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Автомобили и автомобильное хозяйство",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Автомобильный сервис",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Эксплуатация автотранспортных средств",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Вертолетостроение",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Ремонт и обслуживание воздушных судов",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Менеджмент качества, стандартизация и сертификация",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Метрология и метрологическое обеспечение",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Стандартизация и сертификация",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Управление качеством в производственно-технологических системах",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Системы и средства управления технологическими процессами",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Технологии Индустрии 4.0 и управление инновационными проектами",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Управление инновациями в промышленности",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Функциональные наноматериалы",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Техническая эстетика в проектировании и градостроительстве",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Рисунок",
        score: "40",
      },
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
    ],
  },
  {
    title:
      "Техническая эстетика и материалы в архитектуре, реставрации и строительстве",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Рисунок",
        score: "40",
      },
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
    ],
  },
  {
    title: "Технология художественной обработки металлов",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Рисунок",
        score: "40",
      },
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
    ],
  },
  {
    title: "Конструирование швейных изделий",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Рисунок",
        score: "40",
      },
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
    ],
  },
  {
    title: "Инновационные технологии в агроиндустрии",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Технический сервис в агропромышленном комплексе",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Технологии и средства производства сельскохозяйственной техники",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Проектирование, эксплуатация и сертификация высокотехнологичной сельскохозяйственной техники",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Генетика и селекция рыб",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Рыбоводство",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title:
      "Проектирование технического оборудования и предприятий аквакультуры",
    required: [
      {
        title: "Русский язык",
        score: "40",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
    optional: [
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Химия",
        score: "39",
      },
    ],
  },
  {
    title: "Охотоведение, кинология и зоопарковое дело",
    required: [
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Химия",
        score: "39",
      },
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Физика",
        score: "39",
      },
    ],
  },
  {
    title: "Психология",
    required: [
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Обществознание",
        score: "45",
      },
    ],
  },
  {
    title: "Бухгалтерский учет, анализ и аудит",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Банковское дело в национальной и мировой экономике",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Инженерная экономика и сметное дело в строительстве",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Мировая экономика и международный бизнес",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Стратегическое управление организацией",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Экономика бизнеса",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Финансы и кредит",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Цифровая экономика",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Экономика инноваций и финансовый консалтинг",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Экономика малого и среднего предпринимательства",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Экономика организации",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Бизнес-аналитика",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Маркетинг",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Менеджмент международного бизнеса",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Менеджмент организации",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Менеджмент предпринимательства",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Нейромаркетинг и управление продажами",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Производственный менеджмент",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Управление малым бизнесом",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Финансовый менеджмент",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Управление коммерческой деятельностью",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Логистика и управление цепями поставок",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Международная торговля",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Электронная коммерция",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title:
      "Товароведение и экспертиза товаров в сфере производства и обращения непродовольственных товаров и сырья",
    required: [
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Социальный менеджмент",
    required: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "География",
        score: "40",
      },
      {
        title: "Литература",
        score: "40",
      },
    ],
  },
  {
    title: "Государственно-правовой",
    required: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Иностранный язык",
        score: "30",
      },
    ],
  },
  {
    title: "Гражданско-правовой",
    required: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Иностранный язык",
        score: "30",
      },
    ],
  },
  {
    title: "Адвокатская и судебная деятельность",
    required: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Иностранный язык",
        score: "30",
      },
    ],
  },
  {
    title: "Уголовно-правовой",
    required: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Иностранный язык",
        score: "30",
      },
    ],
  },
  {
    title: "Реклама",
    required: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Иностранный язык",
        score: "30",
      },
    ],
  },
  {
    title: "Связи с общественностью",
    required: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Иностранный язык",
        score: "30",
      },
    ],
  },
  {
    title: "Нейромедиа",
    required: [
      {
        title: "Основы медиакоммуникации",
        score: "40",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Литература",
        score: "40",
      },
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Производство цифрового контента",
    required: [
      {
        title: "Основы медиакоммуникации",
        score: "40",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Литература",
        score: "40",
      },
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "История",
        score: "35",
      },
    ],
  },
  {
    title: "Сервис индустрии моды и красоты",
    required: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Иностранный язык",
        score: "30",
      },
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "География",
        score: "40",
      },
      {
        title: "Литература",
        score: "40",
      },
    ],
  },
  {
    title: "Социально-культурный сервис",
    required: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Иностранный язык",
        score: "30",
      },
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "География",
        score: "40",
      },
      {
        title: "Литература",
        score: "40",
      },
    ],
  },
  {
    title: "Технология и организация туроператорских и турагентских услуг",
    required: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Иностранный язык",
        score: "30",
      },
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "География",
        score: "40",
      },
      {
        title: "Литература",
        score: "40",
      },
    ],
  },
  {
    title: "Гостиничная деятельность",
    required: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Иностранный язык",
        score: "30",
      },
      {
        title: "Математика",
        score: "39",
      },
      {
        title: "География",
        score: "40",
      },
      {
        title: "Литература",
        score: "40",
      },
    ],
  },
  {
    title: "История. Археология",
    required: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
  },
  {
    title: "Логопедия",
    required: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
  },
  {
    title: "Начальное образование",
    required: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
  },
  {
    title: "Организация и управление дошкольным образованием",
    required: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
  },
  {
    title: "Социальная педагогика",
  },
  {
    title: "Социальная педагогика в образовании",
    required: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
  },
  {
    title: "Физическая культура",
    required: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
  },
  {
    title: "Информатика и вычислительная техника (Прикладная информатика)",
    required: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Физика",
        score: "39",
      },
      {
        title: "Информатика",
        score: "44",
      },
      {
        title: "Математика",
        score: "39",
      },
    ],
  },
  {
    title: "Иностранные языки и культуры стран изучаемых языков",
    required: [
      {
        title: "Иностранный язык",
        score: "30",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Литература",
        score: "40",
      },
      {
        title: "Обществознание",
        score: "45",
      },
    ],
  },
  {
    title: "Теория и методика преподавания иностранных языков и культур",
    required: [
      {
        title: "Иностранный язык",
        score: "30",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Литература",
        score: "40",
      },
      {
        title: "Обществознание",
        score: "45",
      },
    ],
  },
  {
    title: "Теория и практика перевода",
    required: [
      {
        title: "Иностранный язык",
        score: "30",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Литература",
        score: "40",
      },
      {
        title: "Обществознание",
        score: "45",
      },
    ],
  },
  {
    title:
      "Документирование деятельности органов государственной власти и местного самоуправления",
    required: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "География",
        score: "40",
      },
      {
        title: "Литература",
        score: "40",
      },
    ],
  },
  {
    title: "Культура православия",
    required: [
      {
        title: "Основы православной культуры",
        score: "40",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "История",
        score: "35",
      },
      {
        title: "Обществознание",
        score: "45",
      },
      {
        title: "География",
        score: "40",
      },
      {
        title: "Литература",
        score: "40",
      },
    ],
  },
  {
    title: "Спортивная тренировка",
    required: [
      {
        title: "Физическая культура",
        score: "37",
      },
      {
        title: "Русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "Биология",
        score: "39",
      },
      {
        title: "Обществознание",
        score: "45",
      },
    ],
  },
  {
    title: "Руководство студией кино-, фото- и видеотворчества",
    required: [
      {
        title: "художественное творчество",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "литература",
        score: "40",
      },
      {
        title: "обществознание",
        score: "45",
      },
      {
        title: "история",
        score: "35",
      },
      {
        title: "иностранный язык",
        score: "30",
      },
    ],
  },
  {
    title: "Руководство хореографическим коллективом",
    required: [
      {
        title: "художественное творчество",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "литература",
        score: "40",
      },
      {
        title: "обществознание",
        score: "45",
      },
      {
        title: "история",
        score: "35",
      },
      {
        title: "иностранный язык",
        score: "30",
      },
    ],
  },
  {
    title: "Руководство фольклорным коллективом",
    required: [
      {
        title: "художественное творчество",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "литература",
        score: "40",
      },
      {
        title: "обществознание",
        score: "45",
      },
      {
        title: "история",
        score: "35",
      },
      {
        title: "иностранный язык",
        score: "30",
      },
    ],
  },
  {
    title: "Менеджмент культурных индустрий",
    required: [
      {
        title: "литература",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "обществознание",
        score: "45",
      },
      {
        title: "история",
        score: "35",
      },
      {
        title: "иностранный язык",
        score: "30",
      },
    ],
  },
  {
    title: "Мюзикл, шоу-программы",
    required: [
      {
        title: "музыкальное искусство эстрады",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "литература",
        score: "40",
      },
      {
        title: "обществознание",
        score: "45",
      },
      {
        title: "история",
        score: "35",
      },
      {
        title: "иностранный язык",
        score: "30",
      },
    ],
  },
  {
    title: "Инструменты эстрадного оркестра",
    required: [
      {
        title: "музыкальное искусство эстрады",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "литература",
        score: "40",
      },
      {
        title: "обществознание",
        score: "45",
      },
      {
        title: "история",
        score: "35",
      },
      {
        title: "иностранный язык",
        score: "30",
      },
    ],
  },
  {
    title: "Дизайн среды",
    required: [
      {
        title: "рисунок",
        score: "40",
      },
      {
        title: "специальная графика",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "литература",
        score: "40",
      },
      {
        title: "обществознание",
        score: "45",
      },
    ],
  },
  {
    title: "Коммуникативный дизайн",
    required: [
      {
        title: "рисунок",
        score: "40",
      },
      {
        title: "специальная графика",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "литература",
        score: "40",
      },
      {
        title: "обществознание",
        score: "45",
      },
    ],
  },
  {
    title: "Графический дизайн",
    required: [
      {
        title: "рисунок",
        score: "40",
      },
      {
        title: "специальная графика",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "литература",
        score: "40",
      },
      {
        title: "обществознание",
        score: "45",
      },
    ],
  },
  {
    title: "Дизайн костюма",
    required: [
      {
        title: "рисунок",
        score: "40",
      },
      {
        title: "специальная графика",
        score: "40",
      },
      {
        title: "русский язык",
        score: "40",
      },
    ],
    optional: [
      {
        title: "литература",
        score: "40",
      },
      {
        title: "обществознание",
        score: "45",
      },
    ],
  },
];

@Injectable()
export class ProgramSubjectsService {
  constructor(
    @InjectRepository(ProgramSubjectEntity)
    private readonly programSubjectsRepository: Repository<
      ProgramSubjectEntity
    >,
    private readonly programsService: ProgramsService,
    private readonly subjectsService: SubjectsService
  ) {}

  async getAllProgramSubjects(): Promise<ProgramSubjectEntity[]> {
    return await this.programSubjectsRepository.find();
  }

  async getProgramSubjects(eventId: string): Promise<ProgramSubjectEntity[]> {
    return await this.programSubjectsRepository.find({
      where: { eventId: eventId },
    });
  }

  async getProgramSubjectById(id: string): Promise<ProgramSubjectEntity> {
    return await this.programSubjectsRepository.findOne(id);
  }

  // async searchBySubjects(subjects: SubjectEntity[]): Promise<ProgramEntity[]> {
  //   for (const subject of subjects) {
  //     const programSubjects = await this.programSubjectsRepository.find({
  //       where: { subject: subject },
  //     });
  //     for (const programSubject of programSubjects) {

  //     }
  //   }
  // }

  async tieSubjcts(): Promise<void> {
    for (const subject of subjects) {
      const program = await this.programsService.getProgramByName(
        subject.title
      );
      if (!program) {
        console.error("!!!!!! Program " + subject.title + " not found !!!!!!!");
      }

      if (subject.required) {
        for (const requiredSubject of subject.required) {
          if ((requiredSubject as any).score) {
            const subj = await this.subjectsService.getSubjectByName(
              requiredSubject.title
            );

            if (subj) {
              await this.programSubjectsRepository.save({
                program: program,
                subject: subj,
                required: true,
                score: (requiredSubject as any).score || 0,
              });
            }
          } else {
            console.log("no score in required ", subject);
          }
        }
      }

      if (subject.optional) {
        for (const optionalSubject of subject.optional) {
          if ((optionalSubject as any).score) {
            const optSubj = await this.subjectsService.getSubjectByName(
              optionalSubject.title
            );

            if (optSubj) {
              await this.programSubjectsRepository.save({
                program: program,
                subject: optSubj,
                required: false,
                score: (optionalSubject as any).score || 0,
              });
            }
          } else {
            console.log("no score in optional ", subject);
          }
        }
      }
    }
  }
}
