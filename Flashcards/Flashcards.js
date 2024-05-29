const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
const [ansId, setAnsId] = useState();
const [cls, setCls] = useState(undefined);

function handleGrid(ques) {
  setAnsId(ques.id);
  setCls("selected");
}

export default function FlashCards() {
  <div className="flashcards">
    {questions.map((ques) => (
      <div
        onClick={() => handleGrid(ques)}
        className={ansId === ques.id ? "selected" : undefined}
      >
        {ansId === ques.id ? ques.answer : ques.question}
      </div>
    ))}
  </div>;
}
