import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid.jsx";

export default class Rent extends React.Component {

  render() {
    return(
      <div className="shop wrapper">
        <Grid limit="7"/>
      </div>
    );
  } 
}
