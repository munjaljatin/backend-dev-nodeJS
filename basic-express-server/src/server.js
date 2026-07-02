const express = require("express");

// when we call the express function then a new express server onject is created
const app = express();
const PORT = 3000;

// defining the express middlewares
// middleware \1
const middleware1 = (req, res, next) => {
  console.log("Inside the MiddleWare 1");
  next();
};

// middleware 2
const middleware2 = (req, res, next) => {
  console.log("Inside the MiddleWare 2");
  next();
};

app.get("/", (req, res) => {
  res.send("Hi server is running");
});
app.get("/jatin", (req, res) => {
  console.log(req, res);
});

app.get("/api", middleware1, middleware2, (req, res) => {
  // everytime, when the user calls the /api then this callback will be called
  console.log("You are /api route");
  return res.json({ message: "Success" }); // here the object we are passing nothing but a JS object itself
});
app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
