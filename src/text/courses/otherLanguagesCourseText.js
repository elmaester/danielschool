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
    en: "",
  },
  bannerParagraphs: [],
  descriptionParagraphs: [
    {
      uk: "Курси для тих, хто бажає вивчати мову “з нуля” для виїзду за кордон.",
      en: "",
    },
    {
      uk: "Уроки включають різноманітні завдання на слухання, стислий курс граматики для розуміння текстів та розмови.",
      en: "",
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
          en: "",
        },
      ],
    },
    {
      title: lessonDuration,
      sublines: [
        {
          uk: "1,45 год.",
          en: "",
        },
      ],
    },
    {
      title: paymentPerLesson,
      sublines: [
        {
          uk: "150 грн",
          en: "",
        },
      ],
    },
    {
      title: {
        uk: "Тричі на тиждень",
        en: "",
      },
      sublines: [
        {
          uk: "Вівторок/Четвер/Субота (дистанційно)",
          en: "",
        },
      ],
    },
    {
      title: {
        uk: "Час занять",
        en: "",
      },
      sublines: [
        {
          uk: "як денний, так і вечірній",
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
  ],
};

export default otherLanguagesCourseText;
