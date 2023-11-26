import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './YogaPosesBySkill.scss';

function YogaPosesBySkill() {
    let {title } = useParams();
    const [selectedSkill, setSelectedSkill] = useState([]);
    const navigate = useNavigate();
   
    useEffect(() => {
        console.log(title);
        const fetchSkillsPose = async () => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/yoga-poses/`);
            console.log(response.data.filter(pose => pose.difficulty === title));
            setSelectedSkill(response.data.filter(pose => pose.difficulty === title));
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
        };
        fetchSkillsPose();
      }, [title]);
    
  
    return (

<div className="poses">{selectedSkill?.map((skill)=> {

    return (
        <div className="pose-card" onClick={() => navigate(`/yoga-poses/category/details/${skill.id}`)}>
            <img className="pose-card__image" src={skill.image} alt="" />
            <p>{skill.pose_name}</p>
            
        </div>
    )
})}</div>


    )}
export default YogaPosesBySkill;