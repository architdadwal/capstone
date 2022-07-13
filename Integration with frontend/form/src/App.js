import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Listing from './components/Listing';
import Auth from './components/Auth';
import Protected from './components/protected';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Auth />
      <Router>
        <Link to="home">Home</Link>
        <br></br>
        <Link to="about">about</Link>
        <br />
        <Link to="about">Login</Link>

        {/* <Routes>
          <Route exact path='/about' component={About}>
            <Protected component={About} />
          </Route>
          <Route exact path='/home' component={Home} />
        </Routes> */}

      </Router>
    </div>
  );
}

export default App;
