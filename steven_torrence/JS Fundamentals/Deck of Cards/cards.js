class Card {
    constructor(suite, value) {
        this.suite = suite;
        this.value = value;
        var x = { suite, value };
        return x;
    }
}

class Deck {

    constructor(name) {
        this.cards = [];
        this.name = name;
        this.number = 0;
    }

    deal_card() {
        if (this.cards.length > 0) {
            this.number -= 1;
            var delt_card = this.cards[this.cards.length - 1];
            this.cards.pop();
            return delt_card;
        }
        else
            console.log('no cards')
    }

    deal_hand() {
        this.number -= 5;
    }

    shuffle() {
    }

    insert(object) {
        this.cards.push(object);
        self.number++;
    }
}

class Player extends Deck {
    constructor(name) {
        super(name);
        this.hand = [];
        this.number = 0;
    }

    // get_hand(object){
    //     if(this.hand.length == 0){
    //      object.deal_hand();
    //      this.hand+=5;
    //     }
    //     else{
    //         console.log('too many cards for that')
    //         }

    //     }

    get_card(object) {

        if (this.hand.length < 5) {
            var card = object.deal_card();

            this.number += 1;
            (this.hand).push(card)
        }
        else {
            console.log('too many cards for that')
        }

    }
    // ditch(){
    //     if(this.hand != 0){

    //      this.hand-=1;
    //     }
    //     else{
    //         console.log('No cards in your hand')
    //         }

    //     }          
}
var deck = new Deck('Deck 1');
var player = new Player('Andrew');
var card_1 = new Card('heart', 3);
deck.insert(card_1);
player.get_card(deck);
player.hand;