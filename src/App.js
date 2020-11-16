
import { Route, Switch } from 'react-router-dom';
import './App.css';
//import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Navbar from './components/Topbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact-us" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
