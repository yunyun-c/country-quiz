import resultImage from "./img/undraw_winners_ao2o 2.svg";
import React from "react";

function Result({ show, score, onRestart }) {
  return (
    <div>
      <div className={`result-container ${show ? "show" : "hidden"}`}>
        <img src={resultImage} alt="result" />
        <h3 className="result">Results</h3>
        <p className="score">
          You got <span>{score}</span> corrcet answers
        </p>
        <button className="btn-tryAgain" onClick={onRestart}>
          Try again
        </button>
      </div>
    </div>
  );
}

export default Result;
