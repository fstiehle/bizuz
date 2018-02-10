import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from 'react-router-dom';

const MobileMenu = (props) => {
  if (!props.show)
    return <span onClick={props.trigger}><img className="burgermenu" src={require('../static/images/Burger_menu.svg')}/></span>;
  return(
    <div>
      <span onClick={props.trigger}><img className="burgermenu" src={require('../static/images/cross.svg')}/></span>
      <NavLink activeClassName="active" to="/shop/"><div onClick={props.trigger}>Shop</div></NavLink>
      <NavLink activeClassName="active" to="/rent/"><div onClick={props.trigger}>Rent</div></NavLink>
      <NavLink activeClassName="active" to="/lookbook/"><div onClick={props.trigger}>Lookbook</div></NavLink>
      <NavLink activeClassName="active" to="/info/"><div onClick={props.trigger}>Info</div></NavLink>
    </div>
  );
}

const Logo = () => {
  return(
    <div>
      <NavLink exact activeClassName="hidden" to="/">
        <span>
          <img className="navlogo" src={require('../static/images/logo.svg')} />
        </span>
      </NavLink>
      <NavLink exact activeClassName="hidden" to="/">
        <span>
          <img className="lookbooklogo" src={require('../static/images/logo_orange.svg')} />
        </span>
      </NavLink>
    </div>
  );
}

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { menuVisible: false };
  }

  triggerMenu() {
    if (this.state.menuVisible) {
      this.setState({ menuVisible: false });
    } else {
      this.setState({ menuVisible: true });
    }
  }

  render() {
    const navi = this.props.location.pathname == "/lookbook/" ? " navigation-lookbook" : ""
    return(
      <div className={"navigation" + navi}>
        <div className="navigation-destop">
          <NavLink activeClassName="active" to="/shop/"><span>Shop</span></NavLink>
          <NavLink activeClassName="active" to="/rent/"><span>Rent</span></NavLink>
          <NavLink activeClassName="active" to="/lookbook/"><span>Lookbook</span></NavLink>
          <NavLink activeClassName="active" to="/info/"><span>Info</span></NavLink>
          <Logo />
        </div>

        <div className="navigation-mobile">
        <Logo />
        <MobileMenu show={this.state.menuVisible} 
          trigger={this.triggerMenu.bind(this)}/>
        </div>
      </div>
    );
  } 
}
