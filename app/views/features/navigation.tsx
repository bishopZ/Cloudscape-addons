import type { SideNavigationProps } from '@cloudscape-design/components';
import { BreadcrumbGroup, SideNavigation } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { LoadingSpinner } from '/addons/details/loading';
import { capitalize } from '/addons/helpers/string-utils';
import { initArticles, selectArticles } from '/data/articles';

import type { Breadcrumb, ParamBreadcrumb } from '../../addons/helpers/type-helpers';
import { useAppDispatch, useAppSelector } from '../../data/data-store';

type SidenavItem = SideNavigationProps.Section | SideNavigationProps.Link;

const blog: SidenavItem = {
  type: 'link', text: 'Blog', href: '#/'
};

const docs: SidenavItem = {
  type: 'link', text: 'Cloudscape addons', href: '#/docs'
};

const blogNav: SidenavItem[] = [
  { type: 'link', text: 'Search articles', href: '#/blog/search' },
  { type: 'link', text: 'Addons gallery', href: '#/blog/gallery' },
];

const docsNav: SidenavItem[] = [
  { type: 'link', text: 'Getting started', href: '#/docs' },
  { type: 'link', text: 'Core Tenets', href: '#/docs/core-tenets' },
];

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isDocs = location.pathname.indexOf('/docs') !== -1;
  const { initialized, items } = useAppSelector(selectArticles);

  const docArticles = items.filter(item => item.format === 'Documentation');

  const types = docArticles.reduce((memo, doc) => {
    if (memo.indexOf(doc.section) === -1) memo.push(doc.section);
    return memo;
  }, [] as string[]);

  types
    .sort((a, b) => a.localeCompare(b))
    .forEach(type => {
      docsNav.push({
        type: 'section',
        text: capitalize(type),
        items: docArticles
          .filter(item => item.section === type)
          .map(item => ({
            type: 'link',
            text: item.title,
            href: `#/docs/${item.slug}`
          } as SideNavigationProps.Link))
          .sort((a, b) => a.text.localeCompare(b.text))
      });
    });

  useEffect(() => {
    if (!initialized) void dispatch(initArticles);
  }, [initialized]);

  return <><SideNavigation
    header={isDocs ? docs : blog}
    items={isDocs ? docsNav : blogNav}
    activeHref={`#${location.pathname}`}
  />
  {!initialized && <LoadingSpinner />}
  </>;
};

type Props = {
  items: Array<Breadcrumb | ParamBreadcrumb>
}

export const Breadcrumbs = (props: Props) => {
  const { items } = props;
  // const dispatch = useAppDispatch();
  const params = useParams();
  const location = useLocation();
  const formattedBreadcrumbs = items.map(crumb => {
    const formattedCrumb = typeof crumb === 'function'
      ? crumb(params)
      : crumb;
    return formattedCrumb;
  });

  const root = location.pathname.indexOf('/docs') === -1 ? blog : docs;

  return <BreadcrumbGroup
    items={
      items.length > 0
        ? [root, ...formattedBreadcrumbs]
        : []
    }
    onFollow={() => {
      // clear selection
    }}
  />;
};

