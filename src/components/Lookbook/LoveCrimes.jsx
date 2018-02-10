import React from "react";
import ReactDOM from "react-dom";

export default class LoveCrimes extends React.Component {

  render() {
    return(
    <div className="love-crimes">
      <div class="hero">
        <h1>Love<br /> Crimes</h1>
      </div>

      <div className="clearfix">
        <img style={{marginLeft: "8%", marginTop: "8rem"}} 
        width="547px" alt="round the moon" src={require('../../static/images/lookbook/02_Miri_rock_03_1094px.jpg')} />
        <img style={{float: "right", marginRight: "5%"}} 
        width="400px" alt="round the moon" src={require('../../static/images/lookbook/01_Miri_rock_02_800px.jpg')} />
      </div>
      <img style={{float: "right", marginRight: "15%", marginTop: "6rem"}} 
      width="400px" alt="round the moon" src={require('../../static/images/lookbook/03_Miri_rock_01_800px.jpg')} />
      
    </div>    
    );
  } 
}