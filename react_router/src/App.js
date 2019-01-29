import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Img from 'react-image';
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
      <div className="homepage">
                <div className="container">
                    <div className="banner"></div>
                    <h3>
                        <Img src="https://github.com/AyseSenaFeyiz/ileriProgramlama/blob/master/ikon.png?raw=true" width="100" height="100" data-id="0" />
                        <br />
                        React Projects
                    
                    </h3>
                    <div class="menu">


                        <h3>      Projects</h3>
                        <ul>

                        <ul>
                        <li><a href="https://aysesenafeyiz.github.io/React_Examples/react_router/build/index.html">React Router</a></li>
                            <li><a href="https://aysesenafeyiz.github.io/React_Examples/xox/build/index.html">XOX Game</a></li>
                            <li><a href="https://aysesenafeyiz.github.io/React_Examples/React_Calculator/build/index.html">Calculator</a></li> 
                            <li><a href="https://aysesenafeyiz.github.io/React_Examples/React_Calculator/build/index.html">To Do App</a></li>
                            &emsp;
                                    
                        </ul>

                        </ul>


                    </div>
                    <div className="footer">
                        <h3>GitHub:</h3>
                        <ul>
                            <li><a href="https://github.com/AyseSenaFeyiz">My GitHub Profile</a></li>
                            <li><a href="https://github.com/AyseSenaFeyiz/React_Examples">React Examples Repository</a></li> &emsp; 
                                    
                        </ul>

                                <h3>Useful Links:</h3>
                                <ul>
                                <li><a href=" https://github.com/AyseSenaFeyiz/create-react-app">Creating a react app</a></li>
                                <li><a href="https://www.udemy.com/react-redux-egitimi/learn/v4/t/lecture/10381984?start=0">Learn react</a></li> 
                            <li><a href="https://www.npmjs.com/package/react-image">React image</a></li> 
                            <li><a href="https://omergulcicek.github.io/react/uygulamali-egitim/xox-oyunu">XOX Game</a></li> 
                            <li><a href="https://medium.com/@alicankustemur/react-js-ve-github-pages-ile-single-page-application-olu%C5%9Fturulmas%C4%B1-c68e9d09232">Deploy your react app on GitHub</a></li> 
                            <li><a href="https://medium.com/@mozkarakoc/react-tutorial-1-proje-kurulumu-react-webpack-babel-eslint-166b4545d48c">React, Webpack, Babel, ESLint</a></li> 
                            
                            &emsp;    
                                

                                </ul>

                </div>
                
                </div>






                    </div >
      
        <div>
          <NavLink activeClassName="activelink" exact to="/React_Examples/react_router/build/index.html">Homepage</NavLink> <br/>
          <NavLink activeClassName="activelink" exact to="/xox">XOX Game</NavLink> <br/>
          <NavLink activeClassName="activelink" exact to="/calculator">Calculator</NavLink> <br/>

					<br/><br/>

					

            
            <Route path="/xox" exact strict component={Game} />
						<Route path="/calculator" exact strict component={Calculator} />
            <Route path= "/React_Examples/react_router/build/index.html" exact strict component={Homepage} />
					

						
        </div>
      </Router>


    );
  }
}

export default App;
