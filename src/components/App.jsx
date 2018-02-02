import React from "react";
import ReactDOM from "react-dom";
import Home from './Home.jsx'
import Navigation from './Navigation.jsx'
import { Route, Switch } from 'react-router-dom'

export default class App extends React.Component {

  render() {
    return(
      <div>
        <Navigation />
        <Switch>          
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  } 
}
