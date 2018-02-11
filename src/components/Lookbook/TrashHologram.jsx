import React from "react";
import ReactDOM from "react-dom";

export default class LoveCrimes extends React.Component {

  render() {
    return(
    <div className="trash-hologram">
      <div class="hero">
        <h1>Trash<br /> Holo-<br />Gram</h1>
      </div>

      <div className="clearfix">
        <img style={{marginLeft: "8%", marginTop: "8%"}} 
        width="547px" alt="round the moon" src={require('../../static/images/lookbook/02_Bombers_02_1094px.jpg')} />
        <img style={{float: "right", marginRight: "5%", marginTop: "5%"}} 
        width="638px" alt="round the moon" src={require('../../static/images/lookbook/01_Bombers_01_1276px.jpg')} />
      </div>

      <video style={{marginLeft: "25%"}} width="304" height="450" loop autoPlay muted playsInline>
            <source src={require('../../static/images/Trash_hologram.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>    
    );
  } 
}