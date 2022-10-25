import Card from "./Card";


class PokerHand {
  constructor(public arr: Card[]) {
  }

  getOutcome(){
    const rank: string[] = [];
    const suit: string[] = [];
    const royalFlash: string[] = [];

    for (let i = 0; i < this.arr.length; i++) {

      if(this.arr[i].rank === '10' || this.arr[i].rank === 'J' || this.arr[i].rank === 'Q' || this.arr[i].rank === 'K' || this.arr[i].rank === 'A') {
        if(!royalFlash.includes(this.arr[i].rank)){
          royalFlash.push(this.arr[i].rank);
        }
      }

      for (let j = i + 1; j < this.arr.length; j++) {

        if (this.arr[i].rank === this.arr[j].rank) {
          rank.push(this.arr[i].rank);
        }

        if (this.arr[i].suit === this.arr[j].suit){
          suit.push(this.arr[i].suit);
        }
      }
    }

    if(rank.length === 1){
      return 'одна пара';
    } else if(rank.length === 2){
      return 'две пары';
    } else if (rank.length === 3){
      return 'тройка'
    } else if (rank.length === 4) {
      return 'фулл-хаус'
    } else if (rank.length === 10) {
      return 'каре'
    }

    if(suit.length === 10) {
      return 'флэш';
    }

    if(royalFlash.length === 5 && suit.length === 10){
      return 'роял-флэш'
    }

    return ''
  }
}

export default PokerHand;