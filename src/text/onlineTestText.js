export const questions = [
  {
    prompt: "I have been living in Spain ......",
    answers: [
      "since ten years.",
      "ten years ago.",
      "for ten years.",
      "ten years.",
    ],
    correctIndex: 2,
  },
  {
    prompt: "This is the ...... thing I have ever done.",
    answers: [
      "harder",
      "hardest",
      "hard",
      "more hard",
    ],
    correctIndex: 1,
  },
  {
    prompt: "Have you finished with the newspaper ......",
    answers: [
      "still?",
      "already?",
      "now?",
      "yet?",
    ],
    correctIndex: 3,
  },
  {
    prompt: "If I want to pass my exam, I ...... study harder.",
    answers: [
      "will have to",
      "would have to",
      "had to",
      "want to",
    ],
    correctIndex: 0,
  },
  {
    prompt: "James is ......",
    answers: [
      "not so clever than",
      "not as clever than",
      "not as clever as",
      "not so clever as",
    ],
    correctIndex: 2,
  },
  {
    prompt: "...... people eat very healthy food.",
    answers: [
      "Very little",
      "Very less",
      "Very least",
      "Very few",
    ],
    correctIndex: 3,
  },
  {
    prompt: "",
    answers: [
      "We told him going to the doctor.",
      "We told him to go to the doctor.",
      "We told him he go to the doctor.",
      "We told that he goes to the doctor.",
    ],
    correctIndex: 1,
  },
  {
    prompt: "What ...... now?",
    answers: [
      "does you",
      "do you do",
      "will you do",
      "do you",
    ],
    correctIndex: 2,
  },
  {
    prompt: "He hasn't got ...... time for a coffee.",
    answers: [
      "many",
      "few",
      "a lot",
      "much",
    ],
    correctIndex: 3,
  },
  {
    prompt: "I have arranged ...... dinner with Sophia on Thursday.",
    answers: [
      "to have",
      "having",
      "have had",
      "had",
    ],
    correctIndex: 0,
  },
  {
    prompt: "I have never been in Scotland.",
    correctness: false,
  },
  {
    prompt: "We are going to Brazil in the summer.",
    correctness: true,
  },
  {
    prompt: "It costed me thirty Euros to get the visa.",
    correctness: false,
  },
  {
    prompt: "I can swim when I was five.",
    correctness: false,
  },
  {
    prompt: "What are you doing next weekend?",
    correctness: true,
  },
  {
    prompt: "He must finish the job yesterday.",
    correctness: false,
  },
  {
    prompt: "You shouldn't collect me from the office, it isn't necessary.",
    correctness: false,
  },
  {
    prompt: "She's married to a doctor, doesn't she?",
    correctness: false,
  },
  {
    prompt: "There's a woman ...... handbag was stolen.",
    answers: [
      "who's",
      "whose",
    ],
    correctIndex: 1,
  },
  {
    prompt: "The guy ...... we met at the concert is a friend of my brother.",
    answers: [
      "who",
      "that",
    ],
    correctIndex: 0,
  },
  {
    prompt: "A social networking site is ...... you can meet new people.",
    answers: [
      "when",
      "where",
    ],
    correctIndex: 1,
  },
  {
    prompt: "...... one do you want? The red one or the blue one?",
    answers: [
      "What",
      "Which",
    ],
    correctIndex: 1,
  },
  {
    prompt: "They invited us to dinner ...... is very nice of them.",
    answers: [
      "which",
      "that",
    ],
    correctIndex: 0,
  },
  {
    prompt: "He's that famous actor ...... is always on TV.",
    answers: [
      "which",
      "who",
    ],
    correctIndex: 1,
  },
  {
    prompt: "...... book is this?",
    answers: [
      "Who's",
      "Whose",
    ],
    correctIndex: 1,
  },
]

export const getScore = number => {
  if (number < 6) return "A1";
  if (number < 11) return "A2";
  if (number < 16) return "B1";
  if (number < 21) return "B1+";
  return "B2";
}

export const verdictMessage = {
  one: {
    uk: "Дякуємо! Ви вірно відповіли на",
    en: "Thank you! You gave"
  },
  two: {
    uk: "запитань із 25-ти, тому ймовірно ваш рівень може бути",
    en: "correct answers out of 25, therefore your level is estimated to be"
  },
  three: {
    uk: "Запишіться на курс і досягніть наступного рівня! ",
    en: "Sign up for a course and reach the next level!"
  },
}

export const confirmButtonText = {
    uk: "Отримайте свій результат",
    en: "Get your result"
}
