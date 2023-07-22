// https://restcountries.com/v3.1/all

import React, { useState, useEffect } from "react";
import "./App.css";
import quizImage from "./img/undraw_adventure_4hum 1.svg";
import Result from "./Result";

const Num_questions = 5;

function Quiz({ setQuizCompleted }) {
  // set up state for the quiz
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // choose a random country from the data
        const country = data[Math.floor(Math.random() * data.length)];

        // generate a quiz
        const question = `What is the capital city of ${country.name.common}?`;

        // set correct answer
        const answer = country.capital ? country.capital[0] : "Unknown";

        // generate random answer options
        const randomOptions = data
          .filter((item) => item.capital && item.capital[0] !== answer)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((item) => item.capital[0]);

        console.log(randomOptions);

        // generate answer options
        let options = [
          { letter: "A" },
          { letter: "B" },
          { letter: "C" },
          { letter: "D" },
        ];

        // shuffle the answer texts
        const shuffledTexts = [
          randomOptions[0],
          randomOptions[1],
          randomOptions[2],
          answer,
        ].sort(() => Math.random() - 0.5);

        // assign the shuffled texts to the options
        options.forEach((option, index) => {
          option.text = shuffledTexts[index];
        });

        // update questions state
        setQuestions([...questions, { question, answer, options }]);
      });
  }, []);

  // handle user answer
  function handleAnswer(answer) {
    // update selectedAnswer state
    setSelectedAnswer(answer);

    // check if the answer is correct and update the score
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    // move on to the next question
    // setCurrentQuestion(currentQuestion + 1);

    // move on to the next question after a delay
    setTimeout(() => {
      if (currentQuestion + 1 === Num_questions) {
        // quiz completed
        setQuizCompleted(true);
      } else {
        setSelectedAnswer(null);
      }
    }, 2000);
  }

  // handle button click
  function handleNextClick() {
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div>
      <div className="quiz-title">
        <h2>Country Quiz</h2>
        <img src={quizImage} alt="adventure" />
      </div>

      {currentQuestion < Num_questions && questions[currentQuestion] ? (
        <div className="quiz-container show">
          <h3 className="question">{questions[currentQuestion].question}</h3>
          <div className="answer-options">
            {questions[currentQuestion].options.map((option) => (
              <p
                key={option.letter}
                className={`option ${
                  selectedAnswer &&
                  option.text === questions[currentQuestion].answer
                    ? "correct"
                    : selectedAnswer === option.text &&
                      option.text !== questions[currentQuestion].answer
                    ? "incorrect"
                    : ""
                }`}
                onClick={() => handleAnswer(option.text)}
              >
                <span>{option.letter}</span> {option.text}
                {selectedAnswer &&
                  option.text === questions[currentQuestion].answer && (
                    <i className="material-icons icon">check_circle</i>
                  )}
                {selectedAnswer === option.text &&
                  option.text !== questions[currentQuestion].answer && (
                    <i className="material-icons icon">cancel</i>
                  )}
              </p>
            ))}
          </div>
          <button className="btn-next show" onClick={handleNextClick}>
            Next
          </button>
        </div>
      ) : (
        <Result score={score} />
      )}
    </div>
  );
}

export default Quiz;
