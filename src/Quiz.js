import React from "react";
import "./App.css";
import quizImage from "./img/undraw_adventure_4hum 1.svg";

function Quiz() {
  return (
    <div>
      <div className="quiz-title">
        <h2>Country Quiz</h2>
        <img src={quizImage} alt="adventure" />
      </div>

      <div className="quiz-container hidden">
        <h3 className="question">Kuala Lumpur is the capital of</h3>
        <div className="answer-options">
          <p className="option">
            <span>A</span> Country
          </p>
          <p className="option">
            <span>B</span> Country
          </p>
          <p className="option">
            <span>C</span> Country
          </p>
          <p className="option">
            <span>D</span> Country
          </p>
          <button className="btn-next hidden">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
