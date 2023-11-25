import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Landing.scss';
// Import any other necessary components

function Landing() {
  const [selectedFilter, setSelectedFilter] = useState('skill');
  const [categories, setCategories] = useState([]);
  // const [selectedPoses, setSelectedPoses] = useState([]); // [
    // const [selectedCategory, setSelectedCategory] = useState([]); 
  const navigate = useNavigate();
  
  const skillLevelCards = [
    { id: 1, title: 'Beginner' },
    { id: 2, title: 'Intermediate' },
    { id: 3, title: 'Expert' },
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const response = await axios.get('https://yoga-api-nzy4.onrender.com/v1/categories');
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/yoga-categories`); 
        setCategories(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // const handleCardClick = (filterType, filterValue) => {
  //   if (filterType === 'category') {
  //     const category = categories.find(cat => cat.category_name === filterValue);
  //     // setSelectedPoses(category ? category.poses : []);
  //   } else {
  //     navigate(`/yoga-poses/${filterType}/${filterValue.toLowerCase()}`);
  //   }
  // };

  const handleCardClick = (title) => {
      navigate(`/yoga-poses/skills/${title}`);
  };

  const handleSingleCardClick = (id) => {
      navigate(`/yoga-poses/category/${id}`);
    }
    
  
  return (
    <div className="landingPage">
      <div className="filters">
        <button className="filters__buttons" onClick={() => setSelectedFilter('skill')}>Skill Level</button>
        <button className="filters__buttons" onClick={() => setSelectedFilter('category')}>Categories</button>
      </div>
  
      <div className="main-cards">
        {/* {selectedFilter === 'skill' &&
          skillLevelCards.map(card => (
            <Link to={`/skill-level/${card.title}`} key={card.id}>
              <div className="main-cards__skill" onClick={() => handleCardClick('skill', card.title)}>
                {card.title}
              </div>
            </Link>
          ))
        } */}

          {selectedFilter === 'skill' &&
          skillLevelCards.map(card => (
        
              <div className="main-cards__skill" onClick={() => handleCardClick(card.title)}>
                {card.title}
              </div>
            
          ))
        }
  
        {selectedFilter === 'category' &&
          categories.map(category => (
            // <div key={category.id} className="main-cards__categories" onClick={() => handleCardClick('category', category.category_name)}>
             
            <div className="main-cards__categories" onClick={() => handleSingleCardClick (category.id)}>
              {category.category_name}
           </div>
          ))
        }
      </div>
  
      {/* {selectedCategory.poses.length > 0 && (
        <div className="poses">
          {selectedCategory.poses.map(pose => (
            <div key={pose.id} className="pose-card">
              <img src={pose.url_svg} alt={pose.english_name} />
              <p>{pose.english_name}</p>
            </div>
          ))}
        </div>
      )}*/}
    </div> 
  );
  

}

export default Landing;


// return (
  //   <div className="landingPage">
  //     <div className="filters">
  //       <button className="filters__buttons" onClick={() => setSelectedFilter('skill')}>Skill Level</button>
  //       <button className="filters__buttons" onClick={() => setSelectedFilter('category')}>Categories</button>
  //     </div>

  //     <div className="main-cards">
  //       {selectedFilter === 'skill' &&
  //         skillLevelCards.map(card => (
  //           <Link to={`/skill-level/${card.title}`}>
  //           <div key={card.id} className="main-cards__skill" onClick={() => handleCardClick('skill', card.title)}>
  //             {card.title}
  //           </div>
  //           </Link>
  //         ))
  //       }

  //       {selectedFilter === 'category' &&
  //         categories.map(category => (
  //           <div key={category.id} className="main-cards__categories" onClick={() => handleCardClick('category', category.category_name)}>
  //             {category.category_name}
  //           </div>
  //         ))
  //       }
  //     </div>
  //   </div>
  // );
