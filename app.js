const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000);

app.get("/", (req,res) => {
});

app.get("/about", (req,res) => {
});

app.get("about-us", (req,res) => {
});

app.use( (req,res) => {
});

//post --> to sent data from frontend to backend
