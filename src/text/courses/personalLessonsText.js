import { courseDuration, lessonDuration, payment } from "./sharedCoursesText";

const personalLessonsText = {
  bannerHeading: {
    uk: "Індивідуальні уроки",
    en: "Personal lessons",
  },
  bannerParagraphs: [],
  descriptionParagraphs: [
    {
      uk: "Навчання one-on-one з нашими кваліфікованими викладачами англійської, іспанської, польської, французької мов, як в приміщенні школи, так і в on-line форматі. Гнучкість індивідуального навчання дозволить ефективно спланувати свій час, оскільки розклад уроків узгоджується індивідуально для кожного клієнта.",
      en: "Learn one-on-one from our certified teachers of English, Spanish, Polish and French - on our premises or online. Plan your time more efficiently by negotiating a schedule based on your personal needs.",
    },
    {
      uk: "Також, є можливість займатись в парі або втрьох, ціна індивідуального уроку, при цьому, зменшується.",
      en: "Also you can choose to study in pairs or 3-person groups, in which case the cost of the lessons decreases.",
    },
    {
      uk: "При оплаті за 8 і більше індивідуальних уроків наперед надається знижка.",
      en: "Get a discount when you pay for 8 or more personal lessons in advance.",
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
          uk: "250 грн за урок (1 особа)",
          en: "250 UAH per lesson (1 person)",
        },
        {
          uk: "480 грн за урок (2 особи)",
          en: "480 UAH per lesson (2 persons)",
        },
        {
          uk: "660 грн за урок (3 особи)",
          en: "660 UAH per lesson (3 persons)",
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
          uk: "300 грн за урок (1 особа)",
          en: "300 UAH per lesson (1 person)",
        },
        {
          uk: "580 грн за урок (2 особи)",
          en: "580 UAH per lesson (2 persons)",
        },
        {
          uk: "810 грн за урок (3 особи)",
          en: "810 UAH per lesson (3 persons)",
        },
      ],
    },
    {
      title: {
        uk: "Знижки",
        en: "Discounts",
      },
      sublines: [
        {
          uk: "при оплаті за 8 уроків наперед знижка 50 грн",
          en: "50 UAH discount when you pay for 8 lessons in advance",
        },
        {
          uk: "при оплаті за 10 уроків наперед знижка 100 грн",
          en: "100 UAH discount when you pay for 10 lessons in advance",
        },
      ],
    },
  ],
};

export default personalLessonsText;
