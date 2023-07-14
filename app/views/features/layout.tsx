import type { AppLayoutProps } from '@cloudscape-design/components';
import {
  AppLayout, Box, Flashbar, TopNavigation
} from '@cloudscape-design/components';
import { applyTheme } from '@cloudscape-design/components/theming';
import { applyDensity, applyMode, Density, disableMotion, Mode } from '@cloudscape-design/global-styles';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { LoadingSpinner } from '/addons/details/loading';
import { layoutLabels } from '/addons/helpers/a11y-helpers';
import { topNavStrings } from '/addons/helpers/i18n-helpers';
import { Spacing } from '/addons/helpers/spacing-constants';
import type { Breadcrumb, ParamBreadcrumb, ParamString } from '/addons/helpers/type-helpers';
import { useAppDispatch, useAppSelector } from '/data/data-store';
import { clearNotifications, selectNotifications } from '/data/notifications';
import { changePreference, initPreferences, selectPreferences } from '/data/preferences';
import { POST_TITLE } from '/utils/constants';

import HelpPanelContent from './help-panel';
import { theme, topNav, utilities } from './layout-data';
import { Breadcrumbs, Navigation } from './navigation';

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

  const { initialized, brightness, density, motion, tools } = useAppSelector(selectPreferences);

  useEffect(() => {
    if (!initialized) void dispatch(initPreferences);
  }, [initialized]);

  useEffect(() => {
    applyTheme({ theme });

    if (brightness === 'light') {
      applyMode(Mode.Light);
    }
    if (brightness === 'dark') {
      applyMode(Mode.Dark);
    }
    if (brightness === 'auto') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyMode(Mode.Dark);
      } else {
        applyMode(Mode.Light);
      }
    }

    if (density === 'compact') {
      applyDensity(Density.Compact);
    } else {
      applyDensity(Density.Comfortable);
    }

    if (motion === 'off') {
      disableMotion(true);
    } else {
      disableMotion(false);
    }
  }, [initialized, brightness, density, motion]);

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

  if (!initialized) return <Box margin={Spacing.L} textAlign="center">
    <LoadingSpinner />
  </Box>;

  const utils = utilities({ brightness, density, motion }, dispatch);

  return <>
    <TopNavigation
      identity={topNav}
      utilities={utils}
      i18nStrings={topNavStrings}
      // search={<SpaceBetween size="s" direction="horizontal">
      //   <Link href="#/">
      //     <Button variant={path.startsWith('/blog') || path === '/' ? 'normal' : 'link'}>
      //       Blog
      //     </Button>
      //   </Link>
      //   <Link href="#/docs">
      //     <Button variant={path.startsWith('/docs') ? 'normal' : 'link'}>
      //       Addons
      //     </Button>
      //   </Link>
      // </SpaceBetween>}
    />
    <AppLayout
      contentType={contentType}
      breadcrumbs={<Breadcrumbs items={breadcrumbs ?? []} />}
      notifications={<Flashbar items={notifications} />}
      navigation={<Navigation />}
      ariaLabels={layoutLabels}
      tools={<HelpPanelContent />}
      toolsOpen={tools === 'open'}
      onToolsChange={() => {
        dispatch(changePreference({
          name: 'tools',
          value: tools === 'open' ? 'closed' : 'open'
        }));
      }}
      footerSelector="footer"
      content={<>{children}</>}
    />
  </>;
};
