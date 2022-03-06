const randomWords = require(`random-words`);
// const axios = require(`axios`).default;
const submitBtn = document.querySelector(".submit");

// console.log(randomWords({ exactly: 1, maxLength: 5}))
function displayResult(guess, word) {
    // console.log(word + " word")
    // console.log(guess + " guess")
    const guessArr = guess.split("");
    const wordArr = word.toString().split("");
    console.log(guessArr);
    const newH1 = document.createElement("h1");
    document.body.appendChild(newH1);
    for (i = 0; i < guessArr.length; i++) {
        const letterSpan = document.createElement("span");
        letterSpan.classList.add(`letter-${i}-${count}`)
        const spanContent = document.createTextNode(guessArr[i]);
        letterSpan.appendChild(spanContent);
        newH1.appendChild(letterSpan);
    }
    for (i = 0; i < guessArr.length; i++) {
        if (wordArr.includes(guessArr[i])) {
            console.log("success")
            console.log(wordArr.indexOf(guessArr[i]) + " " + guessArr.indexOf(guessArr[i]))
            if (wordArr.indexOf(guessArr[i]) === guessArr.indexOf(guessArr[i])) {
                const letterEl = document.querySelector(`.letter-${i}-${count}`);
                letterEl.classList.add("correct-position")
            } else {
                const letterEl = document.querySelector(`.letter-${i}-${count}`);
                letterEl.classList.add("correct-letter")
            }
        }
    }
}

// function getWord() {
    let word = randomWords({exactly: 1, maxLength: 5});
    // console.log(word);
    // console.log(word[0].length)
    while (word[0].length < 5) {
        word = randomWords({exactly: 1, maxLength: 5});
        console.log(word + " in loop")
    }

    console.log(word + " final")
// }

let count = 0;

submitBtn.addEventListener("click", function() {
    count++
    const guess = document.querySelector("#guess").value;
    console.log(guess + " | " + word);

    displayResult(guess, word, count)
})