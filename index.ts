import express from 'express';

const app: express.Application = express();

const port = 3001;

app.get('/', (req, res) => {
  res.send("Advent of Code solver?");
});

app.get(/^\/\d+\/\d+$/, (req, res) => {
  const parse = req.path.match(/\/(\d+)\/(\d+)/);
  if (parse) { // should be unnecessary but eslint insists that parse could be null so...
    res.send(`Looking for solution to day ${parse[1]}/${parse[2]}`)
  } else {
    res.send('Invalid');
  }
})

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});