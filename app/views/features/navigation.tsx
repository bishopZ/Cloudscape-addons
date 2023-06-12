import type { SideNavigationProps } from '@cloudscape-design/components';
import { BreadcrumbGroup, SideNavigation } from '@cloudscape-design/components';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import type { Breadcrumb, ParamBreadcrumb } from '../../addons/helpers/type-helpers';
import { useAppDispatch } from '../../data/data-store';

type SidenavItem = SideNavigationProps.Item;

const blog: SidenavItem = {
  type: 'link', text: 'Blog', href: '#/'
};

const docs: SidenavItem = {
  type: 'link', text: 'Docs', href: '#/docs'
};

const blogNav: SidenavItem[] = [
  { type: 'link', text: 'Articles', href: '#/' },
  { type: 'link', text: 'Gallery', href: '#/preview' },
];

const docsgNav: SidenavItem[] = [
  { type: 'link', text: 'Getting started', href: '#/docs' },
  { type: 'link', text: 'Philosophy', href: '#/docs/philosophy' },
  {
    type: 'section', text: 'Components', items: [
      { type: 'link', text: 'Icon Map', href: '#/docs/icon-map' },
      { type: 'link', text: 'Labeled Button', href: '#/docs/labeled-button' },
    ]
  }
];

export const Navigation = () => {
  const location = useLocation();
  const isDocs = location.pathname === '/docs';
  return <SideNavigation
    header={isDocs ? docs : blog}
    items={isDocs ? docsgNav : blogNav}
    activeHref={`#${location.pathname}`}
  />;
};

type Props = {
  items: Array<Breadcrumb | ParamBreadcrumb>
}

export const Breadcrumbs = (props: Props) => {
  const { items } = props;
  const dispatch = useAppDispatch();
  const params = useParams();
  const location = useLocation();
  const formattedBreadcrumbs = items.map(crumb => {
    const formattedCrumb = typeof crumb === 'function'
      ? crumb(params)
      : crumb;
    return formattedCrumb;
  });

  const root = location.pathname === '/docs' ? docs : blog;

  return <BreadcrumbGroup
    items={
      items.length > 0
        ? [root, ...formattedBreadcrumbs]
        : []
    }
    onFollow={() => {
      // TODO clear selection
    }}
  />;
};

