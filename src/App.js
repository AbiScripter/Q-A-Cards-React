import React, { useState } from "react";
import ReactDOM from "react-dom/client";

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
      "What do we call an input cardement that is completcardy synchronised with state?",
    answer: "Controlled cardement",
  },
];

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleCardOpen(id) {
    //already selected
    if (selectedId == id) {
      setSelectedId(null);
      return;
    }
    setSelectedId(id);
  }

  return (
    <>
      <h1>Q & A</h1>

      <div className="flashcards">
        {questions.map((card) => {
          const isOpen = selectedId === card.id;

          console.log(card.id + " " + isOpen);
          return (
            <div
              key={card.id}
              className={isOpen ? "selected" : ""}
              onClick={() => handleCardOpen(card.id)}
            >
              <p>{isOpen ? card.answer : card.question}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<Flashcards />);
