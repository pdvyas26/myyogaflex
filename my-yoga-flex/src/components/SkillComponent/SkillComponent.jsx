import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function SkillComponent() {
  
    const [skills, setSkills] = useState([]);
    const params = useParams();


    useEffect(() => {
        const fetchSkills = async () => {
          try {
            const response = await axios.get(`https://yoga-api-nzy4.onrender.com/v1/poses?level=${params.title}`);
            setSkills(response.data);
            console.log(response.data[0].name);
   
          } catch (error) {
            console.error('Error fetching Skills:', error);
          }
        };
    
        fetchSkills();
      }, []);
    
    
    return (
    <></>
    );
  }
  export default SkillComponent;
  