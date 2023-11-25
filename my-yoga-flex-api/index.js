
const express = require("express");
const app = express ();
const yogaRoutes = require("./routes/yoga-categories");
const posesRoutes = require("./routes/yoga-poses");
const quotesRoute = require("./routes/quotes");
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
// app.use(express.static("public/images"));
app.use(cors(corsOptions));

// app.use(cors()); 
app.use("/yoga-categories", yogaRoutes);
app.use("/yoga-poses", posesRoutes);
app.use("/quotes", quotesRoute);
// app.use("/yoga-pose-details", detailsRoute);


app.get("/", (req, res) => {
    res.send("Welcome to the server for my-yoga-flex")
})

app.listen(PORT, ()=> {
    console.log(`express server is running at ${PORT}`);
})