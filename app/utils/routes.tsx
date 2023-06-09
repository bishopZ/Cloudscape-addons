import type { AppLayoutProps, BreadcrumbGroupProps } from '@cloudscape-design/components';
import type React from 'react';

import type { ParamBreadcrumb, ParamString } from '../addons/helpers/type-helpers';
import { Preview } from '../views/preview';

export type RouteProps = {
  contentType: AppLayoutProps.ContentType
  path: string
  title: string | ParamString
  breadcrumbs: Array<BreadcrumbGroupProps.Item | ParamBreadcrumb>
  component: React.FC
}

// eslint-disable-next-line max-lines-per-function
export const ROUTES = (): RouteProps[] => [
  {
    path: '/',
    title: 'Blog',
    contentType: 'default',
    component: Preview,
    breadcrumbs: []
  }
];
