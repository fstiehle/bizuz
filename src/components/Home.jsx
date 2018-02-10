import React from "react";
import ReactDOM from "react-dom";
import Gravity from "../util/gravity";

export default class Home extends React.Component {
  
  updateDimensions() {
    // this is not optimal
    document.body.childNodes.forEach((e) => {
      if (e.nodeName == "CANVAS") {
        document.body.removeChild(e);
        Gravity.gravity();
      }
    })
    
  }

  componentDidMount() {
    this.gravity = Gravity.gravity();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
    document.body.childNodes.forEach((e) => {
      if (e.nodeName == "CANVAS")
        document.body.removeChild(e);
      });
  }

  render() {
    return <img className="logo" alt="logo" src={require('../static/images/logo.svg')} />;
  } 
}
