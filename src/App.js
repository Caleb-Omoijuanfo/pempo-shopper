import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./Reducers/index.js";
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import Header from './Components/Header.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shop from './Pages/Shop.js';
import Contact from './Pages/Contact.js';
import Home from './Pages/Home.js';


let store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/shop">
              <Shop />
          </Route>

          <Route path="/contact">
              <Contact />
          </Route>

          <Route path="/">
              <Home />
          </Route>
          
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
