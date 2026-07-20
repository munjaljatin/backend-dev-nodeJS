// Responsible for configuring the Express Application
const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(express.json());

// All the book routes starts with /books route
app.use("/books", bookRoutes);
module.exports = app;
