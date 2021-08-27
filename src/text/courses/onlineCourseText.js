import { certifiedTeachers, courseDuration, groupSize, lessonDuration, monthlyPayment, nativeSpeakers, payment, speakingClubs } from "./sharedCoursesText";

const onlineCourseText = {
  bannerHeading: {
    uk: "Курс вихідного дня ONLINE",
    en: "Online weekend course",
  },
  bannerParagraphs: [
  ],
  descriptionParagraphs: [
    {
      uk: "Стандартний курс для працюючих людей, яким складно поєднувати заняття з основною діяльністю по буднях.",
      en: "A standardized course for people with full-time jobs who struggle with finding time to study during the work week.",
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
          en: "5.5 months",
        },
      ],
    },
    {
      title: lessonDuration,
      sublines: [
        {
          uk: "2,15 год.",
          en: "2.15 hours",
        },
      ],
    },
    {
      title: {
        uk: "Двічі на тиждень",
        en: "Twice per week",
      },
      sublines: [
        {
          uk: "Субота та Неділя",
          en: "Saturday and Sunday",
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
        en: "Morning course",
      },
      sublines: [
        {
          uk: "1400/міс",
          en: "1400/month",
        },
        {
          uk: "(10:00 - 12:15)",
          en: "10am - 12:15pm",
        },
      ],
    },
  ],
};

export default onlineCourseText;
