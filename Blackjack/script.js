let firstCard = 4;
let secondCard= 8;

let sum = firstCard +secondCard;
if(sum < 21){
    console.log(`Do you want to draw a new card?🎰`);
} else if (sum=== 21){
    console.log(`whoo! You've got Black jack!💸"`)
} else if ( sum >21){
    console.log(`You're out of  the game! 😈 `)
}
