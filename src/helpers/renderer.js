import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

export default ({ path }, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
  `;
};
