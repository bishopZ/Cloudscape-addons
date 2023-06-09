import type { SideNavigationProps } from '@cloudscape-design/components';
import { BreadcrumbGroup } from '@cloudscape-design/components';
import { SideNavigation } from '@cloudscape-design/components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import type { Breadcrumb, ParamBreadcrumb } from '../addons/helpers/type-helpers';

type SidenavItem = SideNavigationProps.Item;

const home: SidenavItem = {
  type: 'link', text: 'Blog', href: '#/'
};

const navItems: SidenavItem[] = [
  { type: 'link', text: 'Articles', href: '#/' },
  { type: 'link', text: 'Components', href: '#/' },
  { type: 'link', text: 'Forms', href: '#/' },
];

export const Navigation = () => {
  const location = useLocation();
  const currentPage = `#/${location.pathname.split('/')[1]}`;

  return <SideNavigation
    header={home}
    items={navItems}
    activeHref={currentPage}
  />;
};

type Props = {
  items: Array<Breadcrumb | ParamBreadcrumb>
}

export const Breadcrumbs = (props: Props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const params = useParams();
  const formattedBreadcrumbs = items.map(crumb => {
    const formattedCrumb = typeof crumb === 'function'
      ? crumb(params)
      : crumb;
    return formattedCrumb;
  });
  return <BreadcrumbGroup
    items={
      items.length > 0
        ? [home, ...formattedBreadcrumbs]
        : []
    }
    onFollow={() => {
      // TODO
    }}
  />;
};

