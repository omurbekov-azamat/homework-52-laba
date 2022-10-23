import React from 'react';
import CardView from "./CardView/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";

function App() {
  // const card = new Card('K', '♠');
  const cardDesk1 = new CardDeck();
  const newCard: Card[] = cardDesk1.getCard(5);
  const cards: Card[] = cardDesk1.getCards(10);
  console.log(cards)
  // console.log(newCard)
  // console.log(cardDesk1.arr)

  return (
    <div className="App">
      <CardView rank={newCard[0].rank} suit={newCard[0].suit}/>
    </div>
  );
}

export default App;
