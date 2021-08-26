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
    en: "",
  },
  bannerParagraphs: [
    {
      uk: "Групові заняття фокусуються на розмовній практиці англійської з носіями мови з США та Британії.",
      en: "",
    },
    {
      uk: "Максимум спілкування і практики!",
      en: "",
    },
    {
      uk: "Це саме те, що потрібно, коли мета навчання - вільно розмовляти англійською!",
      en: "",
    },
  ],
  descriptionParagraphs: [
    {
      uk: "Курс навчання 4 місяці, за який досягається певний рівень мови.",
      en: "",
    },
    {
      uk: "Під час занять є практика з носіями мови. ",
      en: "",
    },
    {
      uk: "Графік занять - фіксований.",
      en: "",
    },
    {
      uk: "Після кожного рівня - ви складаєте тест та отримаєте сертифікат Daniel’s school.",
      en: "",
    },
    {
      uk: "Наступний курс на вищий рівень надається вже зі знижкою 5%.",
      en: "",
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
          en: "",
        },
      ],
    },
    {
      title: lessonDuration,
      sublines: [
        {
          uk: "1,45 год., тричі на тиждень",
          en: "",
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
        en: "",
      },
      sublines: [
        {
          uk: "1500/міс",
          en: "",
        },
        {
          uk: "(10:00-11:45/12:00-13:45)",
          en: "",
        },
      ],
    },
    {
      title: {
        uk: "Вечірній курс",
        en: "",
      },
      sublines: [
        {
          uk: "1600/міс",
          en: "",
        },
        {
          uk: "(17:00-18:45/19:00-20:45)",
          en: "",
        },
      ],
    },
  ],
};

export default adultsCourseText;
