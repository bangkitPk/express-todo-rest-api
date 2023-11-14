const express = require("express");
const app = express();
const cors = require("cors");

const allRoutes = require("./routes");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
});
