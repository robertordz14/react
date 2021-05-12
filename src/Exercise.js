import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About'

function App() {

  return (
    
    <div className="App">
      <Navbar></Navbar>
      <About 
      img="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5e/5ecce4335f86a2bf8569f2c3b99925ca79b77714_full.jpg"
      description="I have 20 years old, my favorite color is red and my favorite sport is basketball"
      name="HOLA"
      />
    </div>
  );
}

export default App;