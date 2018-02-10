import React from "react";
import ReactDOM from "react-dom";

export default class Home extends React.Component {
  
  render() {
    return(
      <div className="info wrapper">
        <h2>ABOUT US</h2>
          A vintage shop from Prague specialising in hand-picked eclectic pieces invites you to join the
          »Bizuz« gang. For all those forward-thinking individuals who love to stand out and are searching
          for a unique style, come and explore items and accessories that cannot be purchased from the
          mass market. We aim to be an approachable label where everyone could find something
          unique, creative and fun. Come join the »Bizuz« gang to rendezvous with a movement of
          inspiring people.

          <h2>Contact</h2>
          Bizuz vintage<br />
          Veverkova 12,<br />
          170 00 Prague 7,<br />
          Czech Republic<br />
          Just say hello<br />
          hello@bizuz.cz<br />
          Follow us on instagram: @bizuzvintage<br />

          <h2>Impressum</h2>
          Coding: Fabian Stiehle<br />
          Styling: Daria Kuzmina<br />
          Typefaces: Boogie School Sans<br />
          by Or Type
          Sporting Grotesque
          Regular by Velvetyne<br />
          Concept &
          design: Masha Kornienko<br />
          Copyright © Bizuz vintage 2018
      </div>
    );
  }
}
