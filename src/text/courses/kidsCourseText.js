import {
  certifiedTeachers,
  lessonDuration,
  monthlyPayment,
  nativeSpeakers,
  payment,
  paymentPerLesson,
} from "./sharedCoursesText";

const kidsCourseText = {
  bannerHeading: {
    uk: "Групові заняття для школярів 8-12 років",
    en: "Group classes for school students aged 8-12",
  },
  bannerParagraphs: [],
  descriptionParagraphs: [
    {
      uk: "Навчання відбувається впродовж року на постійній основі і, при цьому, діти проходять проміжні тести.",
      en: "Kids study throughout the academic year on a regular basis and take milestone tests.",
    },
    {
      uk: "Діти також спілкуються з носіями мови.",
      en: "Kids also communicate with native speakers.",
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
      title: {
        uk: "Розмовна практика в ігровій формі кожного тижня",
        en: "Weekly speaking practice disguised as a game",
      },
      sublines: [],
    },
    {
      title: lessonDuration,
      sublines: [
        {
          uk: "1,15 год. (15:30 - 16:45)",
          en: "1.15 hours, (3:30pm - 4:45pm)",
        },
      ],
    },
    {
      title: paymentPerLesson,
      sublines: [
        {
          uk: "100 грн",
          en: "100 UAH",
        },
      ],
    },
    {
      title: {
        uk: "Тричі або двічі на тиждень",
        en: "3 or 2 times per week",
      },
      sublines: [],
    },
    {
      title: {
        uk: "Групи від 4-х до 8-ми дітей",
        en: "Groups of 4 to 8 kids",
      },
      sublines: [],
    },
    {
      title: payment,
      sublines: [monthlyPayment],
    },
  ],
};

export default kidsCourseText;
