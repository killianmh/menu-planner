const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

// Middleware:
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve up static assets:
if(process.env.NODE_ENV === "production"){
    app.use(express.static("menu-planner/build"));
}

// API routes:
app.use("/api", apiRoutes);

// React app handles all other requests
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "./menu-planner/build/index.html"));
})

app.listen(PORT, function(){
    console.log(`API server now on port ${PORT}`)
})