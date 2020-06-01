import 'core-js/stable';
import 'regenerator-runtime/runtime';

import renderer from './helpers/renderer';
import express from 'express';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
