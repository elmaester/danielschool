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

const sharedParagraphs = [
  {
    uk: "Стандартний курс англійської мови для працюючих людей, яким складно поєднувати заняття з основною діяльністю по буднях. Щотижня є розмовна практика з носіями мови. Заняття в групах від 4-х до 8-ми людей, сформованих за рівнем знання мови проходять в режимі онлайн (Zoom) двічі на тиждень. Тривалість курсу – 5,5 місяців.",
    en: "A standardized English course for people with full-time jobs who struggle with finding time to study during the work week. Weekly speaking practice with native speakers. Study online (Zoom) twice a week in groups of 4 to 8 people, assembled based on language proficiency. Course duration: 5.5 months.",
  },
  {
    uk: `Розклад занять
Субота Неділя 
10:00 - 12:15, 8 уроків в місяць`,
    en: `Study schedule
Saturday, Sunday
10am - 12:15pm, 8 classes per month`,
  },
];

const onlineCourseText = {
  bannerHeading: {
    uk: "Курс вихідного дня ONLINE",
    en: "Online weekend course",
  },
  bannerParagraphs: sharedParagraphs,
  descriptionParagraphs: sharedParagraphs,
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
      sublines: [monthlyPayment],
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
