import '@cloudscape-design/global-styles/index.css';
import '/styles/prism.css';

import React, { useMemo } from 'react';
import { Provider } from 'react-redux';

import { store } from '/data/data-store';
import { ROUTES } from '/utils/routes';

import { Layout } from './features/layout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

export const Application = () => {
  const routeMemo = useMemo(() => ROUTES, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      routeMemo().map(({
        component: Component, contentType, path, title, breadcrumbs, description
      }, index) =>
        <Route
          key={index}
          path={path}
          element={
            <Layout
              breadcrumbs={breadcrumbs}
              contentType={contentType}
              title={title}
              description={description}>
              <Component />
            </Layout>
          }
        />
      )
    )
  );

  return <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>;
};
