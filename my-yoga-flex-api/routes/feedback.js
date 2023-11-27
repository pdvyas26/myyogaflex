// const express = require('express');
// const fs = require('fs');
// const router = express.Router();

// router.post('/', (req, res) => {
//     const feedbackData = req.body;
//     // Save the data to a JSON file
//     fs.writeFile('./data/feedback.json', JSON.stringify(feedbackData, null, 2), (err) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send('An error occurred while saving feedback');
//         }
//         res.send('Feedback received successfully');
//     });
// });

// module.exports = router;

const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post('/', (req, res) => {
    const newFeedback = req.body;
    fs.readFile('./data/feedback.json', 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            console.error(err);
            return res.status(500).send('An error occurred while reading existing feedback');
        }

        // Parse existing data or initialize an empty array if file doesn't exist
        const existingFeedback = data ? JSON.parse(data) : [];

        // Append new feedback
        existingFeedback.push(newFeedback);

        // Write the updated array back to the file
        fs.writeFile('./data/feedback.json', JSON.stringify(existingFeedback, null, 2), (writeErr) => {
            if (writeErr) {
                console.error(writeErr);
                return res.status(500).send('An error occurred while saving feedback');
            }
            res.send('Feedback received successfully');
        });
    });
});

module.exports = router;
