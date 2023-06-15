import React from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Country Quiz</h1>
      </header>
      <main>
        {/* <div className="quiz-title">
          <h2>Country Quiz</h2>
          <img src={quizImage} alt="adventure" />
        </div>

        <div className="quiz-container show">
          <h3 className="question">Kuala Lumpur is the capital of</h3>
          <div className="answer-options">
            <p className="option wrong">
              <span>A</span> Country
            </p>
            <p className="option correct">
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

        <div className="result-container hidden">
          <img src={resultImage} alt="result image" />
          <h3 className="result">Results</h3>
          <p className="score">
            You got <span>4</span> corrcet answers
          </p>
          <button className="btn-tryAgain">Try again</button>
        </div> */}

        <Quiz></Quiz>
        <Result></Result>
      </main>
      <footer>
        <p>CCCCCCC</p>
      </footer>
    </div>
  );
}

export default App;
