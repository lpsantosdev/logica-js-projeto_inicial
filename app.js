alert("Welcome to the game: The Secret Number!");
let secretNumber = 33;
let typedNumber;
let tryes = 1;
while (typedNumber != secretNumber) {
    typedNumber = prompt("Choose a number between 1 and 50 and type below:");
    if(typedNumber == secretNumber){
    alert (`Congratulations! You got it, ${secretNumber} is the secret number! You needed ${tryes} attempt(s)`);
    }
    else{
        if (typedNumber < secretNumber) {
        alert("The number inputted is smaller than the secret number, try again!");
        }
        else {
        alert("The number inputted is greater than the secret number, try again!");
        }
    }
    tryes++;
}

