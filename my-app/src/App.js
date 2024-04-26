import React,{useState} from "react";
import TabButton from "./components/TabButton";
import CoreConcepts from "./components/CoreConcepts";
import { EXAMPLES } from "./components/data";
import "./App.css"


function App() {
  const [selectedBtn, setSelectedBtn] = useState('components'); // Initialize state to lowercase 'components'

  const handleClick = (clickedBtn) => {
    setSelectedBtn(clickedBtn.toLowerCase()); // Convert button label to lowercase
  };

  return (
    <>
      <div className="App">
        <h2>It's Time to start the journey</h2>
        <ul>
          <CoreConcepts title="React Concepts" description="lorem jeydu hwdwwdbaghvdweb dvgeydqhdq dvededhd"/>
          <CoreConcepts title="React Concepts" description="lorem jeydu hwdwwdbaghvdweb dvgeydqhdq dvededhd"/>
          <CoreConcepts title="React Concepts" description="lorem jeydu hwdwwdbaghvdweb dvgeydqhdq dvededhd"/>
          <CoreConcepts title="React Concepts" description="lorem jeydu hwdwwdbaghvdweb dvgeydqhdq dvededhd"/>
        </ul>
        <section>
          <menu>
            {/* Pass the button labels as props */}
            <TabButton ClickBtn={() => handleClick('Components')}>Components</TabButton>
            <TabButton ClickBtn={() => handleClick('Jsx')}>Jsx</TabButton>
            <TabButton ClickBtn={() => handleClick('React')}>React</TabButton>
            <TabButton ClickBtn={() => handleClick('Hooks')}>Hooks</TabButton>
          </menu>
          <div id="tab-content">
            <h2>{EXAMPLES[selectedBtn]?.title}</h2>
            <p>{EXAMPLES[selectedBtn]?.description}</p>
            {/* Access code property of the selected example */}
            <pre>
              <code>{EXAMPLES[selectedBtn]?.code}</code>
            </pre>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;