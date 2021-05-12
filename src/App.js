import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About'
import Counter from './components/counter/CounterFuncional';

function App() {
  const sayHello = () => {
    console.log("Hola");
  }

  return (
    
    <div className="App">
      <Navbar></Navbar><br/><br/>
      <About 
      img="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/006fcb05af1f7827a2cc1678c36693762457a68e_full.jpg"
      description="I have 20 years old, my favorite color is red and my favorite sport is basketball"
      info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      name="Roberto"
      /><br/>
      <h2>No pude con el menú :(</h2>
      <Counter maxValue={15} sayHi={sayHello}>
          <span>Contador</span>
        </Counter>
    </div>
  );
}

export default App;