import type { AppLayoutProps, BreadcrumbGroupProps } from '@cloudscape-design/components';

import { deslugify } from '/addons/helpers/string-utils';
import type { ParamArticle, ParamBreadcrumb } from '/addons/helpers/type-helpers';
import { DEFAULT_DESCRIPTION } from '/data/constants';
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
    path: '/exhibitions',
    title: 'Show record',
    description: 'Discover BishopZ\'s latest exhibitions featuring a list of past clients, awards won, and public speaking engagements. From museum events to luxury brand experiences, Bishop creates unforgettable moments.',
    contentType: 'default',
    component: Exhibitions,
    breadcrumbs: []
  },
  {
    path: '/resume',
    title: 'Resume',
    description: 'Looking for an exceptional software engineer who can bring innovation and creativity to your team? Bishop Zareh, with over 20 years of experience crafting novel experiences for the web, mobile, and immersive environments, is ready to lead your team to success. With a wealth of knowledge and expertise in full stack web development, e-commerce, payments, and agile methodologies, Bishop is the ideal candidate for any engineering position. Check out his professional summary and contact him today to learn more about how he can help take your team to the next level!',
    contentType: 'default',
    component: Resume,
    breadcrumbs: []
  }, {
    path: '/search',
    title: 'Search articles',
    description: 'Unlock the power of AI and design systems with Bishop Z\'s insightsful articles and resources. Discover how to integrate these cutting-edge technologies into your daily work. Search articles on bishopz.com, a platform for exploring the future of software engineering.',
    contentType: 'default',
    component: Search,
    breadcrumbs: [
      { text: 'Search', href: '' }
    ]
  }, {
    path: '/',
    title: 'Browse articles',
    description: 'Unlock the secrets of technology with Bishop Z\'s thought-provoking articles. Explore the intersection of AI and design systems to discover how to integrate these concepts into your own work. With in-depth analysis of the latest trends and innovations, Bishop Z offers a unique perspective that will inspire and empower you.',
    contentType: 'default',
    component: BrowseArticles,
    breadcrumbs: []
  }
];
