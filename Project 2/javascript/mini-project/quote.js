const button = document.getElementById("new-quote-btn");
const quoteDiv = document.getElementById("quote-output");
const authorDiv = document.getElementById("author-output");

const quotes = [
  {
    quote: "Everyone thinks of changing the world, but no one thinks of changing himself.",
    author: "— Leo Tolstoy"
  },
  {
    quote: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    author: "— Harriet Tubman"
  },
  {
    quote: "To improve is to change; to be perfect is to change often.",
    author: "— Jimmy Dean"
  },
  {
    quote: "If you don't like something, change it. If you can't change it, change your attitude.",
    author: "— Maya Angelou"
  },
  {
    quote: "If you can’t fly, then run. If you can’t run, then walk. If you can’t walk, then crawl. But whatever you do, you have to keep moving forward",
    author: "—Martin Luther King Jr. "
  },
  {
    quote: "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
    author: "— Friedrich Nietzsche"
  }
]

button.addEventListener("click", function() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


  if (quoteDiv.innerText !== randomQuote.quote) {
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  } else {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  }
});
