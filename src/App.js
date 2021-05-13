import './App.css';
import NavBar from './components/navbar.js';
import Homepage from './components/homepage.js';
import About from './components/about.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
      <About/>
    </div>
  );
}

export default App;
