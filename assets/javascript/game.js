var wordList = ["work", "home", "gym", "pool", "tree", "fruit", "apple", "banana"]; // Create list of words that can be randomly selected by the computer
var usersGuess = []; // Create an empty array that will capture the letters guessed by the user

// Computer will select a random word from the array that has been provided wordList[]

addEventListener("keyup", function(start) {
    var randomWord = wordList[(Math.floor(Math.random() * wordList.length))];
    document.getElementById ("current-word").innerHTML = ("Current word: " + randomWord);
    console.log(randomWord);    
});

// To do: display selected word as blanks spaces that stay on the screen &
// To do: make sure that current word remains same until game ends

document.addEventListener('keyup', function(event) {
    const keyName = event.key;
    usersGuess.push(keyName);
        function displayLetter(letter) {
            document.getElementByID("letters-guessed").innerHTML = (" " + usersGuess);
        }
    console.log (usersGuess);
  });


// To do: Figure out how to limit number of guesses to 6 using a loop

// To Do: get letters to display to the screen
//     function displayLetter(letter) {
//     document.getElementByID("letters-guessed").innerHTML = (" " + usersGuess);   
//         console.log("letter-guessed");
// }

 

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