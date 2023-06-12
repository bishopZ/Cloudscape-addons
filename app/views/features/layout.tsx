import type { AppLayoutProps, TopNavigationProps } from '@cloudscape-design/components';
import { Icon } from '@cloudscape-design/components';
import { Button, Link } from '@cloudscape-design/components';
import { SpaceBetween } from '@cloudscape-design/components';
import { AppLayout, Flashbar, TopNavigation } from '@cloudscape-design/components';
import { applyDensity, applyMode, Density, disableMotion, Mode } from '@cloudscape-design/global-styles';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { externalIconAriaLabel, layoutLabels } from '../../addons/helpers/a11y-helpers';
import { topNavStrings } from '../../addons/helpers/i18n-helpers';
import type { Breadcrumb, ParamBreadcrumb, ParamString } from '../../addons/helpers/type-helpers';
import { useAppDispatch, useAppSelector } from '../../data/data-store';
import { clearNotifications, selectNotifications } from '../../data/notifications';
import { POST_TITLE } from '../../utils/constants';
import { Footer } from './footer';
import { HelpPanelContent } from './help-panel';
import { Breadcrumbs, Navigation } from './navigation';

const topNav: TopNavigationProps.Identity = {
  href: '#/',
  title: 'Cloudscape addons',
  logo: {
    src: 'favicon.png',
    alt: 'Cloudscape addons logo'
  }
};

type Utilities = TopNavigationProps.ButtonUtility | TopNavigationProps.MenuDropdownUtility

const utilities = (path: string): Utilities[] => [
  {
    type: 'menu-dropdown',
    text: '',
    description: '',
    iconName: 'user-profile',
    items: [{
      id: 'brightness',
      text: 'Brightness',
      items: [{
        id: 'light-mode',
        text: <><Icon name={undefined} />&nbsp;Light</> as unknown as string,
        href: '/enable-light'
      }, {
        id: 'dark-mode',
        text: <><Icon name="check" />&nbsp;Dark</> as unknown as string,
        href: '/enable-dark'
      }, {
        id: 'auto-mode',
        text: <><Icon name={undefined} />&nbsp;Auto</> as unknown as string,
        href: '/enable-auto'
      }]
    },
    {
      id: 'density',
      text: 'Density',
      items: [{
        id: 'compact-mode',
        text: <><Icon name="check" />&nbsp;Compact</> as unknown as string,
        href: '/enable-compact'
      }, {
        id: 'confort-mode',
        text: <><Icon name={undefined} />&nbsp;Comfort</> as unknown as string,
        href: '/enable-comfort'
      }]
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
  const dispatch = useAppDispatch();
  const location = useLocation();
  const notifications = useAppSelector(selectNotifications);
  const params = useParams();
  const path = location.pathname;

  useEffect(() => {
    disableMotion(false);
    applyMode(Mode.Dark);
    applyDensity(Density.Compact);
    // applyMode(Mode.Light);
    // applyDensity(Density.Comfortable);
  }, []);

  useEffect(() => {
    if (lastPath !== path) {
      window.scrollTo(0, 0);
      dispatch(clearNotifications);
      lastPath = path;
    }
  }, [path]);

  useEffect(() => {
    let formattedTitle = title;
    if (typeof formattedTitle === 'function') formattedTitle = formattedTitle(params);
    const displayTitle = formattedTitle + POST_TITLE;
    if (document.title !== displayTitle) document.title = displayTitle;
  }, [title]);

  return <>
    <TopNavigation
      identity={topNav}
      utilities={utilities(path)}
      i18nStrings={topNavStrings}
      search={<SpaceBetween size="s" direction="horizontal">
        <Link href="#/">
          <Button variant={path.startsWith('/blog') || path === '/' ? 'normal' : 'link'}>
            Blog
          </Button>
        </Link>
        <Link href="#/docs">
          <Button variant={path.startsWith('/docs') ? 'normal' : 'link'}>
            Docs
          </Button>
        </Link>
        <Link href="https://github.com" target="_blank" rel="noreferer noopener">
          <Button variant="link" iconName="external" iconAlign="right">
            Github
          </Button>
        </Link>
      </SpaceBetween>}
    />
    <AppLayout
      contentType={contentType}
      breadcrumbs={<Breadcrumbs items={breadcrumbs ?? []} />}
      notifications={<Flashbar items={notifications} />}
      navigation={<Navigation />}
      ariaLabels={layoutLabels}
      tools={<HelpPanelContent />}
      footerSelector="footer"
      content={children}
    />
    <Footer />
  </>;
};
// {
//   type: 'button',
//   text: 'Blog',
//   href: '#/',
//   variant: path === '/' ? 'primary-button' : undefined
// },
// {
//   type: 'button',
//   text: 'Docs',
//   href: '#/docs',
//   variant: path === '/docs' ? 'primary-button' : undefined
// },
// {
//   type: 'button',
//   text: 'Github',
//   href: 'https://github.com/',
//   external: true,
//   externalIconAriaLabel
// },
