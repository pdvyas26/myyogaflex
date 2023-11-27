import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './YogaPoses.scss';



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

  // console.log("selectedCategory", selectedCategory);

  const handleCardDetailsClick = (id) => {
    navigate(`/yoga-poses/category/details/${id}`);
  }

  return (

    <div className="poses-wrapper">
    <div className="button-wrapper">

    <button className="back-button"> Back</button>
    </div>
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




// const YogaPoses = () => {
//   const { filterType, filterValue } = useParams();
//   const [poses, setPoses] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://yoga-api-nzy4.onrender.com/v1/poses?${filterType}=${filterValue}`);
//         setPoses(response.data);
//       } catch (error) {
//         console.error('Error fetching poses:', error);
//       }
//     };

//     fetchData();
//   }, [filterType, filterValue]);

//   return (
//     <div>
//       {poses.map(pose => (
//         <div key={pose.id}>
//           {/* Display pose data */}
//           {pose.name}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YogaPoses;