var wordList = ["elephant", "tent", "tightrope", "lions", "popcorn", "peanuts"]; 
var usersGuess = []; //Empty array used to capture letters entered by user
var hiddenWord = []; //Empty array used to mask the random word
var count =7;
var gameStarted;

// Computer will select a random word from the array that has been provided wordList[]
var randomWord = wordList[(Math.floor(Math.random() * wordList.length))];

document.addEventListener("keyup", function(start) {
    
        var splitWord = randomWord.split("");
                for (i = 0; i < splitWord.length; i++){
                    hiddenWord.push("_");  
                }
                document.getElementById ("current-word").innerHTML = hiddenWord;
                document.getElementById ("guesses-left").innerHTML = count;
                
        });  
        

document.addEventListener("keyup", function(event) {
    
        var letterGuessed = event.key;
            
        if (usersGuess.length < 7) {          
            usersGuess.push(letterGuessed);
            count --;
            document.getElementById ("letters-guessed").innerHTML = (usersGuess);
            document.getElementById ("guesses-left").innerHTML = count;
        }
        console.log(usersGuess);
    });

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