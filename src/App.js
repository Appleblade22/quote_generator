import './App.css';
import React, { useEffect } from 'react';
import QuoteBox from './components/quoteBox';
function App() {
  const [quote, setQuote] = React.useState({text: "", author: ""});

  const handleNewQuote = () => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(data => {
        const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)]
        setQuote({text: randomQuote.quote, author: randomQuote.author});
      })
  }
  useEffect(() => {
    handleNewQuote()
  }, [])
  
  return (
    <div className="main">
        <QuoteBox quote={quote}  handleNewQuote={handleNewQuote} />
    </div>
  );
}

export default App;
