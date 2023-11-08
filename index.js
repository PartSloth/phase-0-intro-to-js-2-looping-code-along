// Code your solutions in this file

const newArray = [];

function writeCards(array, event) {
    for (let i=0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown(i) {
    while (i > -1) {
        console.log(i);
        i--;
    }
}