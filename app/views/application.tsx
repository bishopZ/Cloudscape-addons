import '@cloudscape-design/global-styles/index.css';
import '/styles/prism.css';

import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
// import { HashRouter, Route, Routes } from 'react-router-dom';

import { store } from '/data/data-store';
import { ROUTES } from '/utils/routes';

import { Layout } from './features/layout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { BrowseArticles } from './pages/articles/browse-page';

export const Application = () => {
  const routeMemo = useMemo(() => ROUTES, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      routeMemo().map(({
        component: Component, contentType, path, title, breadcrumbs
      }, index) =>
        <Route
          key={index}
          path={path}
          element={
            <Layout
              breadcrumbs={breadcrumbs}
              contentType={contentType}
              title={title}>
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
