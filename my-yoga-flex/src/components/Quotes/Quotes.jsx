

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Quotes() {
//     const [quotes, setQuotes] = useState([]);
//     const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setIsLoading(true);
//         axios.get(`${process.env.REACT_APP_API_URL}/quotes`) // Adjust with your API URL
//           .then(response => {
//               setQuotes(response.data);
//               setIsLoading(false);
//           })
//           .catch(error => {
//               setError(error.message);
//               setIsLoading(false);
//           });
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
//         }, 7000); // Change quote every 1000 milliseconds

//         return () => clearInterval(interval); // Clear interval on component unmount
//     }, [quotes]);

//     const currentQuote = quotes[currentQuoteIndex];

//     return (
//         <>
           
//             {isLoading ? (
//                 <p>Loading...</p>
//             ) : error ? (
//                 <p>Error: {error}</p>
//             ) : (
//                 <p>{currentQuote?.quote} - {currentQuote?.author}</p>
//             )}
//         </>
//     );
// }

// export default Quotes;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quotes.scss';

function Quotes() {
    const [quotes, setQuotes] = useState([]);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [fade, setFade] = useState(false); // New state for controlling fade

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${process.env.REACT_APP_API_URL}/quotes`)
          .then(response => {
              setQuotes(response.data);
              setIsLoading(false);
          })
          .catch(error => {
              setError(error.message);
              setIsLoading(false);
          });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); // Start fade out
            setTimeout(() => {
                setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
                setFade(false); // Fade in the new quote
            }, 1000); // This should match the CSS transition time
        }, 7000); // Change quote every 7000 milliseconds

        return () => clearInterval(interval);
    }, [quotes]);

    const currentQuote = quotes[currentQuoteIndex];

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className={`quote-container ${fade ? 'fade-out' : ''}`}>
                    <p>{currentQuote?.quote} - {currentQuote?.author}</p>
                </div>
            )}
        </>
    );
}

export default Quotes;
