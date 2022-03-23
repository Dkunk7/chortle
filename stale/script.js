// TODO:
// Make text box clear after every guess - DONE
// Limit guesses to 6 tries - DONE
// Require 5 letter guesses - DONE
// Make all word-related stuff uppercase only - DONE
// Idk how but it'd be nice if you could only submit actual words as a guess (I don't think randomWords has enough words for that to be totally reliable)
// vvvvv
// Maybe use dictionary API --> If the API returns a definition, it's a word
// Fix potential bugginess with duplicate letters ALL highlighting orange when one should maybe be green? (or something like that)

const randomWords = require(`random-words`);
// const axios = require(`axios`).default;
const submitBtn = document.querySelector(".submit");
// NOTE: Use this command to regenerate the bundle.js file so that require functions on the browser --> browserify script.js -o bundle.js

// console.log(randomWords({ exactly: 1, maxLength: 5}))
function displayResult(guess, word) {
    // console.log(word + " word")
    // console.log(guess + " guess")
    const guessArr = guess.split("");
    const wordArr = word.toString().split("");
    console.log(guessArr);
    // Create h1 and attach to document
    const newH1 = document.createElement("h1");
    document.body.appendChild(newH1);
    // Create a span and insert each letter into one
    for (i = 0; i < guessArr.length; i++) {
        const letterSpan = document.createElement("span");
        // Use `i` to differentiate each letter, use `count` to differentiate between different guesses
        letterSpan.classList.add(`letter-${i}-${count}`)
        const spanContent = document.createTextNode(guessArr[i]);
        letterSpan.appendChild(spanContent);
        newH1.appendChild(letterSpan);
    }
    // For each letter in the guess, compare it with the letters in the word
    for (i = 0; i < guessArr.length; i++) {
        if (wordArr.includes(guessArr[i])) {
            console.log("success")
            console.log(wordArr.indexOf(guessArr[i]) + " " + guessArr.indexOf(guessArr[i]))
            // If the guess shares a letter with the word, check if they share the same position
            if (wordArr.indexOf(guessArr[i]) === guessArr.indexOf(guessArr[i])) {
                // If position is the same, assign class to make the letter green
                const letterEl = document.querySelector(`.letter-${i}-${count}`);
                letterEl.classList.add("correct-position")
            } else {
                // If they share a letter, but not the same position, assign class to make the letter orange
                const letterEl = document.querySelector(`.letter-${i}-${count}`);
                letterEl.classList.add("correct-letter")
            }
        }
    }
    guess = "";
}

// function getWord() {
    let preWord = randomWords({exactly: 1, maxLength: 5}).toString();
    let word = preWord.toUpperCase();

    console.log(word + " word test");
    // console.log(word[0].length)
    while (word.length < 5) {
        preWord = randomWords({exactly: 1, maxLength: 5}).toString();
        word = preWord.toUpperCase();
        console.log(word + " in loop")
    }

    console.log(word + " final")
// }

let count = 0;

document.onkeyup = function(event) {
    // console.log(submitBtn);
    event.preventDefault();
    if (event.keyCode === 13) {
        submitBtn.click();
    } else if (!event.keyCode) {
        console.log("failure")
    }
}
submitBtn.addEventListener("click", function() {
    count++
    if (count < 7) {
        let guess = document.querySelector("#guess").value.toUpperCase();
        // console.log(guess + " test X")
        console.log(guess + " | " + word);
        if (guess.length === 5) {
            displayResult(guess, word, count)
            document.querySelector("#guess").value = ""    
        } else {
            console.log("Only 5 letter words are allowed");
            // NOTE: Make this display a message on the page later
        }
    } else return document.querySelector(".end-response").textContent = `The word was ${word}`;
    
})