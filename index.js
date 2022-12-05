
let cards=[]
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEL=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.querySelector("#sum-el")

// random card
function randomcard(){
    let randomnum = Math.floor(Math.random()*13)+1

    if(randomnum === 1){
        return 11
    }else if(randomnum >= 10 ){
        return 10
    }else{
        return randomnum
    }
}
let player={
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent =  player.name+ " : $" +  player.chips

// to start game

function startgame(){

    isAlive = true
    let firstCard= randomcard()
    let secondCard= randomcard()
    cards=[firstCard, secondCard]
    sum=firstCard+secondCard
    rendergame()

}

//render game calls form start function

function rendergame(){

    cardsEl.textContent = "Cards: " 

    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+" "
    }
    sumEl.textContent ="Sum : " + sum
    if( sum <= 20){
        message="Do you want to draw a new card?"
    }
    else if (sum === 21){
       message="Wohoo ! You've got the Blackjack"
        hasBlackjack = true
    }else { 
        message="Wohoo ! You're out of the game"
        isAlive = false
        
    }

    messageEL.textContent= message
}

/// adding a new card

function newcard(){
if(isAlive == true && hasBlackjack ==false){
    let card =randomcard()
    sum += card
    cards.push(card)
    rendergame()
}
    
}
