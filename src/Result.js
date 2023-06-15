import resultImage from "./img/undraw_winners_ao2o 2.svg";
import React from "react";

function Result() {
  return (
    <div>
      <div className="result-container show">
        <img src={resultImage} alt="result" />
        <h3 className="result">Results</h3>
        <p className="score">
          You got <span>4</span> corrcet answers
        </p>
        <button className="btn-tryAgain">Try again</button>
      </div>
    </div>
  );
}

export default Result;
