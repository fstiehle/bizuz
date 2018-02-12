import React from "react";
import ReactDOM from "react-dom";

export default class AfterTheMoment extends React.Component {

  render() {
    return(
    <div className="after-the-moment">
      <div class="hero">
        <h1>After<br /> the<br /> Moment</h1>
      </div>

      <div className="clearfix">
        <img style={{marginLeft: "15%", marginTop: "11%"}} 
        width="460px" alt="round the moon" src={require('../../static/images/lookbook/02_Wini_rot_01_920px.jpg')} />
        <img style={{float: "right", marginRight: "10%", marginTop: "6rem"}} 
        width="547px" alt="round the moon" src={require('../../static/images/lookbook/01_Wini_rot_02_1094px.jpg')} />
      </div>
      
      <div className="clearfix">
        <video style={{marginLeft: "25%", marginTop: "7%"}} width="304" height="450" loop autoPlay muted playsInline>
            <source src={require('../../static/images/After_the_moment.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
        </video> 
      </div>

      <img style={{float: "right", marginRight: "10%", marginTop: "6rem", display: "block"}} 
      width="547px" alt="round the moon" src={require('../../static/images/lookbook/04_Wini_rot_03_1094px.jpg')} />
      
    </div>    
    );
  } 
}