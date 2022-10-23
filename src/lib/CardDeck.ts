import Card from "./Card";
import card from "./Card";

class CardDeck {
  public arr: Card[] = [];
  constructor(
    public rank: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    public symbol: string[] = ['♦', '♥', '♣', '♠'],
  ) {
    for (let i = 0; i < this.symbol.length; i++) {
      for (let q = 0; q < this.rank.length; q++) {
        const card = new Card(this.rank[q], this.symbol[i]);
        this.arr.push(card);
      }
    }
  }

  getCard(){
        let random =  this.arr[Math.floor(Math.random()*this.arr.length)]
        let index = this.arr.indexOf(random);
        this.arr.splice(index, 1)
        return random
  }

  getCards(howMany:number){
    let cards: card[] = [];
    for (let i = 0; i < howMany; i++) {
      cards.push(this.getCard());
    }
    console.log(this.arr);
    return cards;
  }
}



export default CardDeck;