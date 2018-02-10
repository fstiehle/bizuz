import React from "react";
import ReactDOM from "react-dom";

export default class BeClassy extends React.Component {

  render() {
    return(
    <div className="be-classy">
      <div class="hero">
        <h1>Be<br /> Classy</h1>
      </div>

      <div className="clearfix">
        <img style={{float: "right", marginRight: "5%"}}
        width="547px" alt="round the moon" src={require('../../static/images/lookbook/01_Fiona_black_1094px.jpg')} />
        <img style={{marginLeft: "10%", marginTop: "15%"}} 
        width="400px" alt="round the moon" src={require('../../static/images/lookbook/02_Fiona_hair_800px.jpg')} />
      </div>

      <video style={{marginLeft: "25%", marginTop: "7%"}} width="304" height="450" loop autoPlay muted playsinline>
              <source src={require('../../static/images/Be_classy.mp4')} type="video/mp4" />
              Your browser does not support the video tag.
          </video> 
      
    </div>    
    );
  } 
}