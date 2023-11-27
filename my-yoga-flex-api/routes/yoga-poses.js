const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


// to get a yoga list

// router.get("/", (req, res) => {

//     const posesListJSON = fs.readFileSync("./data/categories.json");
//     const posesListParse= JSON.parse(posesListJSON);
//     const posesList = posesListParse.map((pose)=> {
//         return {
//             category_name: pose.category_description,

//         };
//     });
//     res.send(posesList);
// })

// module.exports = router;


router.get("/", (req, res) => {
    const posesJSON = fs.readFileSync("./data/poses.json");

    const poses = JSON.parse(posesJSON);

    // Extracting poses from each category and flattening them into a single array
    const posesList = poses.map((pose)=> {
        // console.log("category")
        return {
            id: pose.id,
            image:pose.url_svg_alt,
            difficulty: pose.difficulty_level,
            pose_name: pose.english_name,
            
        };
    });
    res.send(posesList);
    
});


module.exports = router;


