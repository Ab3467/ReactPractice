import './App.css';
import React,{useState} from 'react';
import CoreConcepts from "./components/CoreConcepts"
import TabButton from './components/TabButton';
import { EXAMPLES } from './components/data';



function App() {
const [selectedBtn,setselectedBtn] = useState('Components')
  const handleClick=(Click)=>{
     setselectedBtn(Click);
  }
  return (
    <>
   <div className="App">
      <h2>It's Time to start the journey</h2>
        <ul>
          <CoreConcepts title="React Concepts" description="lorem jeydu hwdwwdbaghvdweb dvgeydqhdq dvededhd"/>
          <CoreConcepts title="React Concepts" description="lorem jeydu hwdwwdbaghvdweb dvgeydqhdq dvededhd"/>
          <CoreConcepts title="React Concepts" description="lorem jeydu hwdwwdbaghvdweb dvgeydqhdq dvededhd"/>
          <CoreConcepts title="React Concepts" description="lorem jeydu hwdwwdbaghvdweb dvgeydqhdq dvededhd"/>
          <CoreConcepts title="React Concepts" description="lorem jeydu hwdwwdbaghvdweb dvgeydqhdq dvededhd"/>
        </ul>
 <section>
          <menu>
           <TabButton ClickBtn={()=>handleClick('Components')}>Components</TabButton>
            <TabButton ClickBtn={()=>handleClick('Jsx')}>Jsx</TabButton>
            <TabButton ClickBtn={()=>handleClick('React')}>React</TabButton>
            <TabButton ClickBtn={()=>handleClick('Hooks')}>Hooks</TabButton>
          </menu>
            <div className="">
              <h2>
                {EXAMPLES[selectedBtn].title}
              </h2>
              <p>
                {EXAMPLES[selectedBtn].description}
              </p>
              <pre>
                <code>
                  {EXAMPLES[selectedBtn.code]}
                </code>
              </pre>
            </div>
</section>
      </div>
    </>
  );
}

export default App;
