import React, { Component } from 'react';
import './App.css';

import routes from './routes';

import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import {Provider} from 'react-redux';
// import {configureStore} from './redux/redux-thunk/configureStore/configureStore' 
// const store = configureStore()

class App extends Component {
  
  render() {
    return (     
      <Router>
        <div className = "App">
          <div id = "bodyPage">
            <Switch>
              { this.showContentMenu(routes) }
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return (
                <Route 
                    key = {index} 
                    path = {route.path} 
                    exact = {route.exact} 
                    component = {route.main} 
                />
            );
        });
    }
    return result;
  }
}

export default App;
