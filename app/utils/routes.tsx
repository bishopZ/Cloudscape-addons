import type { AppLayoutProps, BreadcrumbGroupProps } from '@cloudscape-design/components';
import type React from 'react';

import { deslugify } from '/addons/helpers/string-utils';
import { ArticleContainer } from '/views/article-container';

import type { ParamBreadcrumb, ParamString } from '../addons/helpers/type-helpers';
import { Blog } from '../views/pages/blog/blog-page';
import { Docs } from '../views/pages/docs';
import { Preview } from '../views/pages/preview';

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
    path: '/docs',
    title: 'Documentation',
    contentType: 'default',
    component: Docs,
    breadcrumbs: []
  }, {
    path: '/preview',
    title: 'Preview',
    contentType: 'default',
    component: Preview,
    breadcrumbs: []
  }, {
    path: '/article/:slug',
    title: params => deslugify(params.slug ?? 'Article'),
    contentType: 'default',
    component: ArticleContainer,
    breadcrumbs: [
      params => ({ text: deslugify(params.slug ?? 'Article'), href: '' })
    ]
  }, {
    path: '/',
    title: 'Blog',
    contentType: 'default',
    component: Blog,
    breadcrumbs: []
  }
];
