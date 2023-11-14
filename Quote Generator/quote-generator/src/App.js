import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quoteList, setQuoteList] = useState([]);
  const [quote, setQuote] = useState({});

  const fetchQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((res) => setQuoteList(res));
  
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  function randomQuote() {
    setQuote(quoteList[Math.floor(Math.random() * quoteList.length)]);
  }

  return (
    <div className="App">
      <button onClick={randomQuote}> Get Quote </button>
      <p>{quote.text}</p>
    </div>
  );
 
}

export default App;
