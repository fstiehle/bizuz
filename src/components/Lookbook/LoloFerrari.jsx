import React from "react";
import ReactDOM from "react-dom";

export default class LoloFerrari extends React.Component {

  render() {
    return(
    <div className="lolo-ferrari">
      <div class="hero">
        <h1>Lolo<br /> Ferrari</h1>
      </div>

      <div className="clearfix">
        <img style={{marginLeft: "10%", marginTop: "7%"}} 
        width="400px" alt="round the moon" src={require('../../static/images/lookbook/Wini_green_800px.jpg')} />
        <img style={{float: "right", marginRight: "5%", marginTop: "30%"}} 
        width="912px" alt="round the moon" src={require('../../static/images/lookbook/Wini_green_1824px.jpg')} />
      </div>  

      <div className="clearfix">      
        <video style={{marginLeft: "25%", marginTop: "7%"}} width="304" height="450" loop autoPlay muted playsInline>
              <source src={require('../../static/images/Lolo_Ferrari.mp4')} type="video/mp4" />
              Your browser does not support the video tag.
          </video> 
      </div>    
    </div>    
    );
  }
}