/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

function addAces(tempArray, temp) {
  for (let i = 0; i < tempArray.length; i++) {
    if (temp >= 11) {
      temp += 1;
    }
    else {
      temp += 11;
    }
  } 
  return temp;
}

function handValue(hand) {
  let temp = 0;
  let tempArray = [];

  for (let i = 0; i < hand.length; i++) {
    if (hand[i].toUpperCase() === "K" || hand[i].toUpperCase() === "Q" || hand[i].toUpperCase() === "J") {
      temp += 10;
    }
    else if (hand[i].toUpperCase() === "A") {
      tempArray.push(hand[i]);
    }
    else {
      temp += parseInt(hand[i]);
    }
  }

  if (tempArray.length !== 0) {
    temp = addAces(tempArray, temp);
  }
  return temp;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/