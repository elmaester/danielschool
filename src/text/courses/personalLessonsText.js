import {
  courseDuration,
  lessonDuration,
  payment,
} from "./sharedCoursesText";

const personalLessonsText = {
  bannerHeading: {
    uk: "Індивідуальні уроки",
    en: "",
  },
  bannerParagraphs: [],
  descriptionParagraphs: [
    {
      uk: "Навчання one-on-one з нашими дипломованими викладачами, де розклад уроків узгоджується індивідуально для кожного клієнта.",
      en: "",
    },
  ],
  featuresList: [
    {
      title: courseDuration,
      sublines: [
        {
          uk: "індивідуально",
          en: "",
        },
      ],
    },
    {
      title: lessonDuration,
      sublines: [
        {
          uk: "від 60 хвилин",
          en: "",
        },
      ],
    },
    {
      title: payment,
      sublines: [
        {
          uk: "перед початком навчання",
          en: "",
        },
      ],
    },
    {
      title: {
        uk: "Вартість для дітей",
        en: "",
      },
      sublines: [
        {
          uk: "200 грн за урок",
          en: "",
        },
      ],
    },
    {
      title: {
        uk: "Вартість для дорослих",
        en: "",
      },
      sublines: [
        {
          uk: "250 грн за урок",
          en: "",
        },
      ],
    },
  ],
};

export default personalLessonsText;
