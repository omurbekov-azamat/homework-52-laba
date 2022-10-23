import React from 'react';

interface CardViewProps {
  rank: string;
  suit: string;
}

const CardView: React.FC<CardViewProps> = (props) => {

  const changeClass = (rank: string, suit: string) => {
    let rankChange;
    let suitChange;

    const ranks: string[] = ['2', '3', '4', '5', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let i = 0; i < ranks.length; i++) {
      if (rank === ranks[i]) {
        rankChange = rank.toLowerCase();
      }
    }

    if (suit === '♦') {
      suitChange = 'diams';
    } else if (suit === '♥') {
      suitChange = 'hearts';
    } else if (suit === '♣') {
      suitChange = 'clubs';
    } else {
      suitChange = 'spades';
    }

    return 'card rank-' + rankChange + ' ' + suitChange;
  }

  return (
    <div className="playingCards faceImages">
      <span className={changeClass(props.rank, props.suit)}>
    <span className="rank">{props.rank}</span>
    <span className="suit">{props.suit}</span>
    </span>
    </div>
  );
};

export default CardView;

