const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/generate-alias", (req, res) => {
  const base = "aliofficerecruitmentm185lhr";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let random = "";
  for (let i = 0; i < 6; i++) {
    random += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const dotAlias = base.split("").join(".") + "." + random + "@gmail.com";

  res.json({ alias: dotAlias });
});

app.listen(3000, () => {
  console.log("✅ Backend live on port 3000");
});
