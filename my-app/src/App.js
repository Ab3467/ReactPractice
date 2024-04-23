import logo from "./rlogo.png";
import { useState } from "react";
import './App.css';

let concepts = ['Props','Hooks','dynamic Values','States','useEffect'];

function App() {
  const [randomConcept, setRandomConcept] = useState(concepts[0]);

  const changeRandomConcept = () => {
    setRandomConcept(concepts[randomNumbers(4)]);
    setTimeout(changeRandomConcept, 1000);
  };

  const randomNumbers = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {randomConcept} are React core concepts which are important to understand...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

