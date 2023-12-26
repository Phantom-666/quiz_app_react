const wait = (sec) =>
  new Promise((res, rej) => {
    setTimeout(() => res(), sec * 1000)
  })

const fetchData = () => {
  const questions = {
    categories: [
      {
        name: "Geography",
        questions: [
          {
            question: "What is the capital of France?",
            answer: "Paris",
            answers: ["Berlin", "London", "Madrid", "Paris"],
          },
          {
            question: "What is the capital of Australia?",
            answer: "Canberra",
            answers: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
          },
          {
            question: "What is the capital of Brazil?",
            answer: "Brasília",
            answers: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
          },
          {
            question: "What is the capital of Canada?",
            answer: "Ottawa",
            answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
          },
          {
            question: "What is the capital of Russia?",
            answer: "Moscow",
            answers: [
              "St. Petersburg",
              "Novosibirsk",
              "Yekaterinburg",
              "Moscow",
            ],
          },
        ],
      },
      {
        name: "Science",
        questions: [
          {
            question: "Which planet is known as the Red Planet?",
            answer: "Mars",
            answers: ["Venus", "Jupiter", "Saturn", "Mars"],
          },
          {
            question: "Who developed the theory of relativity?",
            answer: "Einstein",
            answers: ["Newton", "Galileo", "Hawking", "Einstein"],
          },
          {
            question: "What is the largest mammal?",
            answer: "Blue whale",
            answers: ["Elephant", "Giraffe", "Dolphin", "Blue whale"],
          },
          {
            question: "What is the chemical symbol for gold?",
            answer: "Au",
            answers: ["Ag", "Cu", "Fe", "Au"],
          },
          {
            question: "What is the chemical symbol for silver?",
            answer: "Ag",
            answers: ["Au", "Cu", "Fe", "Ag"],
          },
        ],
      },
      {
        name: "Literature",
        questions: [
          {
            question: "Who wrote 'Romeo and Juliet'?",
            answer: "Shakespeare",
            answers: ["Dickens", "Austen", "Hemingway", "Shakespeare"],
          },
          {
            question: "Who wrote 'To Kill a Mockingbird'?",
            answer: "Lee",
            answers: ["Twain", "Fitzgerald", "Steinbeck", "Lee"],
          },
          {
            question: "Who painted 'Starry Night'?",
            answer: "Van Gogh",
            answers: ["Da Vinci", "Monet", "Picasso", "Van Gogh"],
          },
          {
            question: "Who is the author of 'The Great Gatsby'?",
            answer: "Fitzgerald",
            answers: ["Hemingway", "Faulkner", "Steinbeck", "Fitzgerald"],
          },
          {
            question: "Who wrote 'Pride and Prejudice'?",
            answer: "Austen",
            answers: ["Brontë", "Dickens", "Woolf", "Austen"],
          },
        ],
      },
      {
        name: "History",
        questions: [
          {
            question: "In what year did World War II end?",
            answer: "1945",
            answers: ["1918", "1939", "1945", "1955"],
          },
          {
            question: "What year did the Titanic sink?",
            answer: "1912",
            answers: ["1905", "1912", "1920", "1931"],
          },
          {
            question:
              "In what year did the United States declare independence?",
            answer: "1776",
            answers: ["1607", "1620", "1776", "1789"],
          },
          {
            question: "In what year did the Berlin Wall fall?",
            answer: "1989",
            answers: ["1961", "1975", "1989", "1991"],
          },
        ],
      },
      {
        name: "Nature",
        questions: [
          {
            question: "What is the largest desert in the world?",
            answer: "Antarctica",
            answers: ["Sahara", "Arctic", "Gobi", "Antarctica"],
          },
          {
            question: "Which river is the longest in the world?",
            answer: "Nile",
            answers: ["Amazon", "Yangtze", "Mississippi", "Nile"],
          },
          {
            question: "What is the largest island in the world?",
            answer: "Greenland",
            answers: ["Australia", "Borneo", "Greenland", "Madagascar"],
          },
          {
            question: "What is the largest bird in the world?",
            answer: "Ostrich",
            answers: ["Emu", "Kiwi", "Penguin", "Ostrich"],
          },
          {
            question: "What is the largest mammal on land?",
            answer: "Elephant",
            answers: ["Rhino", "Hippopotamus", "Giraffe", "Elephant"],
          },
        ],
      },
    ],
  }

  return { questions }
}

export { fetchData, wait }
