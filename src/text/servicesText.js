import * as React from 'react';

import GroupClassesIcon from "../images/team.svg";
import PersonalLessonsIcon from "../images/user.svg";
import GroupSchoolIcon from "../images/knowledge.svg";
import OnlineWeekendIcon from "../images/job-interview.svg";
import OtherLanguagesIcon from "../images/linguistics.svg";
import OnlineTestingIcon from "../images/exam.svg";

export const services = [
  {
    uk: "Групові заняття для дорослих",
    en: "Group classes for adults",
    icon: () => <GroupClassesIcon />,
    link: "adults-group",
  },
  {
    uk: "Індивідуальні уроки",
    en: "Personal lessons",
    icon: () => <PersonalLessonsIcon />,
    link: "personal-lessons",
  },
  {
    uk: "Групові заняття для школярів",
    en: "Group classes for school students",
    icon: () => <GroupSchoolIcon />,
    link: "kids-group",
  },
  {
    uk: "Курси вихідного дня онлайн",
    en: "Online weekend courses",
    icon: () => <OnlineWeekendIcon />,
    link: "online-group",
  },
  {
    uk: "Курси іспанської, румунської, польської мов",
    en: "Spanish, Romanian and Polish courses",
    icon: () => <OtherLanguagesIcon />,
    link: "other-languages",
  },
  {
    uk: "Тестування Online",
    en: "Online testing",
    icon: () => <OnlineTestingIcon />,
    link: "online-test",
  },
];

export const more = { uk: "Детальніше", en: "More" };
