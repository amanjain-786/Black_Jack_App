function getRandomCard(){
    let card=Math.floor((Math.random()*13)+1)
    if(card===1){
        return 11
    }
    else if(card===11 || card===12 || card===13){
        return 10
    }
    return card
}
let firstCard
let secondCard
let sum=0

let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
console.log(messageEl)//just to check if we are getting hold of the correct elemetn
let sumEl=document.getElementById("sum-el")
console.log(sumEl)
let cardsEl=document.getElementById("cards-el")

let cards=[]


function renderGame(){
    sumEl.textContent= "Sum : " +sum
    cardsEl.textContent="Cards : "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    if(sum<21){
        message="do you want to draw a new card?"
    }
    else if(sum === 21){
        message="Wohoo ! You've a black jack"
        hasBlackJack=true
    }
    else{
        message="You're out of the game."
        isAlive=false
    }
    
    console.log(hasBlackJack)
    console.log(isAlive)
    console.log(message)

    messageEl.textContent=message

}

function newCard(){
    console.log("drawing a new card from the deck")
    if(isAlive===false){
        if(cards.length===0){
            //we have not started the game
            message="You've to start the game first , to choose a new card"
        }
        //we are already out so no need to do anything just do 
        else{
            message="You're already out, can't choose a new card"
        }
        messageEl.textContent=message
    }
    else if(hasBlackJack==true){
        message="Hey man, You've won you shouldn't continue."
        messageEl.textContent=message
    }
    else{
        let card=getRandomCard()//value can be between 2-11 as it is the rule of the black jack man so keep that in mind will hard coding the value for now
        sum+=card
        cards.push(card)//we need to push the new card in the array too bro
        renderGame()
    }
}

function startGame(){
    isAlive=true
    hasBlackJack=false
    firstCard=getRandomCard()
    secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

let playerEl=document.getElementById("player-el")

let player={
    name:"aman",
    chips:150
}

playerEl.textContent=player.name+" : $"+player.chips