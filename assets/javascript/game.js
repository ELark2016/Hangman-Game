var wordList = ["work", "home", "gym", "pool", "tree", "fruit", "apple", "banana"]; 
var usersGuess = []; 

// Computer will select a random word from the array that has been provided wordList[]
var randomWord = wordList[(Math.floor(Math.random() * wordList.length))];
addEventListener("keyup", function(start) {
    document.getElementById ("current-word").innerHTML = ("Current word: " + randomWord);
});

// To do: display randomly selected word as blanks '_'

document.addEventListener('keyup', function(event) {
    
    var letterGuessed = event.key;
        
        if (usersGuess.length < 7) {
            usersGuess.push(letterGuessed);
            document.getElementById ("letters-guessed").innerHTML = (usersGuess);
            
        }
    });
/*  To do: Figure out how to get rid of that first space/entry that is created when
the game is started */   
// usersGuess.shift(usersGuess[0]);



// insert if statements to display letters when guessed correctly
    /* --------
        1. if incorrect guess decrease number of remaining guesses by 1
        2. if guess is correct display corresponding letter 
        3. 
        
    ----------*/

// need a counter function with a for loop to reduce the number of remaining guesses
    /* -----------
      1. if guess is incorrect, decrease count by 1
      2. once user has depleted number of guesses available; message that game is over 
      3. immediately display the next word for the user to guess

    */