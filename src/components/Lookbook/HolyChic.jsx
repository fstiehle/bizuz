import React from "react";
import ReactDOM from "react-dom";

export default class HolyChic extends React.Component {

  render() {
    return(
    <div className="holy-chic">
      <div class="hero">
        <h1>Holy<br /> Chic</h1>
      </div>

      <div className="clearfix">
        <img style={{marginLeft: "10%", marginTop: "20%"}} 
        width="400px" alt="round the moon" src={require('../../static/images/lookbook/02_Miri_dress_02_800.jpg')} />
        <img style={{float: "right", marginRight: "20%", marginTop: "6rem"}} 
        width="547px" alt="round the moon" src={require('../../static/images/lookbook/01_Miri_dress_01_1094px.jpg')} />
      </div>      
    </div>    
    );
  } 
}