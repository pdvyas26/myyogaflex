import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './YogaPoses.scss';
import { Link } from 'react-router-dom';



function YogaPoses() {
  let { categoryId } = useParams();
  console.log(categoryId);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoriesPose = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/yoga-categories/${categoryId}`);
        console.log(response.data);
        setSelectedCategory(response.data[0]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategoriesPose();
  }, [categoryId]);

  const handleCardDetailsClick = (id) => {
    navigate(`/yoga-poses/category/details/${id}`);
  }

  return (

    <div className="poses-wrapper">
      <Link className="button-link" to='/'>
      <div className="button-wrapper">
        <button className="back-button"> Back</button>
      </div>
      </Link>
    <div className="poses">
      {selectedCategory?.poses?.length > 0 && selectedCategory.poses.map((pose) => {
        return (

          <div onClick={() => handleCardDetailsClick (pose.id)} key={pose.id} className="pose-card">
            <img className="pose-card__image" src={pose.url_svg_alt} alt={pose.english_name} />
            <p className="pose-card__name">{pose.english_name}</p>
          </div>
  
        );
      })}
    </div>
    </div>
  );
}

export default YogaPoses;