
const express = require("express");
const app = express ();
const yogaRoute = require("./routes/yoga-categories");
const posesRoute = require("./routes/yoga-poses");
const quotesRoute = require("./routes/quotes");
const feedbackRoute = require("./routes/feedback");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    "access-control-allow-credentials":true,
    optionSuccessStatus:200
}

app.use(express.json()); 
app.use(cors(corsOptions));
app.use("/yoga-categories", yogaRoute);
app.use("/yoga-poses", posesRoute);
app.use("/quotes", quotesRoute);
app.use("/feedback", feedbackRoute);



app.get("/", (req, res) => {
    res.send("Welcome to the server for my-yoga-flex")
})

app.listen(PORT, ()=> {
    console.log(`express server is running at ${PORT}`);
})