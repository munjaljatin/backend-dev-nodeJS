const express = require("express");
const app = express();

app.use(express.json());

const PORT = 5111;

// app => The Express application object
// get => HTTP GET request method
// / => The root route of the application

// Tasks Array
const tasks = [
  {
    id: 1,
    taskName: "Learn Express Basics",
    completed: true,
  },
  {
    id: 2,
    taskName: "Build a RESTful API",
    completed: false,
  },
];

// Root route
app.get("/", (req, res) => {
  res.send("Hello Backend");
});

// Get all the tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Create a new task and pushes in the tasks array
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    taskName: req.body.taskName,
    completed: req.body.completed,
  };
  tasks.push(newTask);
  res.json({
    message: "New Task Successfully Created",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
