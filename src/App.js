import { Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import './App.css';

const Home = () => <h2>Halaman Home</h2>
const About = () => <h2>Halaman About</h2>

function App() {
  return (
    <div className="App">
      <ul className="menu">
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        </li>
        <li>
          {/* <Link to="/about">About</Link> */}
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
