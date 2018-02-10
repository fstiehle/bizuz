import React from "react";
import ReactDOM from "react-dom";
import RoundTheMoon from "./Lookbook/RoundTheMoon.jsx";
import AfterTheMoment from "./Lookbook/AfterTheMoment.jsx";
import HolyChic from "./Lookbook/HolyChic.jsx";
import LoveCrimes from "./Lookbook/LoveCrimes.jsx";
import TrashHologram from "./Lookbook/TrashHologram.jsx";
import BeautyAboveAll from "./Lookbook/BeautyAboveAll.jsx";
import LoloFerrari from "./Lookbook/LoloFerrari.jsx";
import GoodVibes from "./Lookbook/GoodVibes.jsx";
import BeClassy from "./Lookbook/BeClassy.jsx";

export default class Lookbook extends React.Component {

  constructor(props) {
    super(props);  
  }

  render() {
    return(
    <div className="lookbook">
      <RoundTheMoon />
      <AfterTheMoment />
      <HolyChic />
      <LoveCrimes />
      <TrashHologram />
      <BeautyAboveAll />
      <LoloFerrari />
      <GoodVibes />
      <BeClassy />
    </div>    
    );
  } 
}