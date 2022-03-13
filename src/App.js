import logo from './logo.svg';
import './App.css';
import {Greet1} from './components/Greet1';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
     {/* <Greet1 name="rit" level="lola">
      <p> children of greet 1 rit</p>
      <p> children of greet 1 rit</p>
      </Greet1>
      <Greet1 name="sahil" level="x"/>
      <p>Hello new world</p>
      <Welcome val="xxxxxx" name="name welcome"/>
  */}
  <Message/>
  <Counter/>
    </div>
  );
}

export default App;
