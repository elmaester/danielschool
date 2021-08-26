import { certifiedTeachers, courseDuration, groupSize, lessonDuration, monthlyPayment, nativeSpeakers, payment, speakingClubs } from "./sharedCoursesText";

const onlineCourseText = {
  bannerHeading: {
    uk: "Курс вихідного дня ONLINE",
    en: "",
  },
  bannerParagraphs: [
  ],
  descriptionParagraphs: [
    {
      uk: "Стандартний курс для працюючих людей, яким складно поєднувати заняття з основною діяльністю по буднях.",
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
          uk: "5,5 місяців",
          en: "",
        },
      ],
    },
    {
      title: lessonDuration,
      sublines: [
        {
          uk: "2,15 год.",
          en: "",
        },
      ],
    },
    {
      title: {
        uk: "Двічі на тиждень",
        en: "",
      },
      sublines: [
        {
          uk: "Субота та Неділя",
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
      sublines: [
        monthlyPayment,
      ],
    },
    {
      title: {
        uk: "Ранковий курс",
        en: "",
      },
      sublines: [
        {
          uk: "1400/міс",
          en: "",
        },
        {
          uk: "(10:00 - 12:15)",
          en: "",
        },
      ],
    },
  ],
};

export default onlineCourseText;
