alert("welcome to hangman"); //web popup

let listOfWords =["frog", "cat", "dog", "snake", "kangaroo", "elephant", "whale", "rabbit"];
//list of words 

let word = listOfWords[Math.floor(Math.random() * listOfWords.length)]; 
//pick a random word 

// @TODO: remove when finished
console.log('word', word)

let answerArray =[];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";    
}
// display how many letters are in word 


//if user input is equal to a letter in the word, add to answer array

//first try

function getUserAnswer(value) {
    const userInput1 = window.prompt('Enter your first letter, 5 trys remaining')
    for (let i = 0; i < word.length; i++) {
        if(word[i] === userInput1) {
            answerArray[i] = userInput1;
        } 
    }
}

getUserAnswer()


// const userInput1 = window.prompt('Enter your first letter, 5 trys remaining')

// for (let i = 0; i < word.length; i++) {
//     if(word[i] === userInput1) {
//         answerArray[i] = userInput1;
//     } 
// }

alert(answerArray);

//second try

const userInput2 = window.prompt('Enter your second letter, 4 trys remaining')


for (let i = 0; i < word.length; i++) {
    if(word[i] === userInput2) {
        answerArray[i] = userInput2;
    } 
}

alert(answerArray)

//third try

const userInput3 = window.prompt('Enter your third letter, 3 trys remaining')


for (let i = 0; i < word.length; i++) {
    if(word[i] === userInput3) {
        answerArray[i] = userInput3;
    } 
}

alert(answerArray)

//fourth try

const userInput4 = window.prompt('Enter your fourth letter, 2 trys remaining')


for (let i = 0; i < word.length; i++) {
    if(word[i] === userInput4) {
        answerArray[i] = userInput4;
    } 
}

alert(answerArray)

//fifth try

const userInput5 = window.prompt('Enter your fifth letter, 1 trys remaining')


for (let i = 0; i < word.length; i++) {
    if(word[i] === userInput5) {
        answerArray[i] = userInput5;
    } 
}

alert(answerArray)

//sixth try

const userInput6 = window.prompt('Enter your sixth letter, this is your final try')


for (let i = 0; i < word.length; i++) {
    if(word[i] === userInput6) {
        answerArray[i] = userInput6;
    } 
}

alert(answerArray)

//alert user if they won or lost

const hasLost = answerArray.includes("_")
alert(`you have lost ${hasLost}`)
