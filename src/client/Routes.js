import Home from './components/Home';
import Page, { loadData } from './components/Page';

export default [
  {
    loadData,
    path: '/',
    component: Page,
    exact: true,
  },
];
