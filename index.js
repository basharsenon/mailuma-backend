const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/generate-alias", (req, res) => {
  const base = "aliofficerecruitmentm185lhr";
  const alias = base.replace(/([a-zA-Z])/g, "$1.") + "@gmail.com";
  res.json({ alias });
});

app.listen(3000, () => {
  console.log("✅ Backend live on port 3000");
});
