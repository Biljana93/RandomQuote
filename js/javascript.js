var quotes = [
    "Life is 10% what happens to you and 90% how you react to it.",
    "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    "Live life to the fullest, and focus on the positive.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "My life motto is 'Do my best, so that I can't blame myself for anything.",
]

function newQuote () {
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById("display-quote").innerHTML = quotes[randomNumber];
}

