const randomWords = require(`random-words`);
// const axios = require(`axios`).default;
const submitBtn = document.querySelector(".submit");

// console.log(randomWords({ exactly: 1, maxLength: 5}))


function getWord() {
    let word = randomWords({exactly: 1, maxLength: 5});
    console.log(word);
    console.log(word[0].length)
    while (word[0].length < 5) {
        word = randomWords({exactly: 1, maxLength: 5});
        console.log(word + " in loop")
    }

    console.log(word + " final")
}

getWord();

submitBtn.addEventListener("click", function() {
    const guess = document.querySelector("#guess").value;
    console.log(guess);
})