import type { AppLayoutProps, BreadcrumbGroupProps } from '@cloudscape-design/components';
import type React from 'react';

import { deslugify } from '/addons/helpers/string-utils';
import type { ParamBreadcrumb, ParamString } from '/addons/helpers/type-helpers';
import { ArticleContainer } from '/views/pages/blog/article-container';
import { Blog } from '/views/pages/blog/blog-page';
import { DocsContainer } from '/views/pages/docs/doc-container';
import { Docs } from '/views/pages/docs/getting-started';
import { Preview } from '/views/pages/preview';

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
    path: '/docs/:slug',
    title: params => deslugify(params.slug ?? 'Documentation'),
    contentType: 'default',
    component: DocsContainer,
    breadcrumbs: [
      params => ({ text: deslugify(params.slug ?? 'Documentation'), href: '' })
    ]
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
