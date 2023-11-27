const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


// to get a yoga list on landing page

router.get("/", (req, res) => {

    const categoriesJSON = fs.readFileSync("./data/categories.json");
    const categories = JSON.parse(categoriesJSON);
    const categoryList = categories.map((category)=> {
     
        return {
            id: category.id,
            category_name: category.category_name,
            category_description: category.category_description,
            poses: category.poses
        };
    });
    res.send(categoryList);
})

// to get a yoga list by categories on Yoga-poses-by-category page

router.get("/:categoryId", (req, res) => {

    const { categoryId } = req.params;
    
const categoriesJSON = fs.readFileSync("./data/categories.json");
    const categories = JSON.parse(categoriesJSON);
    const categoryList = categories.map((category)=> {

        return {
            id: category.id,
            category_name: category.category_name,
            category_description: category.category_description,
            poses: category.poses
        };
    })

    const selectedCategoryList = categoryList.filter((category) => category.id === parseInt(categoryId));

    res.send(selectedCategoryList);
})


// to get a single pose by poses on PoseDetails page

router.get("/pose/:poseId", (req, res) => {


const { poseId } = req.params;
    const posesJSON = fs.readFileSync("./data/poses.json");
    const poses = JSON.parse(posesJSON);
    const posesList = poses.map((pose)=> {

        return {
            id: pose.id,
            pose_name: pose.english_name,
            sanskrit_name: pose.sanskrit_name,
            difficulty: pose.difficulty_level,
            image: pose.url_svg_alt,
            benefits: pose.pose_benefits,
            pose_description: pose.pose_description,
            poses: pose.poses,
            link: pose.link
        };
    });
    const selectedPose = posesList.filter((pose) => pose.id === parseInt(poseId));
    res.send(selectedPose);
})

module.exports = router;