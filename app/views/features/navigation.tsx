import type { SideNavigationProps } from '@cloudscape-design/components';
import { Box, BreadcrumbGroup, SideNavigation } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { LoadingSpinner } from '/addons/details/loading';
import { externalIconAriaLabel } from '/addons/helpers/a11y-helpers';
import { Spacing } from '/addons/helpers/spacing-constants';
import type { Breadcrumb, ParamBreadcrumb } from '/addons/helpers/type-helpers';
import { initArticles, selectArticles } from '/data/articles';
import { useAppDispatch, useAppSelector } from '/data/data-store';

type SidenavItem = SideNavigationProps.Section
| SideNavigationProps.SectionGroup
| SideNavigationProps.Link
| SideNavigationProps.Divider;

export const capitalize = (value: string) => value.replace(value[0], value[0].toUpperCase());

const articles: SidenavItem = {
  type: 'link', text: 'Browse', href: '/'
};

const docs: SidenavItem = {
  type: 'link', text: 'Cloudscape addons', href: '/docs'
};

const articlesNav: SidenavItem[] = [
  { type: 'link', text: 'Search', href: '/search' },
  { type: 'divider' },

  { type: 'section-group', title: 'About', items: [
    { type: 'link', text: 'Resume', href: '/resume' },
    { type: 'link', text: 'Show record', href: '/exhibitions' },
  ] },
  // { type: 'link', text: 'Addons gallery', href: '/articles/gallery' },
  // { type: 'link', text: 'Understanding design systems', href: '/articles/search/design%20systems' },
  // { type: 'divider' },
  // {
  //   type: 'link',
  //   text: 'Privacy',
  //   external: true,
  //   externalIconAriaLabel,
  //   href: ''
  // },
  // {
  //   type: 'link',
  //   text: 'Feedback',
  //   external: true,
  //   externalIconAriaLabel,
  //   href: ''
  // },
  { type: 'divider' },
];

const docsNav: SidenavItem[] = [
  { type: 'link', text: 'Getting started', href: '/docs' },
  { type: 'link', text: 'Core tenets', href: '/docs/core-tenets' }
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
      docsNav.push({ type: 'divider' });
      docsNav.push({
        type: 'section-group',
        title: capitalize(type),
        items: docArticles
          .filter(item => item.section === type)
          .map(item => ({
            type: 'link',
            text: item.name ?? item.title,
            href: `/docs/${item.slug}`
          } as SideNavigationProps.Link))
          .sort((a, b) => a.text.localeCompare(b.text))
      });
    });

  useEffect(() => {
    if (!initialized) void dispatch(initArticles);
  }, [initialized]);

  return <>
    {!initialized && <LoadingSpinner />}
    <button
      tabIndex={1}
      className="sr-only"
      onClick={() => {
        document.getElementById('link-self:rd:')?.focus();
      }}>
      skip navigation
    </button>
    <SideNavigation
      header={isDocs ? docs : articles}
      items={isDocs ? docsNav : articlesNav}
      activeHref={location.pathname}
    />
    <Box
      className="copyright"
      fontSize="body-s"
      color="text-status-inactive">
      <p>
        This work is marked with
        &nbsp;
        <a
          href="https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer">
          CC0 1.0
        </a>
        <>&nbsp;</>
        <img
          style={{ height: 20, width: 20, verticalAlign: 'middle' }}
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
          alt="" />
        <>&nbsp;</>
        <img
          style={{ height: 20, width: 20, verticalAlign: 'middle' }}
          src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1"
          alt="" />

      </p>
      <p>This site uses essential cookies.</p>
    </Box>
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

  const root = location.pathname.indexOf('/docs') === -1 ? articles : docs;

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

