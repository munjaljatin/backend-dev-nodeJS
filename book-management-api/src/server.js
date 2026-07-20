require("dotenv").config();
const app = require("./app");
require("./config/db");

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Send..");
});

app.listen(PORT, () => {
  console.log(`Book Management Server is running on PORT ${PORT}`);
});
