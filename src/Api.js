// // https://restcountries.com/v3.1/all

// import React, { useState, useEffect } from "react";

// function Api() {
//   // set up state for the quiz
//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => {
//         // choose a random country from the data
//         const country = data[Math.floor(Math.random() * data.length)];

//         // generate a quiz
//         const question = `What is the capital city of ${country.name.common}?`;

//         // set correct answer
//         const answer = country.capital[0];

//         // update questions state
//         setQuestions([...questions, { question, answer }]);
//       });
//   }, []);

//   // handle user answer
//   function handleAnswer(answer) {
//     // check if the answer is correct and update the score
//     if (answer === questions[currentQuestion].answer) {
//       setScore(score + 1);
//     }

//     // move on to the next question
//     setCurrentQuestion(currentQuestion + 1);
//   }

//   return (
//     <div>
//       {questions.length > 0 && (
//         <div>
//           <p>{questions[currentQuestion].question}</p>
//           {/* Render answer options here */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Api;
