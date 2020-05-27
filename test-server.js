const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
