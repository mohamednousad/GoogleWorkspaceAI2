require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const geminiRoutes = require("./routes/gemini");
const googleRoutes = require("./routes/google");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/gemini", geminiRoutes);
app.use("/api/google", googleRoutes);

app.get("/", (req, res) => {
  res.json({ message: "GoogleWorkspaceAI server is running" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
