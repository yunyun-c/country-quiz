import "./App.css";
import quizImage from "./img/undraw_adventure_4hum 1.svg";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Country Quiz</h1>
      </header>
      <main>
        <div className="quiz-title">
          <h2>Country Quiz</h2>
          <img src={quizImage} alt="adventure" />
        </div>

        <div className="quiz-container">
          <h3 className="question">Kuala Lumpur is the capital of</h3>
          <div className="answer-options">
            <p className="option-a">
              <span>A</span> Country
            </p>
            <p className="option-b">
              <span>B</span> Country
            </p>
            <p className="option-c">
              <span>C</span> Country
            </p>
            <p className="option-d">
              <span>D</span> Country
            </p>
          </div>
        </div>
      </main>
      <footer>
        <p>CCCCCCC</p>
      </footer>
    </div>
  );
}

export default App;
