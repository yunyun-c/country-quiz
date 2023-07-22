import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import "./App.css";

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  function handleRestart() {
    setQuizCompleted(false);
    setScore(0);
  }

  return (
    <div className="App">
      <header>
        <h1>Country Quiz</h1>
      </header>
      <main>
        <Quiz setQuizCompleted={setQuizCompleted}></Quiz>
        {quizCompleted && (
          <Result
            show={quizCompleted}
            score={score}
            onRestart={handleRestart}
          ></Result>
        )}
      </main>
      <footer>
        <p>CCCCCCC</p>
      </footer>
    </div>
  );
}

export default App;
