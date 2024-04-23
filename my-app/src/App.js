import logo from "./rlogo.png"
import './App.css';


let concepts = ['Props','Hooks','dynamic Vlaues','states','useEffect']

let random = (max)=>{
  return Math.floor(Math.random()*(max+1));

}
setTimeout(random, 1000);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {concepts[random(5)]} are React core conepts which are important to understand...
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
