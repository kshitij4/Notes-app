import React from 'react';
import {
  Link
} from "react-router-dom";
// import Home from '../../../../home/Home';
// import Login from '../../../../login/Login';
// import Register from '../../../../register/Register';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
      <div>
        <nav className={classes.nav}>
          <ul>
            {props.isLoggedIn && (
              <li>
                <Link to="/profile">Profile</Link>
                {/* <a href="/">Profile</a> */}
              </li>
            )}
            {!props.isLoggedIn && (
              <li>
                <Link to="/register">Register</Link>
              </li>
            )}
            {!props.isLoggedIn && (
              <li>
                <Link to="/">Login</Link>
              </li>
            )}
            {props.isLoggedIn && (
              <li>
                <Link to="/">Home</Link>
              </li>
            )}
            {props.isLoggedIn && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>

        {/* <Routes>
            <Route path="/register" component = {Register} />
            <Route path="/home" component = {Home} />
            <Route path= "/" component = {Login} exact />
            <Route path = "/login" component = {Login} />
        </Routes> */}
      </div>
  );
};

export default Navigation;
