class Deck {
        constructor() {

            this.deck = [
                "c1","c2",'c3','c4','c5','c6','c7','c8','c9','c10','cj','cq','ck','h1','h2','h3','h4','h5','h6','h7','h8','h9','h1','hj','hq','hk','d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','dj','dq','dk','s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','sj','sq','sk'
            ]
        }
        shuffle() {
            var m = this.deck.length, t, i;
            // While there remain elements to shuffle…
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);
                // And swap it with the current element.
                t = this.deck[m];
                this.deck[m] = this.deck[i];
                this.deck[i] = t;
            }
            return this.deck;
        }
        
        deal() {
            return this.deck.shift()
        }
        reset() {
            this.deck = [
                "c1", "c2", 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h1', 'hj', 'hq', 'hk', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk'
            ];
            this.shuffle();
            
    }
}
class Player {
    constructor(name) {
        this.name = name
        this.hand = []
    }
    take(deck) {
        this.hand.push(deck.deal());
        return this;
    }
    discard() {
        this.hand=[];
    }

}

var player=new Player(player)
var dealer = new Player(dealer)
var deck = new Deck
deck.shuffle()

$(document).ready(function(){
    $("#deal").click(function(){
        if($('#result').text().length>0){
            player.discard()
            dealer.discard()
            $('#player_hand').empty()
            $('#dealer_hand').empty()
            $('#result').empty()

        }
        if (deck.deck.length <= 4){
            deck.reset()
        }
        player.take(deck).take(deck)
        dealer.take(deck).take(deck)
        $('#player_hand').append(`<img src='images/${player.hand[0]}.png'>`)
        $('#player_hand').append(`<img src='images/${player.hand[1]}.png'>`)
        $('#dealer_hand').append(`<img src='images/${dealer.hand[0]}.png'>`)
        $('#dealer_hand').append(`<img src='images/${dealer.hand[1]}.png'>`)

        $('#dealer_score').text(evaluate(dealer))
        $('#player_score').text(evaluate(player))


        console.log(player.hand)
        console.log(dealer.hand)

    });

    function evaluate(player){
        cards=player.hand
        sum=0
        for(let x=0; x<cards.length; x++){
            card=cards[x].slice(1)
            if( card=="j"|| card =="k" || card == "q"){
                sum+=10
            }
            else{
                sum+=parseInt(card)
            }
        }
        return sum
    }
    function bust(){

    }
    $('#hit').click(function(){
        if (deck.deck.length <= 2){
            deck.reset()
        }
        player.take(deck)
        $('#player_score').text(evaluate(player))
        $('#player_hand').append(`<img src='images/${player.hand[player.hand.length-1]}.png'>`)
        if( parseInt($('#player_score').text())>21){
            console.log("lost")
            $('#result').html('<p class="display-4 text-danger">YOU BUST</p>')
        }
    });

    function dealerhit(){
        if (deck.deck.length <= 2){
            deck.reset()
        }

        while(parseInt($('#dealer_score').text())<=17){
                // If bust or win - clearTimeout
                dealer.take(deck)
                $('#dealer_score').text(evaluate(dealer))
                $('#dealer_hand').delay(800).append(`<img src='images/${dealer.hand[dealer.hand.length-1]}.png'>`)
        }

        if( parseInt($('#dealer_score').text())>21){
            console.log("lost")
            $('#result').html('<p class="display-4 text-success">Dealer BUST, You Win</p>')
        }
        else if(parseInt($('#dealer_score').text())>parseInt($('#player_score').text())){
            $('#result').html('<p class="display-4 text-danger">YOU Lost</p>')
        }
        else if(parseInt($('#dealer_score').text())==parseInt($('#player_score').text())){
            $('#result').html('<p class="display-4 text-primary"> PUSH</p>')
        }
        else if(parseInt($('#dealer_score').text())<parseInt($('#player_score').text())){
            $('#result').html('<p class="display-4 text-success"> You Win</p>')
        }
    }

    $('#stand').click(function(){
        dealerhit()
    })
});