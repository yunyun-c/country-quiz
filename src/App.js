import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import "./App.css";

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);

  function handleRestart() {
    setQuizCompleted(false);
    setScore(0);
    setCurrentQuestion(0);
    setQuestions([]);
  }

  return (
    <div className="App">
      <header>
        <h1>Country Quiz</h1>
      </header>
      <main>
        {!quizCompleted && (
          <Quiz
            setQuizCompleted={setQuizCompleted}
            score={score}
            setScore={setScore}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            setQuestions={setQuestions}
            quizCompleted={quizCompleted}
          ></Quiz>
        )}
        ,
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
