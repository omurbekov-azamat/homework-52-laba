import Card from "./Card";

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

  getCard(ammount:number){
      let newCard: Card[] = [];

      for (let i=0; i < ammount; i++) {
        let random =  this.arr[Math.floor(Math.random()*this.arr.length)]
        let index = this.arr.indexOf(random);
        this.arr.splice(index, 1)
        newCard.push(random)

      }
    return newCard
  }

  getCards(howMany:number){
    return this.getCard(howMany);
  }
}



export default CardDeck;