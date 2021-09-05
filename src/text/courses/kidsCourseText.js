import {
  certifiedTeachers,
  lessonDuration,
  monthlyPayment,
  nativeSpeakers,
  payment,
  paymentPerLesson,
  studySchedule,
} from "./sharedCoursesText";

const sharedParagraphs = [
  {
    uk: "Навчання відбувається в класах впродовж року на постійній основі і, при цьому, діти також спілкуються з носіями мови та проходять проміжні тести. Групи формуються за віком та рівнем знання мови від 4-х до 8-ми дітей.",
    en: "Kids study on premises throughout the academic year on a regular basis, communicate with native speakers and take milestone tests. Groups of 4 to 8 kids are assembled based on age and language proficiency.",
  },
  {
    uk: `${studySchedule.uk} для молодших
Двічі на тиждень Вівторок Четвер
15:30 – 16:45, 8 уроків в місяць`,
    en: `${studySchedule.en} for juniors
Twice per week on Tuesdays and Thursdays
3:30pm - 4:45pm, 8 classes per month`,
  },
  {
    uk: `${studySchedule.uk} для старших
Тричі на тиждень Понеділок Середа П’ятниця
15:30 – 16:45, 13 уроків в місяць`,
    en: `${studySchedule.en} for seniors
Three times per week on Mondays, Wednesdays and Fridays
3:30pm - 4:45pm, 13 classes per month`,
  },
];

const kidsCourseText = {
  bannerHeading: {
    uk: "Групові заняття для школярів 8-12 років",
    en: "Group classes for school students aged 8-12",
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
        uk: "Двічі на тиждень Вівторок Четвер для молодших",
        en: "Twice per week on Tuesdays and Thursdays for juniors",
      },
      sublines: [],
    },
    {
      title: {
        uk: "Тричі на тиждень Понеділок Середа П’ятниця для старших",
        en: "Three times per week on Mondays, Wednesdays and Fridays for seniors",
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
