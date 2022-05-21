import React from 'react'

const QuoteBox = ({quote,handleNewQuote}) => {
  return (
    <div id = "quote-box">
      <h1 class = "heading">QUOTES</h1>
      <div id = "text">
        {quote.text}
      </div>
      <h2 id = "author">~ {quote.author}</h2>
      <div class = "actions">
        <button 
          id = "new-quote"
          onClick = {handleNewQuote}
          class = "button"
        >
          New Quote
        </button>

          <a
            id = "tweet-quote"
            href = {`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`}
            target = "_blank"
            rel='noopener noreferrer'
          >
            Tweet Quote
          </a>

      </div>
    </div>
  );
};

export default QuoteBox;