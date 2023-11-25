
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Header.scss';
// import { useNavigate } from 'react-router-dom';

// function Header() {
//   const navigate = useNavigate();
//   const [quote, setQuote] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigateToHome = () => {
//     navigate('/');
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     axios.get('https://zenquotes.io/api/quotes') // Replace 'API_URL' with the actual URL of the API
//       .then(response => {
//         console.log(response.data);
//         setQuote(response.data[0]); // Adjust this based on the API response structure
//         setIsLoading(false);
//       })
//       .catch(error => {
//         setError(error.message);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div onClick={navigateToHome} className="header">
//       <h1 className="header__title">MY YOGA FLEX</h1>
//       {error && <p className="header__error">Error: {error}</p>}
//       {isLoading ? <p>Loading...</p> : <p className="header__text">{quote}</p>}
//     </div>
//   );

// }

// export default Header;










import './Header.scss'
import { useNavigate } from 'react-router-dom';

function Header() {


  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  }
  
  return (
    <div onClick={navigateToHome} className="header">
    <h1 className="header__title">MY YOGA FLEX</h1>
    <p className="header__text">
    Yoga is the journey of the self, through the self, to the self. -The Bhagavad Gita
    </p>
    </div>
  
  )
}
export default Header;