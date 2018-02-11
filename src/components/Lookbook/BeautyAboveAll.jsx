import React from "react";
import ReactDOM from "react-dom";

export default class BeautyAboveAll extends React.Component {

  render() {
    return(
    <div className="beauty-above-all">
      <div class="hero">
        <h1>Beauty<br /> Above<br />All</h1>
      </div>

      <div className="clearfix">
        <img style={{marginLeft: "10%", marginTop: "5%"}} 
        width="912px" alt="round the moon" src={require('../../static/images/lookbook/Fiona_rosa_1824px.jpg')} />
        <img style={{float: "right", marginRight: "10%", marginTop: "20%"}} 
        width="400px" alt="round the moon" src={require('../../static/images/lookbook/Fiona_rosa_800px.jpg')} />
      </div>

      <div className="clearfix">      
        <video style={{marginLeft: "25%"}} width="304" height="450" loop autoPlay muted playsInline>
              <source src={require('../../static/images/Beaty_above_all_02.mp4')} type="video/mp4" />
              Your browser does not support the video tag.
          </video> 
      </div>

      <img style={{float: "right", marginRight: "10%", marginTop: "6rem"}} 
        width="730px" alt="round the moon" src={require('../../static/images/lookbook/Fiona_rosa_1460px.jpg')} />   
    </div>    
    );
  }
}