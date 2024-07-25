import './App.css';
import Heading from './Components/Heading/Heading';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Carasole from './Components/Carasole/Carasole';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
      <Heading/>
      {/* <Carasole/> */}
      <Home/>
    </div>
  );
}

export default App;
