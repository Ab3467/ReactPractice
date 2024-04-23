import './App.css';
import CoreConcepts from "./components/CoreConcepts"
import TabButton from './components/TabButton';



function App() {
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
            <TabButton>Jsx</TabButton>
            <TabButton>components</TabButton>
            <TabButton>React</TabButton>
            <TabButton>Hooks</TabButton>
          </menu>
        </section>
      </div>
        
      
   
</>
  );
}

export default App;
