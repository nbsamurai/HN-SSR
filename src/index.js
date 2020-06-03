// import "core-js/stable";
import 'regenerator-runtime/runtime';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import express from 'express';
import createStore from './helpers/createStore';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(PORT, () => {
  console.log('Listening on port 3000');
});
