import React from "react";
import { Route, Switch } from "react-router";
import { Link, NavLink, Prompt, Redirect } from "react-router-dom";
import "./App.css";
import GuardRoute from "./components/GuardRoute";
import About from "./pages/About";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Post from "./pages/Post";

function App() {
  const [isLogin, setLogin] = React.useState(false)
  
  return (
    <div className="App">
      <ul className="menu">
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/" activeClassName="active" exact>
           Home
          </NavLink>
        </li>
        <li>
          {/* <Link to="/about">About</Link> */}
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/member" activeClassName="active">
            Member
          </NavLink>
        </li>
        <li>
          <NavLink to="/category" activeClassName="active">
            Category
          </NavLink>
        </li>
        <li>
          {
            isLogin ? <NavLink to="/logout" onClick={(e) => { e.preventDefault()
               setLogin(false) }}>Logout</NavLink> : <NavLink to="/login" activeClassName="active">Login</NavLink>
          }
        </li>
      </ul>
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route> */}
        {/* Passing konten pada komponen route */}
        {/* Menggunakan arrow function */}
        {/* <Route path="/about" component={() => <About />} /> */}
        {/* Panggil komponen dengan cara cetak langsung */}
        {/* <Route path="/about" component={About} /> */}
        {/* Render langsungdi dalam route */}
        {/* <Route path="/about" render={() => <div>Halaman About</div>} /> */}
        <Route path="/about">
          <About />
          {/* <Prompt message="Are you sure you want to leave?" /> */}
        </Route>
        <GuardRoute path="/member" isLogin={isLogin}>
          <Member />
        </GuardRoute>
        <Route path="/login">
          <Login setLogin={setLogin} />
        </Route>
        {/* <Route path="/member">
          <Redirect to="/" />
        </Route> */}
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
