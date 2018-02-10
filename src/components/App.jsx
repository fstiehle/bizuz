import React from "react";
import ReactDOM from "react-dom";
import Home from './Home.jsx'
import Navigation from './Navigation.jsx'
import Shop from './Shop.jsx'
import Rent from './Rent.jsx'
import Detail from './Detail.jsx'
import Lookbook from './Lookbook.jsx'
import Info from './Info.jsx'
import { Route, Switch } from 'react-router-dom'

export default class App extends React.Component {

  render() {
    return(
      <div>
        <Route path="/" component={Navigation} />
        <Switch>
          <Route path="/shop" exact component={Shop} />
          <Route path="/rent" exact component={Rent} />
          <Route path="/lookbook" exact component={Lookbook} />
          <Route path="/info" exact component={Info} />
          <Route path="/shop/:id" exact component={Detail} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  } 
}
