const fs = require('fs');
const express = require('express');

const app = express();

app.get('/vocab-list', (req, res) => {
  const filename = req.query.filename;
  try {
    const file = fs.readFileSync(`lists/${filename}.json`, { encoding: 'utf8' });
    return res.json(JSON.parse(file));
  } catch(error) {
    return res.send(`The vocab list ${filename} doesn't exist`);
  }
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});