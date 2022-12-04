function card(suit, rank, index){ //function to create card object of a specific suit, rank, and index
   this.suit = suit;
   this.rank = rank;
   this.index = index;
   this.name = this.rank + " of " + this.suit;
}

function deck(){ //deck object function

   this.suits = ["Diamonds", "Hearts", "Clubs", "Spades"]
   this.ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
   var fullDeck = []

   for(var i=0; i < this.suits.length; i++){ //4 iterations (one for every suit)
      
      for(var j=0; j < this.ranks.length; j++){ //13 iterations (one for every rank)
         
         fullDeck.push(new card(this.suits[i], this.ranks[j], j+1)); //place a new card 13 times in each suit

      }
   }
   
   return fullDeck; //return the deck array

}

function numOrder(){ //order based on card index number

   myDeck.sort(function(a, b){return a.index - b.index});
   document.getElementById("deck").innerHTML = ""
   displayDeck();

}

function reverseOrder(){ //reverse order based on card index number

   myDeck.sort(function(a, b){return b.index - a.index});
   document.getElementById("deck").innerHTML = ""
   displayDeck();

}

function displayDeck(){ //function to display the full deck of cards in the "deck" paragraph element

   for(i=0; i < myDeck.length; i++){

      document.getElementById("deck").innerHTML += myDeck[i].name + "<br>";

   }
}

function shuffle(array) { //Fisher–Yates shuffle function
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  document.getElementById("deck").innerHTML = ""
  displayDeck();
  return array;
}

var myDeck = new deck();


//console.table(myDeck); //show a table of the card objects within the new deck