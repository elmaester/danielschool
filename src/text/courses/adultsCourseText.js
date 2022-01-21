import {
  certifiedTeachers,
  courseDuration,
  groupSize,
  lessonDuration,
  monthlyPayment,
  nativeSpeakers,
  payment,
  speakingClubs,
  studySchedule,
} from "./sharedCoursesText";

const adultsCourseText = {
  bannerHeading: {
    uk: "Групові заняття для дорослих",
    en: "Group classes for adults",
  },
  bannerParagraphs: [],
  descriptionParagraphs: [
    {
      uk: "Максимум спілкування і практики!",
      en: "Lots of speaking practice!",
    },
    {
      uk: "Це саме те, що потрібно, коли мета навчання - вільно розмовляти англійською! Ми фокусуємось на розмовній практиці англійської з носіями мови з США та Британії.",
      en: "Just what you need to achieve English speaking fluency! We focus on English speaking practice with native speakers from the USA and the UK.",
    },
    {
      uk: "Курс триває 4 місяці, в групах від 4-х до 8-ми людей, за який досягається певний рівень мови. Графік занять - фіксований, навчання проходить у приміщенні школи тричі на тиждень. Після кожного рівня (курсу) за результатами складається тест і отримується локальний сертифікат Daniel’s school.",
      en: "A 4-months-long course, taken in groups of 4 to 8 people, to help you achieve some proficiency in the language. Fixed schedule, classes occur 3 times per week on the school's premises. After completing each level (course) you take a test and receive the Daniel's School local certificate.",
    },
    {
      uk: "Наступний курс на вищий рівень надається вже зі знижкою 5%.",
      en: "The next higher level course is provided with a 5% discount.",
    },
  ],
  featuresList: [
    {
      title: certifiedTeachers,
      sublines: [],
    },
    {
      title: nativeSpeakers,
      sublines: [],
    },
    {
      title: speakingClubs,
      sublines: [],
    },
    {
      title: courseDuration,
      sublines: [
        {
          uk: "4 місяці",
          en: "4 months",
        },
      ],
    },
    {
      title: lessonDuration,
      sublines: [
        {
          uk: "1,45 год., двічі на тиждень",
          en: "1.45 hours, 2 times per week",
        },
      ],
    },
    {
      title: groupSize,
      sublines: [],
    },
    {
      title: payment,
      sublines: [monthlyPayment],
    },
    {
      title: studySchedule,
      sublines: [
        {
          uk: "Понеділок/Середа/П’ятниця або Вівторок/Четвер/Субота",
          en: "Monday/Wednesday/Friday or Tuesday/Thursday/Saturday",
        },
      ],
    },
    {
      title: {
        uk: "Денний курс двічі на тиждень",
        en: "Daytime course 2 times per week",
      },
      sublines: [
        {
          uk: "1400/міс",
          en: "1400/month",
        },
        {
          uk: "(10:00-11:45/12:00-13:45)",
          en: "(10am-11:45am/12pm-1:45pm)",
        },
      ],
    },
    {
      title: {
        uk: "Вечірній курс двічі на тиждень",
        en: "Evening course 2 times per week",
      },
      sublines: [
        {
          uk: "1500/міс",
          en: "1500/month",
        },
        {
          uk: "(17:00-18:45/19:00-20:45)",
          en: "(5pm-6:45pm/7pm-8:45pm)",
        },
      ],
    },
  ],
};

export default adultsCourseText;
