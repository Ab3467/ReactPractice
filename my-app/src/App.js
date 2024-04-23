import './App.css';
import CoreConcepts from "./components/CoreConcepts"
import TabButton from './components/TabButton';



function App() 
{

  const handleClick=(click)=>{
     console.log('Dont Touch me');
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
            <TabButton ClickBtn={()=>{handleClick('Jsx')}}>Jsx</TabButton>
            <TabButton ClickBtn={()=>{handleClick('Components')}}>components</TabButton>
            <TabButton ClickBtn={()=>{handleClick('React')}}>React</TabButton>
            <TabButton ClickBtn={()=>{handleClick('Hooks')}}>Hooks</TabButton>
          </menu>
        </section>
      </div>
        
      
   
</>
  );
}

export default App;
