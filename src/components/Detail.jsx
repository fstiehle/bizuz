import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid.jsx";
import imageMap from '../util/imageMap.json';

export default class Detail extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.match.params.id == undefined) {
      return null;
    }    
    this.state = {item: imageMap[this.props.match.params.id]};    
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.setState({item: imageMap[nextProps.match.params.id]});
    }
  }

  render() {
    return(
    <div className="detail wrapper">
      <div className="hero">
        <img alt="{this.state.item.name}" src={require('../static/images/' + this.state.item.img)} />
      </div>
      <div className="name">
        <h1>{this.state.item.name}</h1>
        <h2>€ {Math.floor(Math.random() * (70 - 30) + 30)}</h2>

        Corduroy jumpsuit, spruce green<br/>
        <br/>Corduroy 65%<br/>
        Organic cotton 30%<br/>
        Elastane 5%<br/>
        <br/>
        Price to rent is 10% of the regular price, valid for one day (24 hours)
        <br/>
        <br/>Size: XS
        <br/>
        <div class="buttons">
          <span>Buy</span><span>Rent</span>
        </div>
      </div>
      <div className="suggestions">
        <Grid limit="6"/>
      </div>
    </div>
    );
  }
}