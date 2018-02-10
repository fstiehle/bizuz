import React from "react";
import ReactDOM from "react-dom";

export default class RoundTheMoon extends React.Component {

  render() {
    return(
    <div className="round-the-moon">
      <div class="hero">
        <h1>Round<br /> the Moon</h1>
      </div>

      <div className="clearfix">
        <img style={{marginLeft: "10%", marginTop: "7%"}} 
        width="547px" alt="round the moon" src={require('../../static/images/lookbook/01_Wini_Janine_1094px.jpg')} />
        <img style={{float: "right", marginRight: "10%", marginTop: "20%"}} 
        width="367px" alt="round the moon" src={require('../../static/images/lookbook/02_Janine_734px.jpg')} />
      </div>
      
      <div className="clearfix">
        <img style={{float: "right", marginRight: "10%", marginTop: "6rem", display: "block"}} 
        width="912px" alt="round the moon" src={require('../../static/images/lookbook/03_Wini_Janine_faces_1824px.jpg')} />
      </div>  
      
      <video style={{marginLeft: "10%", marginTop: "7%"}} width="304" height="450" loop autoPlay muted playsinline>
          <source src={require('../../static/images/round_the_moon_video.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
      </video>  

      
    </div>  
    );
  } 
}