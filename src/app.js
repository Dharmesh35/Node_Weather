const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();
const geocode=require("./utils/geocode")

//seeting paths
const publicDirct = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../Templates/views");
const partialPath = path.join(__dirname, "../Templates/partials");

//setting view engine
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

//setup static directory
app.use(express.static(publicDirct));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather app",
    name: "Yohohohohohohooho",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Yohohohohohohooho",
    address: "/img/jag.jpg",
  });
});

app.get("/weather", async(req, res) => {
  if (!req.query.address) {
    return res.send({
      error:"error occured"
    });
  }
  try{
    const data= await geocode(req.query.address)
    res.send(data)
  }
  catch(error){
    res.send({error:"Enter a valid name"})
  }
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Yohohohohohohooho",
  });
});

app.get("/help/*", (req, res) => {
  res.send("Help 404 Not Found");
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "bigadgya",
    errorMsg: "404 Not Found",
  });
});

app.listen(3000, () => {
  console.log("server is live at 3000");
});
