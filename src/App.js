import './App.css';
import NavBar from './components/navbar.js';
import Homepage from './components/homepage.js';
import About from './components/about.js';
import Skills from './components/skills.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
