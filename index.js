/*
I didn't like the idea of having "random colors" pop up for each quote. I liked the idea of having a specific color for each quote and evoking a certain mood, hence one of the properties of each object is `bgColor`. P.S, I don't think calling the array 'quotes' is a good call. It's really more than just a quote and it gets confusing if you have a quotes array and you're accessing the quote property from a quote object...?
*/
const quotes = [
  {
    words: '"I could write a book called the things ho\'s say"',
    bgColor: "red",
    artist: "Jermaine Cole",
    citation: "She Knows",
    year: "2013",
    tag: "East Coast" //These tags will organize Hip-hop artists by geography
  },
  {
    words: '"I used to talk way too much, you used to know everything"',
    bgColor: "purple",
    artist: "Chance the Rapper",
    citation: "Juke Jam",
    year: "2016",
    tag: "Chi-town"
  },
  {
    words: '"What she order...? Fish fillet?"',
    bgColor: "yellow",
    artist: "Kanye West",
    year: "2011",
    tag: "Chi-town"    
  },
  {
    words: '"If I told you a flower bloomed in a dark room would you trust it?"',
    bgColor: "black",
    artist: "Kendrick Lamar",
    citation: "Poetic Justice",
    tag: "West Coast"
  }
];
var tempQuotes = quotes
//Cache the quoteBox so that we can inject markup into it
const quoteBox = document.getElementsByClassName('quote-box')[0]
//Cache the body so we can adjust it's background-color per each object
const body = document.getElementById('background')
//The most standard JS random range of numbers function
function randomNum(min, max){
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

function getRandomQuote(quotes) {
    return quotes[randomNum(0, quotes.length - 1)]
}
//I used a template string to add the elements together as opposed to the method suggested in the project steps--this is more aligned with ES2015 syntax and I think it's more elegant in genral.
function displayQuote(quote) {
  body.style.backgroundColor = quote.bgColor
  quoteBox.innerHTML = `<p>${quote.words}</p>
          <p class="artist">- ${quote.artist}</p>
          <span>Song - ${quote.citation || "?"}</span><br>
          <span>Released - ${quote.year || "?"}</span>`
}
function removeQuote(quote, quotesArray){
  const quoteIndex = quotesArray.indexOf(quote)
  quotesArray.splice(quoteIndex, 1)
}

function replaceQuote(){
  const quote = getRandomQuote(tempQuotes)
  displayQuote(quote)
  removeQuote(quote, tempQuotes)
}

//Given the scope of this project, I didn't put this in a function nor did I inlucde a clear interval component
replaceQuote()
window.setInterval(replaceQuote, 2000)
