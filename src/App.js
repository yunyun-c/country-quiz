import "./App.css";
import quizImage from "./img/undraw_adventure_4hum 1.svg";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Country Quiz</h1>
      </header>
      <main>
        <h2>Country Quiz</h2>
        <img src={quizImage} alt="adventure" />
        <div className="quiz-container">
          <h3 className="question">Kuala Lumpur is the capital of</h3>
          <div className="answer-options">
            <p className="option-a"></p>
            <p className="option-b"></p>
            <p className="option-c"></p>
            <p className="option-d"></p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
