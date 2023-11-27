const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
    const quotesJSON = fs.readFileSync("./data/quotes.json");
    const quotes = JSON.parse(quotesJSON);

const quotesList = quotes.map((quote)=> {
    return {
        quote: quote.q,
        author: quote.a,
}})
    res.send(quotesList);
})

module.exports = router;

