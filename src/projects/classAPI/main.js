'use strict'
let deckID;
// const assert = require('assert');
// let turn1 = true;

class Player {
    constructor (cards) {
        this.hand = cards;
    }
    //I think there was a way more efficient way to do this card counting for calling later
    //but I was excited to make a method on my Player class.
    cardCount(){
        let playerCardCount;
        if(this == player1){
            playerCardCount = document.getElementById("playerCardCount");
        } else {
            playerCardCount = document.getElementById("opponentCardCount");
        }
        playerCardCount.innerHTML = this.hand.length;
    }

}

let player1 = new Player(0);
let player2 = new Player(0);

window.onload = function(){
    let dealButton = document.getElementById("deal");
    dealButton.disabled = 'true';
    //commented this out so it doesn't make a new deck every time I save.
    
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(json =>{
        deckID = json.deck_id;
        console.log("got deck "+deckID);
        makeOpponent(deckID);
    })
    // deckID = 'iqdy4nglpdkp';
    // makeOpponent('iqdy4nglpdkp');
}

function shuffle(){
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`)
    .then(res => res.json())
    .then(cards => {
        let status = document.getElementById("status");
        status.innerHTML = "Shuffled!";
        console.log(cards);
        let dealButton = document.getElementById("deal");
        dealButton.disabled = false;
        player1.hand = {};
        player2.hand = {};
        // console.log(deckID);
    })
    // .catch(console.log("Error"))
}

function dealCards(){
    halfCards(player1);
    halfCards(player2);
    let dealButton = document.getElementById("deal");
    dealButton.disabled = true;
    let status = document.getElementById("status");
    status.innerHTML = "Dealt!";
    // player1.cardCount();
    // player2.cardCount();
    // console.log(player1.hand);
    // console.log(player2.hand);
}

function halfCards(player) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=26`)
    .then(res => res.json())
    .then(result =>{
        console.log("Hand ", result.cards);
        let valued = result.cards;
        //Turn all card value Strings into Integers
        for (let i=0; i<valued.length; i++){
            if (valued[i].value === 'JACK'){
                valued[i].value = 11;
            } if (valued[i].value === 'QUEEN'){
                valued[i].value = 12;
            } if (valued[i].value === 'KING'){
                valued[i].value = 13;
            } if (valued[i].value === 'ACE'){
                valued[i].value = 14;
            } else {
                valued[i].value = Number(valued[i].value);
            }
        }
        player.hand = valued;
        player.cardCount();
    })
}

// Here is the actual gameplay code:

function playCard(){
    // let playerHand = player1.hand;
    // let opponentHand = player2.hand;
    let pauseButton = document.getElementById('playCard');
    pauseButton.disabled = true;
    showCards(player1.hand[0], 0);
    showCards(player2.hand[0], 1);
    let playerCard = player1.hand.shift();
    let opponentCard = player2.hand.shift();
    let status = document.getElementById('status');
    if (playerCard.value > opponentCard.value) {
        status.innerHTML = `${player1.name} takes the cards!`
        player1.hand.push(playerCard, opponentCard);
        pauseButton.disabled = false;
    } if (opponentCard.value > playerCard.value){
        status.innerHTML = `${deckID} takes the cards!`
        player2.hand.push(playerCard, opponentCard)
        pauseButton.disabled = false;
    } if (playerCard.value == opponentCard.value) {
        playWar(playerCard, opponentCard, status);
    }
    player1.cardCount();
    player2.cardCount();
}
function playWar(playerCard, opponentCard, status) {
    let playerWar = player1.hand.splice(0, 4);
    let opponentWar = player2.hand.splice(0, 4);
    showCards(playerWar[3], 0);
    showCards(opponentWar[3], 1);
    if (playerWar[3].value > opponentWar[3].value) {
        status.innerHTML = `${player1.name} wins the battle!`
        player1.hand = player1.hand.concat(playerCard, opponentCard, playerWar, opponentWar);
        document.getElementById('playCard').disabled = false;
    } if (opponentWar[3].value > playerWar[3].value){
        status.innerHTML = `${deckID} wins the battle!`
        player2.hand = player2.hand.concat(playerCard, opponentCard, playerWar, opponentWar)
        document.getElementById('playCard').disabled = false;
    }
}
function showCards(card, turn){
    console.log(`getting card ${card.code}`)
    let playerCard = document.getElementById('card1');
    let opponentCard = document.getElementById('card2');


    let url = `https://deckofcardsapi.com/static/img/${card.code}.png`;
    let pic = document.createElement('img');
    pic.height = 120;
    pic.width = 100;
    pic.className = 'cardPic';
    pic.src = url;
    // playerCard.innerHTML = deckID;
    if(turn === 0){
        playerCard.innerHTML = "";
        playerCard.appendChild(pic);
    } if (turn === 1){
        opponentCard.innerHTML = "";
        opponentCard.appendChild(pic);
    }
}
// let playerCardCount = document.getElementById("playerCardCount");
// playerCardCount.innerHTML = player1.hand.length;
// let opponentCardCount = document.getElementById("opponentCardCount");
// opponentCardCount.innerHTML = player2.hand.length;

//All the player and opponent code:
//robohash.org/
function makeOpponent(deckID){
    console.log(`fetching robot ${deckID}`)
    let url = `https://robohash.org/${deckID}.png`;
    let opponentPic = document.getElementById("opponentPic");
    let opponentName = document.getElementById("opponentName");
    let pic = document.createElement('img');
    pic.className = 'robot';
    pic.src = url;
    opponentName.innerHTML = deckID;
    opponentPic.appendChild(pic);
}
function makePlayer() {
    console.log("Fetching robot");
    let playerName = document.getElementById("changeName");
    let playerPic = document.getElementById("playerPic");
    player1.name = playerName.value;
    // robotFetch(robot);
    let url = `https://robohash.org/${player1.name}.png`;
    let pic = document.createElement('img');
    pic.className = 'robot';
    pic.src = url;
    playerPic.appendChild(pic);
    changeName(player1.name);
    stopName();
    // console.log(`robohash.org/`)
}
function changeName(player){
    let nameChange = document.getElementById('playerName');
    nameChange.innerHTML = player;
}
function stopName(){
    let stopButton = document.getElementById('join');
    let stopName = document.getElementById('changeName');
    stopName.disabled = true;
    stopButton.disabled = true;
}

// Unit Tests: Let's see if I get this far...

// if (typeof describe === 'function') {

//     describe('#towersOfHanoi()', () => {
//         it('should be able to move a block', () => {
//         towersOfHanoi('a', 'b');
//         assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
//         });
//     });
// }