import React from "react";
import ReactDOM from "react-dom";
import imageMap from '../util/imageMap.json';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
  <div className="item">
    <Link to={`/shop/${props.id}`}>
      <img alt={props.name} src={require('../static/images/' + props.img)} />
      <figcaption>
        <h3>{props.name}</h3>
      </figcaption>
    </Link>
  </div>
  );
}

const List = (props) => {
  const list = [];
  imageMap.forEach(
    (e) => {
      list.push(<Item key={e.id} id={e.id} name={e.name} img={e.img}/>);
    });
  if (props.limit != undefined)
    return list.splice(0, props.limit)
  return list;
}

export default class Grid extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="grid">
        <List limit={this.props.limit}/>
      </div>
    );
  } 
}