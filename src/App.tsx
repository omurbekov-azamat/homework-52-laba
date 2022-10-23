import React, {useState} from 'react';
import CardView from "./CardView/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";


function App() {
  const cardDeck = new CardDeck();

  const [cards, setCards] = useState<Card[]>([]);

  const changeCards = () => {
    setCards(
      cardDeck.getCards(5)
    );
  }
  // const changeCards = () =>{
  //   cardDeck.getCards(5);
  //
  // }

  const button = <button className='btn btn-danger m-5' onClick={changeCards}>deal cards</button>;

  if (cards.length === 0) {
    return (
      <div className='container text-center'>
        {button}
      </div>

    )
  }

  return (
    <div className="App container text-center">
      {button}
      <div className='d-flex justify-content-around'>
        <CardView  rank={cards[0].rank} suit={cards[0].suit}/>
        <CardView  rank={cards[1].rank} suit={cards[1].suit}/>
        <CardView  rank={cards[2].rank} suit={cards[2].suit}/>
        <CardView  rank={cards[3].rank} suit={cards[3].suit}/>
        <CardView  rank={cards[4].rank} suit={cards[4].suit}/>
      </div>
    </div>
  );
}

export default App;
