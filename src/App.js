import './App.css';
import Heading from './Components/Heading/Heading';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
// import Carasole from './Components/Carasole/Carasole';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import {BrowserRouter as Router} from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (

    <Router>
      <div className="App">
        <Heading/>
        {/* <Carasole/> */}
        <Home/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
