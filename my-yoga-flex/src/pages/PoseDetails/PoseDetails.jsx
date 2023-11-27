import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PoseDetails.scss';
import { Link } from 'react-router-dom';



function PoseDetails() {
  let { poseId } = useParams();
  console.log(poseId);

  const [selectedPose, setSelectedPose] = useState([]);

  useEffect(() => {
    const fetchCategoriesPose = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/yoga-categories/pose/${poseId}`);
        console.log(response.data);
        setSelectedPose(response.data[0]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategoriesPose();
  }, [poseId]);

  console.log("selectedPose", selectedPose);
// const link = "https://www.youtube.com/embed/FCuSE4oS9xc?si=XIb9GZre-VmFx70k"

const link = selectedPose.link;

  return (
    <div className="posesDetails">

      <div className="posesDetails__container">
        <div className="posesDetails__navLinks">
          <Link className="button-wrapper" to='/'>
          <div className="button-wrapper">
            <button className="back-button"> Back</button>
          </div>
          </Link>
          <Link to='/user-dashboard'>
            <h2 className="posesDetails__nav">Log your activity</h2>
          </Link>
        </div>

        <div className="posesDetails__image-container">
            <img className="posesDetails__image" src={selectedPose.image} alt={selectedPose.english_name} />
            <iframe className="posesDetails__video" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="posesDetails__text-container">
          <div className="posesDetails__text-container-lines">
            <p className="posesDetails__text-container-title"><b>Name:</b> </p>
            <p className="posesDetails__text-container-title-value">{selectedPose.pose_name}</p>
          </div>
          <div className="posesDetails__text-container-lines">
            <p className="posesDetails__text-container-title"><b>Sanskrit Name:</b> </p>
            <p className="posesDetails__text-container-title-value">{selectedPose.sanskrit_name}</p>
          </div>
          <div className="posesDetails__text-container-lines">
            <p className="posesDetails__text-container-title"><b>Difficulty:</b> </p>
            <p className="posesDetails__text-container-title-value">{selectedPose.difficulty}</p>
          </div>
          <div className="posesDetails__text-container-lines">
            <p className="posesDetails__text-container-title">Description: </p>
            <p className="posesDetails__text-container-title-value">{selectedPose.pose_description}</p>
          </div>
          <div className="posesDetails__text-container-lines">
            <p className="posesDetails__text-container-title">Benefits: </p>
            <p className="posesDetails__text-container-title-value">{selectedPose.benefits}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoseDetails;
