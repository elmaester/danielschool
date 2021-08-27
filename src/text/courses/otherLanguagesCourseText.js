import {
  certifiedTeachers,
  courseDuration,
  groupSize,
  lessonDuration,
  monthlyPayment,
  payment,
  paymentPerLesson,
} from "./sharedCoursesText";

const otherLanguagesCourseText = {
  bannerHeading: {
    uk: "Курси вивчення іспанської, французької, польської, румунської мов",
    en: "Spanish, French, Polish and Romanian courses",
  },
  bannerParagraphs: [],
  descriptionParagraphs: [
    {
      uk: "Курси для тих, хто бажає вивчати мову “з нуля” для виїзду за кордон.",
      en: "Courses for students with zero prior knowledge and a desire to go abroad.",
    },
    {
      uk: "Уроки включають різноманітні завдання на слухання, стислий курс граматики для розуміння текстів та розмови.",
      en: "Lessons include varied listening tasks and a condensed introduction to grammar to help with understanding of texts and speech.",
    },
  ],
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
          uk: "Вівторок/Четвер/Субота (дистанційно)",
          en: "Tuesday, Thursday, Saturday (remotely)",
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
          uk: "як денний, так і вечірній",
          en: "daytime and/or evening",
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
