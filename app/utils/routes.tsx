import type { AppLayoutProps, BreadcrumbGroupProps } from '@cloudscape-design/components';

import { deslugify } from '/addons/helpers/string-utils';
// import { deslugify } from '/addons/helpers/string-utils';
import type { ParamArticle, ParamBreadcrumb, ParamString } from '/addons/helpers/type-helpers';
import { ArticleContainer } from '/views/pages/articles/article-container';
import { BrowseArticles } from '/views/pages/articles/browse-page';
import { Search } from '/views/pages/articles/search-page';
import { Exhibitions } from '/views/pages/exhibitions';
// import { ArticleContainer } from '/views/pages/articles/article-container';
// import { Blog } from '/views/pages/articles/articles-page';
// import { BrowseArticles } from '/views/pages/articles/browse-page';
// import { DocsContainer } from '/views/pages/docs/doc-container';
// import { Docs } from '/views/pages/docs/getting-started';
import { NotFound } from '/views/pages/not-found';

// import { Preview } from '/views/pages/preview';
import { Resume } from '../views/pages/resume/resume';

export type RouteProps = {
  contentType: AppLayoutProps.ContentType
  path: string
  title: string | ParamArticle
  description: string | ParamArticle
  breadcrumbs: Array<BreadcrumbGroupProps.Item | ParamBreadcrumb>
  component: React.FC
}

const defaultDescription = 'Personal website of Bishop Zareh.';

// eslint-disable-next-line max-lines-per-function
export const ROUTES = (): RouteProps[] => [
  {
  //   path: '/docs',
  //   title: 'Documentation',
  //   contentType: 'default',
  //   component: Docs,
  //   breadcrumbs: []
  // }, {
  //   path: '/articles/gallery',
  //   title: 'Cloudscape gallery',
  //   contentType: 'default',
  //   component: Preview,
  //   breadcrumbs: [
  //     { text: 'Gallery', href: '' }
  //   ]
  // },
  // {
  //   path: '/articles/search/:filter',
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
    path: '/articles/:slug',
    title: params => deslugify(params.slug ?? 'Article'),
    description: params => params.description ?? defaultDescription,
    contentType: 'default',
    component: ArticleContainer,
    breadcrumbs: [
      params => ({ text: deslugify(params.slug ?? 'Article'), href: '' })
    ]
  }, {
    path: '/:slug',
    title: 'Not found',
    description: defaultDescription,
    contentType: 'default',
    component: NotFound,
    breadcrumbs: []
  },
  {
    path: '/exhibitions',
    title: 'Show record',
    description: defaultDescription,
    contentType: 'default',
    component: Exhibitions,
    breadcrumbs: []
  },
  {
    path: '/resume',
    title: 'Resume',
    description: defaultDescription,
    contentType: 'default',
    component: Resume,
    breadcrumbs: []
  }, {
    path: '/search',
    title: 'Search articles',
    description: defaultDescription,
    contentType: 'default',
    component: Search,
    breadcrumbs: [
      { text: 'Search', href: '' }
    ]
  }, {
    path: '/',
    title: 'Browse articles',
    description: defaultDescription,
    contentType: 'default',
    component: BrowseArticles,
    breadcrumbs: []
  }
];
