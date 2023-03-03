import express from 'express';
import validate from './validate';

const app: express.Application = express();

const port = 3001;

app.get('/', (req, res) => {
  res.send("Advent of Code solver?");
});

app.get(/^\/.+$/, (req, res) => {
  const parse = req.path.match(/\/(\d+)\/(\d+)/);
  if (parse) {
    if (validate(parse[1], parse[2])) {
      res.status(200).send(`Looking for solution to day ${parse[1]}/${parse[2]}`);
    } else {
      res.status(404).send('Invalid date');
    }
  } else {
    res.status(404).send('Invalid path');
  }
})

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});