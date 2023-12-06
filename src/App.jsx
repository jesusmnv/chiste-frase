import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [content, setContent] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      });
      setContent(response.data.joke);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://quote-garden.onrender.com/api/v3/quotes/random');
      const { quoteText, quoteAuthor, quoteGenre } = response.data.data[0];
      setContent(`${quoteText}\n\n- ${quoteAuthor}, ${quoteGenre}`);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

/*   useEffect(() => {
    fetchJoke();
  }, []);
 */

  return (
    <div className="container">
      <h1>Random Content Generator</h1>
      <div>
        <button className="neon-button" onClick={fetchJoke}>Get Joke</button>
        <button className="neon-button" onClick={fetchQuote}>Get Quote</button>
      </div>
      {content && (
        <div className="content-box">
          <h2>Random Content:</h2>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default App;
