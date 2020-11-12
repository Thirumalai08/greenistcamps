//import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './test/Main';
//import HeroSection from './components/HeroSection';
/*import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services'
import Products from './pages/Products'
import Signup from './pages/Signup'*/

function App() {
  return (
    <div className="App">
      <Main />
      {/*<Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} /> 
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={Signup} />
      </Switch>*/}
    </div>
  );
}

export default App;
