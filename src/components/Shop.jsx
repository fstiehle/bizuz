import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid.jsx";

export default class Shop extends React.Component {

  constructor(props) {
    super(props);
  }  

  render() {
    return(
      <div className="shop wrapper">
        <Grid />
      </div>
    );
  } 
}
