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
    en: "",
  },
  bannerParagraphs: [],
  descriptionParagraphs: [
    {
      uk: "Навчання відбувається впродовж року на постійній основі і, при цьому, діти проходять проміжні тести.",
      en: "",
    },
    {
      uk: "Діти також спілкуються з носіями мови.",
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
      title: {
        uk: "Розмовна практика в ігровій формі кожного тижня",
        en: "",
      },
      sublines: [],
    },
    {
      title: lessonDuration,
      sublines: [
        {
          uk: "1,15 год. (15:30 - 16:45)",
          en: "",
        },
      ],
    },
    {
      title: paymentPerLesson,
      sublines: [
        {
          uk: "100 грн",
          en: "",
        },
      ],
    },
    {
      title: {
        uk: "Тричі або двічі на тиждень",
        en: "",
      },
      sublines: [],
    },
    {
      title: {
        uk: "Групи від 4-х до 8-ми дітей",
        en: "",
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
