import {
  courseDuration,
  lessonDuration,
  payment,
} from "./sharedCoursesText";

const personalLessonsText = {
  bannerHeading: {
    uk: "Індивідуальні уроки",
    en: "Personal lessons",
  },
  bannerParagraphs: [],
  descriptionParagraphs: [
    {
      uk: "Навчання one-on-one з нашими дипломованими викладачами, де розклад уроків узгоджується індивідуально для кожного клієнта.",
      en: "Learn one-on-one from our certified teachers, negotiate a schedule based on your personal needs.",
    },
  ],
  featuresList: [
    {
      title: courseDuration,
      sublines: [
        {
          uk: "індивідуально",
          en: "individual",
        },
      ],
    },
    {
      title: lessonDuration,
      sublines: [
        {
          uk: "від 60 хвилин",
          en: "at least 60 minutes",
        },
      ],
    },
    {
      title: payment,
      sublines: [
        {
          uk: "перед початком навчання",
          en: "before the lesson starts",
        },
      ],
    },
    {
      title: {
        uk: "Вартість для дітей",
        en: "Cost for children",
      },
      sublines: [
        {
          uk: "200 грн за урок",
          en: "200 UAH per lesson",
        },
      ],
    },
    {
      title: {
        uk: "Вартість для дорослих",
        en: "Cost for adults",
      },
      sublines: [
        {
          uk: "250 грн за урок",
          en: "250 UAH per lesson",
        },
      ],
    },
  ],
};

export default personalLessonsText;
