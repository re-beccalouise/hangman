/*
think of a word
draw hangman + spaces for letters
    // variables
user guesses a letter
is the guess correct?
    // yes
        display correct letters in correct places
        has the user guessed the word
    // no
        subtract attempt 

add the letter to the guessed letters pile
attempts remaining > 0
*/

/*
generateWord()
printInformation()
checkValidUserInput()
checkUserGuess()
updateInformation()
*/

generateWord = (wordBank) => {
    let randNum = Math.floor(Math.random() * wordBank.length);
    return wordBank[randNum];
}

const printInfo = (correctAttempts, attemptsRemaining, attempted, bp) => {  
    console.log(' |‾‾‾‾‾|');
    console.log(` ${bp[0]}     |`);
    console.log(`${bp[2]}${bp[1]}${bp[3]}    |`);
    console.log(` ${bp[4]}${bp[5]}    |`);
    console.log(' ‾‾‾‾‾‾');
    console.log('\n')
    
    console.log(correctAttempts.join(''));
    console.log('Attempts remaining: ' + attemptsRemaining);
    console.log('Incorrect letters: ' + attempted.join(''));
}

const checkUserInput = (userInput, correctAttempts, attempted) => {
    if (!userInput) {
        alert('Please enter a valid value');
        return false;
    } else if(userInput.length > 1) {
        alert('Please enter a single letter');
        return false;
    } else if(correctAttempts.includes(userInput + ' ') || attempted.includes(userInput + ' ')) {
        alert('You have already attempted: ' + userInput);
        return false;
    }

    return true;
}

const checkGuess = (userInput, wordToGuess, correctAttempts, attemptsRemaining, attempted, all, bp) => {
    let correctGuess = false;

    for (let i = 0; i < wordToGuess.length; i++) {
        if(wordToGuess[i] === userInput) {
            correctAttempts[i] = userInput + ' ';
            correctGuess = true;
        }
    }

    if (!correctGuess) {
        attemptsRemaining--;
        attempted.push(userInput + ' ');
        bp[5 - attemptsRemaining] = all[5 - attemptsRemaining]
    }

    return {bp: bp, attemptsRemaining: attemptsRemaining};
}

const checkGameOver = (correctAttempts, attemptsRemaining, wordToGuess) => {
    let tempAttempts = correctAttempts.map(letter => letter[0])

    if (attemptsRemaining == 0) {
        alert('You have lost the game');
        return true;
    } else if(tempAttempts.join('') === wordToGuess) {
        alert("You win");
        return true;
    }

    return false;
}

const main = () => {
    const wordBank = ["JAZZ", "AWKWARD", "ZINC", "VEX"];
    let wordToGuess = generateWord(wordBank);
    let attemptsRemaining = 6;
    let correctAttempts = new Array(wordToGuess.length).fill('_ '); //JAZZ =  _ _ _ _ 
    let attempted = [];
    let all = ['o', '|', '-', '-', '/', '\\'];
    let bp = [' ', ' ', ' ', ' ', ' ', ' '];

    alert('Welcome to hangman');
    while(attemptsRemaining > 0) {
        printInfo(correctAttempts, attemptsRemaining, attempted, bp);
        console.log(attemptsRemaining);
        let userInput = prompt("Please enter a letter").toUpperCase();

        if (!checkUserInput(userInput, correctAttempts, attempted)) {
            continue;
        }

        let output = checkGuess(userInput, wordToGuess, correctAttempts, attemptsRemaining, attempted, all, bp);
        
        attemptsRemaining = output.attemptsRemaining;
        bp = output.bp

        if(checkGameOver(correctAttempts, attemptsRemaining, wordToGuess)) {
            printInfo(correctAttempts, attemptsRemaining, attempted, bp);
            return;
        }
    }
}

main();