// ! first part of the lesson below.  Just in case we need it later?
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

const holidayMessage = [];

function writeCards(names, holiday) {
    for (let i = 0; i < names.length; i++) {
        holidayMessage.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
    }
    return holidayMessage;
}


function countDown(input) {
    while (input >= 0) {
        console.log(input);
        input--;
    }
}