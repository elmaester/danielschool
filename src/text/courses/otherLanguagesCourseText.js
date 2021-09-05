import {
  certifiedTeachers,
  courseDuration,
  groupSize,
  lessonDuration,
  monthlyPayment,
  payment,
  paymentPerLesson,
} from "./sharedCoursesText";

const sharedParagraphs = [
  {
    uk: "Курси для тих, хто бажає вивчати мову “з нуля” для виїзду за кордон. Методика навчання - унікальна, розроблена викладачами, включає в себе різноманітні завдання на слухання, стислий курс граматики для розуміння текстів та розмови. Також, є розмовна практика з носіями мови. Курс - 2 місяця навчання (І модуль). Кожен наступний модуль покращує Ваш рівень знань.",
    en: "Courses for students with zero prior knowledge and a desire to go abroad. Unique teaching methodology developed by our teachers includes varied listening tasks and a condensed introduction to grammar to help with understanding of texts and speech. Speaking practice with native speakers is also included. Course duraton is 2 months (module I). Each subsequent module enhances your abilities.",
  },
  {
    uk: "Заняття відбуваються в групах від 4-х до 8-ми людей в класах тричі на тиждень, 1 урок в тиждень (Субота) онлайн",
    en: "Lessons include varied listening tasks and a condensed introduction to grammar to help with understanding of texts and speech.",
  },
  {
    uk: `Розклад занять Вівторок Четвер Субота
17:00 – 18:45 або 19:00 – 20:45, 13 уроків в місяць`,
    en: `Schedule: Tuesday, Thursday, Saturday
5pm - 6:45pm or 7pm - 7:45pm, 13 classes per month`,
  },
];

const otherLanguagesCourseText = {
  bannerHeading: {
    uk: "Курси вивчення іспанської, французької, польської, румунської мов",
    en: "Spanish, French, Polish and Romanian courses",
  },
  bannerParagraphs: sharedParagraphs,
  descriptionParagraphs: sharedParagraphs,
  featuresList: [
    {
      title: certifiedTeachers,
      sublines: [],
    },
    {
      title: courseDuration,
      sublines: [
        {
          uk: "2 місяці (І модуль)",
          en: "2 months (module I)",
        },
      ],
    },
    {
      title: lessonDuration,
      sublines: [
        {
          uk: "1,45 год.",
          en: "1.45 hours",
        },
      ],
    },
    {
      title: paymentPerLesson,
      sublines: [
        {
          uk: "150 грн",
          en: "150 UAH",
        },
      ],
    },
    {
      title: {
        uk: "Тричі на тиждень",
        en: "3 times per week",
      },
      sublines: [
        {
          uk: "Вівторок/Четвер/Субота",
          en: "Tuesday, Thursday, Saturday",
        },
      ],
    },
    {
      title: {
        uk: "Час занять",
        en: "Time of day",
      },
      sublines: [
        {
          uk: "в будні 17:00-18:45 або 19:00-20:45",
          en: "5pm - 6:45pm or 7pm - 8:45pm on week days",
        },
        {
          uk: "в Суботу в першій половині дня",
          en: "Before noon on Saturdays",
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
  ],
};

export default otherLanguagesCourseText;
