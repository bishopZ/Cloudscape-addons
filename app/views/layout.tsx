import type { AppLayoutProps, TopNavigationProps } from '@cloudscape-design/components';
import { AppLayout, Flashbar, TopNavigation } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { externalIconAriaLabel, layoutLabels } from '../addons/helpers/a11y-helpers';
import { topNavStrings } from '../addons/helpers/i18n-helpers';
import type { Breadcrumb, ParamBreadcrumb, ParamString } from '../addons/helpers/type-helpers';
import { clearNotifications, selectNotifications } from '../data/notifications';
import { POST_TITLE } from '../utils/constants';
import { Footer } from './footer';
import { HelpPanelContent } from './help-panel';
import { Breadcrumbs, Navigation } from './navigation';

const topNav = {
  href: '/',
  title: 'Cloudscape addons',
};

type Utilities = TopNavigationProps.ButtonUtility | TopNavigationProps.MenuDropdownUtility

const utilities: Utilities[] = [
  {
    type: 'button',
    text: 'Blog',
    href: '#/',
  },
  {
    type: 'button',
    text: 'Docs',
    href: '#/docs',
  },
  {
    type: 'button',
    text: 'Github',
    href: 'https://github.com/',
    external: true,
    externalIconAriaLabel
  },
  {
    type: 'menu-dropdown',
    text: '',
    description: '',
    iconName: 'user-profile',
    items: [{
      id: 'support',
      text: 'Support',
      href: '',
      external: true,
      externalIconAriaLabel
    }, {
      id: 'feedback',
      text: 'Feedback',
      href: '',
      external: true,
      externalIconAriaLabel
    }]
  }
];

type Props = {
  children: React.ReactNode
  breadcrumbs?: Array<Breadcrumb | ParamBreadcrumb>
  contentType: AppLayoutProps.ContentType
  title: string | ParamString
}

let lastPath = '';

export const Layout = ({ children, breadcrumbs, contentType, title }: Props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const notifications = useSelector(selectNotifications);
  const params = useParams();

  useEffect(() => {
    if (lastPath !== location.pathname) {
      window.scrollTo(0, 0);
      dispatch(clearNotifications);
      lastPath = location.pathname;
    }
  }, [location.pathname]);

  useEffect(() => {
    let formattedTitle = title;
    if (typeof formattedTitle === 'function') formattedTitle = formattedTitle(params);
    const displayTitle = formattedTitle + POST_TITLE;
    if (document.title !== displayTitle) document.title = displayTitle;
  }, [title]);

  return <>
    <TopNavigation
      identity={topNav}
      utilities={utilities}
      i18nStrings={topNavStrings}
    />
    <AppLayout
      contentType={contentType}
      breadcrumbs={<Breadcrumbs items={breadcrumbs ?? []} />}
      notifications={<Flashbar items={notifications} />}
      navigation={<Navigation />}
      ariaLabels={layoutLabels}
      tools={<HelpPanelContent />}
      content={children}
    />
    <Footer />
  </>;
};
