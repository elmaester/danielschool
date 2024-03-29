import {
  certifiedTeachers,
  lessonDuration,
  monthlyPayment,
  nativeSpeakers,
  payment,
  paymentPerLesson,
  studySchedule,
} from "./sharedCoursesText";

const kidsCourseText = {
  bannerHeading: {
    uk: "Групові заняття для школярів 6-15 років",
    en: "Group classes for school students aged 6-15",
  },
  bannerParagraphs: [],
  descriptionParagraphs: [
  {
    uk: "Навчання відбувається в класах впродовж року на постійній основі і, при цьому, діти також спілкуються з носіями мови та проходять проміжні тести. Групи формуються за віком та рівнем знання мови від 4-х до 8-ми дітей.",
    en: "Kids study on premises throughout the academic year on a regular basis, communicate with native speakers and take milestone tests. Groups of 4 to 8 kids are assembled based on age and language proficiency.",
  },
  {
    uk: `${studySchedule.uk} для молодших
Двічі на тиждень Пн, Ср або Вт, Чт 
15:30 – 16:45, 8 уроків в місяць`,
    en: `${studySchedule.en} for juniors
Twice per week on Mon and Wed or Tues and Thurs
3:30pm - 4:45pm, 8 classes per month`,
  },
  {
    uk: `${studySchedule.uk} для старших
Двічі або тричі на тиждень Вт, Чт або Пн, Ср, Пт
16:30 – 17:45, 8 або 12 уроків в місяць`,
    en: `${studySchedule.en} for seniors
Two or three times per week on Tues, Thurs or Mon, Wed, Fri
4:30pm - 5:45pm, 8 or 12 classes per month`,
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
          uk: "1,15 год. (15:30 - 16:45/16:30 - 17:45)",
          en: "1.15 hours, (3:30pm - 4:45pm/4:30pm - 5:45pm)",
        },
      ],
    },
    {
      title: paymentPerLesson,
      sublines: [
        {
          uk: "145 грн",
          en: "145 UAH",
        },
      ],
    },
    {
      title: {
        uk: "Двічі на тиждень Вт, Чт або Пн, Ср, для молодших",
        en: "Twice per week on Tues, Thurs or Mon, Wed for juniors",
      },
      sublines: [],
    },
    {
      title: {
        uk: "Двічі або тричі на тиждень Вт, Чт або Пн, Ср, Пт для старших",
        en: "Two or three times per week on Tues, Thurs or Mon, Wed, Fri for seniors",
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
