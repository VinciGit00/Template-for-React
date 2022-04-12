import React, { Component } from "react";
import a from "./images/a.jpeg";
import b from "./images/b.jpeg";
import c from "./images/c.jpeg";
import d from "./images/d.jpeg";
import e from "./images/e.jpeg";
import Card from "./Card";

class Shop extends Component {
  state = {
    cards: [
      {
        id: 0,
        nome: "Valigia a ",
        prezzo: 1.99,
        immagine: a,
      },
      {
        id: 1,
        nome: "Valigia b ",
        prezzo: 1.99,
        immagine: b,
      },
      {
        id: 2,
        nome: "Valigia c ",
        prezzo: 1.99,
        immagine: c,
      },
      { id: 3, nome: "Valigia d", prezzo: 1.99, immagine: d },
      {
        id: 4,
        nome: "Valigia e ",
        prezzo: 1.99,
        immagine: e,
      },
      {
        id: 5,
        nome: "Valigia a ",
        prezzo: 1.99,
        immagine: a,
      },
      {
        id: 6,
        nome: "Valigia b ",
        prezzo: 1.99,
        immagine: b,
      },
      {
        id: 7,
        nome: "Valigia c ",
        prezzo: 1.99,
        immagine: c,
      },
      { id: 8, nome: "Valigia d", prezzo: 1.99, immagine: d },
      {
        id: 9,
        nome: "Valigia e ",
        prezzo: 1.99,
        immagine: e,
      },
    ],
  };

  render() {
    return (
      <div>
        <h2>Shop</h2>
        <h3>Our new products</h3>
        <div className="row">
          {this.state.cards.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Shop;
