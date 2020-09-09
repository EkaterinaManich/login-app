import React, { useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './App.scss';
import burgerLogo from "./assets/img/burger.svg";
import Main from "./components/Main";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Time from "./components/Time";
import Location from "./components/Location";


function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      {isLogged ? (
        <div className="App">
          <header className="header">
            <img className="logo" src={burgerLogo} alt="logo"></img>
            <nav className="navigation">
              <ul>
                <li><NavLink exact to="/">Main</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/time">Time</NavLink></li>
                <li><NavLink to="/location">Location</NavLink></li>
                <li><div onClick={() => {
                  localStorage.removeItem('name');
                  localStorage.removeItem('password');
                  setIsLogged(false);
                }}
                >Logout</div></li>
              </ul>
            </nav>
          </header>
          <div className="content">
            <Switch>
              <Route path="/" exact render={() => <Main />} />
              <Route path="/posts" exact render={() => <Posts />} />
              <Route path="/posts/:id" exact render={() => <Post />} />
              <Route path="/time" component={Time} />
              <Route path="/location" component={Location} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </div>
          <footer className="footer">© Kate</footer>
        </div>) : <Login setIsLogged={setIsLogged} />}
    </>
  );
}

export default App;
