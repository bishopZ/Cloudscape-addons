import type { AppLayoutProps, BreadcrumbGroupProps } from '@cloudscape-design/components';

import { deslugify } from '/addons/helpers/string-utils';
import type { ParamArticle, ParamBreadcrumb } from '/addons/helpers/type-helpers';
import { DEFAULT_DESCRIPTION } from '/data/constants';
import { ArticleContainer } from '/views/pages/articles/article-container';
import { BrowseArticles } from '/views/pages/articles/browse-page';
import { Search } from '/views/pages/articles/search-page';
import { DocsContainer } from '/views/pages/docs/doc-container';
import { Docs } from '/views/pages/docs/getting-started';
import { NotFound } from '/views/pages/not-found';

import { Preview } from '/views/pages/preview';
// import { Resume } from '../views/pages/resume/resume';

export type RouteProps = {
  contentType: AppLayoutProps.ContentType
  path: string
  title: string | ParamArticle
  description: string | ParamArticle
  breadcrumbs: Array<BreadcrumbGroupProps.Item | ParamBreadcrumb>
  component: React.FC
}

// eslint-disable-next-line max-lines-per-function
export const ROUTES = (): RouteProps[] => [
  {
    path: '/docs',
    title: 'Documentation',
    description: 'A collection of addons for the Cloudscape design system.',
    contentType: 'default',
    component: Docs,
    breadcrumbs: []
  },
  {
    path: '/articles/gallery',
    title: 'Cloudscape gallery',
    description: 'A collection of addons for the Cloudscape design system.',
    contentType: 'default',
    component: Preview,
    breadcrumbs: [
      { text: 'Gallery', href: '' }
    ]
  },
  // {
  //   path: '/articles/search/:filter',
  //   title: 'Articles',
  //   description: 'A collection of addons for the Cloudscape design system.',
  //   contentType: 'default',
  //   component: Blog,
  //   breadcrumbs: [
  //     { text: 'Search', href: '' }
  //   ]
  // },
  {
    path: '/docs/:slug',
    title: params => deslugify(params.slug ?? 'Documentation'),
    description: 'A collection of addons for the Cloudscape design system.',
    contentType: 'default',
    component: DocsContainer,
    breadcrumbs: [
      params => ({ text: deslugify(params.slug ?? 'Documentation'), href: '' })
    ]
  }, {
    path: '/articles/:slug',
    title: params => deslugify(params.slug ?? 'Article'),
    description: params => params.description ?? DEFAULT_DESCRIPTION,
    contentType: 'default',
    component: ArticleContainer,
    breadcrumbs: [
      params => ({ text: deslugify(params.slug ?? 'Article'), href: '' })
    ]
  }, {
    path: '/:slug',
    title: 'Not found',
    description: DEFAULT_DESCRIPTION,
    contentType: 'default',
    component: NotFound,
    breadcrumbs: []
  },
  {
    path: '/search',
    title: 'Search',
    description: 'A collection of addons for the Cloudscape design system.',
    contentType: 'default',
    component: Search,
    breadcrumbs: [
      { text: 'Search', href: '' }
    ]
  }, {
    path: '/',
    title: 'Browse',
    description: 'A collection of addons for the Cloudscape design system.',
    contentType: 'default',
    component: BrowseArticles,
    breadcrumbs: []
  }
];
