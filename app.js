alert("Welcome to the game: The Secret Number!");
let varMaxNumber = 100;
let varSecretNumber = parseInt(Math.random() *varMaxNumber +1);
let varTypedNumber;
let varTryes = 1;
let varTryWord;
console.log(varSecretNumber);
while (varTypedNumber != varSecretNumber) {
    varTypedNumber = prompt(`Choose a number between 1 and ${varMaxNumber} and type below:`);
    if(varTypedNumber == varSecretNumber){
        break;
    }
    else{
        if (varTypedNumber < varSecretNumber) {
        alert("The number inputted is smaller than the secret number, try again!");
        }
        else {
        alert("The number inputted is greater than the secret number, try again!");
        }
    }
    varTryes++;
}
varTryWord = varTryes == 1? "attempt":"attempts";
alert (`Congratulations! You got it, ${varSecretNumber} is the secret number and you needed ${varTryes} ${varTryWord} to find out!`);

