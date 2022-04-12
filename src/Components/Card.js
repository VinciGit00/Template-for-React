import React, { Component } from "react";

//Componente riutilizzabile per inserire le immagini
class Card extends Component {
  render() {
    return (
      <div className="col">
        <div className="card" style={{ width: "18rem", textAlign: "center" }}>
          <img src={this.props.card.immagine}></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.card.nome}</h5>
            <p className="card-text">{this.props.card.prezzo} €</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
