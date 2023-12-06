import type { AppLayoutProps, BreadcrumbGroupProps } from '@cloudscape-design/components';

import { deslugify } from '/addons/helpers/string-utils';
// import { deslugify } from '/addons/helpers/string-utils';
import type { ParamBreadcrumb, ParamString } from '/addons/helpers/type-helpers';
import { ArticleContainer } from '/views/pages/blog/article-container';
import { BrowseArticles } from '/views/pages/blog/browse-page';
import { Exhibitions } from '/views/pages/exhibitions';
// import { ArticleContainer } from '/views/pages/blog/article-container';
// import { Blog } from '/views/pages/blog/blog-page';
// import { BrowseArticles } from '/views/pages/blog/browse-page';
// import { DocsContainer } from '/views/pages/docs/doc-container';
// import { Docs } from '/views/pages/docs/getting-started';
import { NotFound } from '/views/pages/not-found';
// import { Preview } from '/views/pages/preview';
import { Resume } from '/views/pages/resume';

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
  //   path: '/docs',
  //   title: 'Documentation',
  //   contentType: 'default',
  //   component: Docs,
  //   breadcrumbs: []
  // }, {
  //   path: '/blog/gallery',
  //   title: 'Cloudscape gallery',
  //   contentType: 'default',
  //   component: Preview,
  //   breadcrumbs: [
  //     { text: 'Gallery', href: '' }
  //   ]
  // },
  // {
  //   path: '/blog/search/:filter',
  //   title: 'Articles',
  //   contentType: 'default',
  //   component: Blog,
  //   breadcrumbs: [
  //     { text: 'Search', href: '' }
  //   ]
  // }, {
  //   path: '/blog/search',
  //   title: 'Articles',
  //   contentType: 'default',
  //   component: Blog,
  //   breadcrumbs: [
  //     { text: 'Search', href: '' }
  //   ]
  // }, {
  //   path: '/docs/:slug',
  //   title: params => deslugify(params.slug ?? 'Documentation'),
  //   contentType: 'default',
  //   component: DocsContainer,
  //   breadcrumbs: [
  //     params => ({ text: deslugify(params.slug ?? 'Documentation'), href: '' })
  //   ]
  // }, {
    path: '/blog/:slug',
    title: params => deslugify(params.slug ?? 'Article'),
    contentType: 'default',
    component: ArticleContainer,
    breadcrumbs: [
      params => ({ text: deslugify(params.slug ?? 'Article'), href: '' })
    ]
  }, {
    path: '/:slug',
    title: 'Not found',
    contentType: 'default',
    component: NotFound,
    breadcrumbs: []
  },
  {
    path: '/exhibitions',
    title: 'Show record',
    contentType: 'default',
    component: Exhibitions,
    breadcrumbs: []
  },
  {
    path: '/resume',
    title: 'Resume',
    contentType: 'default',
    component: Resume,
    breadcrumbs: []
  },
  {
    path: '/blog',
    title: 'Browse articles',
    contentType: 'default',
    component: BrowseArticles,
    breadcrumbs: []
  },
  {
    path: '/',
    title: 'Browse articles',
    contentType: 'default',
    component: BrowseArticles,
    breadcrumbs: []
  }
];
