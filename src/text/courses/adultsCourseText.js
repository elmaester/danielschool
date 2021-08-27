import {
  certifiedTeachers,
  courseDuration,
  groupSize,
  lessonDuration,
  monthlyPayment,
  nativeSpeakers,
  payment,
  speakingClubs,
} from "./sharedCoursesText";

const adultsCourseText = {
  bannerHeading: {
    uk: "Групові заняття для дорослих",
    en: "Group classes for adults",
  },
  bannerParagraphs: [
    {
      uk: "Групові заняття фокусуються на розмовній практиці англійської з носіями мови з США та Британії.",
      en: "Group classes focus on English speaking practice with native speakers from the USA and the UK.",
    },
    {
      uk: "Максимум спілкування і практики!",
      en: "Lots of speaking practice!",
    },
    {
      uk: "Це саме те, що потрібно, коли мета навчання - вільно розмовляти англійською!",
      en: "Just what you need to achieve English speaking fluency!",
    },
  ],
  descriptionParagraphs: [
    {
      uk: "Курс навчання 4 місяці, за який досягається певний рівень мови.",
      en: "A 4-months-long course to help you achieve some proficiency in the language.",
    },
    {
      uk: "Під час занять є практика з носіями мови. ",
      en: "You practice with native speakers during the lessons.",
    },
    {
      uk: "Графік занять - фіксований.",
      en: "Fixed schedule",
    },
    {
      uk: "Після кожного рівня - ви складаєте тест та отримаєте сертифікат Daniel’s school.",
      en: "After completing each level you take a test and receive the Daniel's school certificate.",
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
          uk: "1,45 год., тричі на тиждень",
          en: "1.45 hours, 3 times per week",
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
      title: {
        uk: "Денний курс",
        en: "Daytime course",
      },
      sublines: [
        {
          uk: "1500/міс",
          en: "1500/month",
        },
        {
          uk: "(10:00-11:45/12:00-13:45)",
          en: "(10am-11:45am/12pm-1:45pm)",
        },
      ],
    },
    {
      title: {
        uk: "Вечірній курс",
        en: "Evening course",
      },
      sublines: [
        {
          uk: "1600/міс",
          en: "1600/month",
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
