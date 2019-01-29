import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import Game from './components/xox';
import Calculator from './components/calculator';
import Homepage from './components/homepage';

import './components/calculator.css';
import './components/xox.css';
import './components/homepage.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavLink activeClassName="activelink" exact to="/React_Examples/react_router/build/index.html">Homepage</NavLink> <br/>
          <NavLink activeClassName="activelink" exact to="/xox">XOX Game</NavLink> <br/>
          <NavLink activeClassName="activelink" exact to="/calculator">Calculator</NavLink> <br/>

					<br/><br/>

					

            <Route path="/React_Examples/react_router/build/index.html" exact strict component={Homepage} />
            <Route path="/xox" exact strict component={Game} />
						<Route path="/calculator" exact strict component={Calculator} />

					

						
        </div>
      </Router>


    );
  }
}

export default App;
