import React, { useState } from "react";
import questions from "./data";
import "./App.css";

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Quiz Completed!</h2>
          <p>Your Score: <strong>{score} / {questions.length}</strong></p>
        </div>
      ) : (
        <>
          <div className="question-box">
            <h2>Question {currentQ + 1}</h2>
            <p>{questions[currentQ].question}</p>
          </div>
          <div className="options">
            {questions[currentQ].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
