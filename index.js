const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const aliasGenerator = require('./aliasGenerator');

app.use(cors());

app.get('/generate-alias', (req, res) => {
    const alias = aliasGenerator.generateAlias();
    res.json({ alias });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
