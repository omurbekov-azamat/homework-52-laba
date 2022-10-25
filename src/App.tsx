import React, {useState} from 'react';
import CardView from "./CardView/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";

let t: string = '';

function App() {

  const cardDeck = new CardDeck();
  const [cards, setCards] = useState<Card[]>([]);

  const changeCards = () => {

    let newCards = cardDeck.getCards(5);

    setCards(
      newCards
    )

    const pokerHand = new PokerHand(newCards);
    t = pokerHand.getOutcome();
  };

  const button = <button className='btn btn-info m-5 text-uppercase p-3' onClick={changeCards}>раздать карты</button>;
  const btnChange = <button className='btn mt-3 text-uppercase p-1'>заменить</button>

  if (cards.length === 0) {

    return (
      <div className='container text-center'>
        {button}
      </div>
    )
  }

  return (
    <div className="container text-center">
      {button}
      <div className='d-flex justify-content-around m-5'>
        <div>
          <CardView  rank={cards[0].rank} suit={cards[0].suit}/>
          {btnChange}
        </div>
        <div>
          <CardView  rank={cards[1].rank} suit={cards[1].suit}/>
          {btnChange}
        </div>
        <div>
          <CardView  rank={cards[2].rank} suit={cards[2].suit}/>
          {btnChange}
        </div>
        <div>
          <CardView  rank={cards[3].rank} suit={cards[3].suit}/>
          {btnChange}
        </div>
        <div>
          <CardView  rank={cards[4].rank} suit={cards[4].suit}/>
          {btnChange}
        </div>
      </div>
      <h1 className='fs-1 fw-bold text-danger text-uppercase m-5 p-5'>{t}</h1>
    </div>
  );
}

export default App;
