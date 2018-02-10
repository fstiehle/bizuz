import React from "react";
import ReactDOM from "react-dom";

export default class GoodVibes extends React.Component {

  render() {
    return(
    <div className="good-vibes">
      <div class="hero">
        <h1>Good<br /> Vibes</h1>
      </div>

      <div className="clearfix">
        <img style={{marginLeft: "10%", marginTop: "1rem"}} 
        width="547px" alt="round the moon" src={require('../../static/images/lookbook/01_Fiona_rot_green_1094px.jpg')} />
        <img style={{float: "right", marginRight: "5%", marginTop: "25%"}} 
        width="730px" alt="round the moon" src={require('../../static/images/lookbook/02_Fiona_face_1460px.jpg')} />
      </div>
      <div className="clearfix">
        <img style={{marginLeft: "10%", marginTop: "7%"}} 
        width="547px" alt="round the moon" src={require('../../static/images/lookbook/03_Fiona_rot_green_02_1094px.jpg')} />
        <img style={{float: "right", marginRight: "5%", marginTop: "30%"}} 
        width="400px" alt="round the moon" src={require('../../static/images/lookbook/04_Fiona_rot_green_800px.jpg')} />
      </div>
         
    </div>    
    );
  }
}