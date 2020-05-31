import renderer from './helpers/renderer';
import express from 'express';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send(renderer());
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
