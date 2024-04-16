import type { ButtonDropdownProps, TopNavigationProps } from '@cloudscape-design/components';
import {
  Icon, Link
} from '@cloudscape-design/components';
import type { Theme } from '@cloudscape-design/components/theming';
import React from 'react';

import type { GenericObject } from '/addons/helpers/type-helpers';
import type { AppDispatch } from '/data/data-store';
import { changePreference } from '/data/preferences';

const borderRadius = '0.26rem';
const black = 'black';
const darkGrey = 'black'; // = 'rgb(8 8 8)';
const lightGrey = 'rgb(8 14 14)';

const white = 'white';
const offWhite = 'white'; // = 'rgb(247 247 247)';
const darkWhite = 'rgb(241 241 247)';

export const theme: Theme = {
  tokens: {
    fontFamilyBase: 'Avenir, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif',
    borderRadiusAlert: borderRadius,
    borderRadiusBadge: borderRadius,
    borderRadiusButton: borderRadius,
    borderRadiusCalendarDayFocusRing: borderRadius,
    borderRadiusContainer: borderRadius,
    borderRadiusControlCircularFocusRing: borderRadius,
    borderRadiusControlDefaultFocusRing: borderRadius,
    borderRadiusDropdown: borderRadius,
    borderRadiusFlashbar: borderRadius,
    borderRadiusItem: borderRadius,
    borderRadiusInput: borderRadius,
    borderRadiusPopover: borderRadius,
    borderRadiusTabsFocusRing: borderRadius,
    borderRadiusTiles: borderRadius,
    borderRadiusToken: borderRadius,
    borderRadiusTutorialPanelItem: borderRadius,
    colorBackgroundLayoutMain: {
      light: darkWhite,
      dark: lightGrey
    },
    colorTextAccent: { light: '#c96709' },
    colorBackgroundContainerContent: {
      light: white,
      dark: black
    },
    colorBackgroundContainerHeader: {
      light: offWhite ?? white,
      dark: darkGrey ?? black
    },
  },
};

export const topNav: TopNavigationProps.Identity = {
  href: '/',
  title: 'Bishop Z',
  logo: {
    src: 'assets/Jan-2016-bubble-v1_onwhite.gif',
    alt: 'Bishop Z logo'
  }
};

type Utilities = TopNavigationProps.MenuDropdownUtility
type ButtonUtil = TopNavigationProps.ButtonUtility

const brightnessItems = (settings: GenericObject, dispacth: AppDispatch): ButtonUtil[] => [{
  type: 'button',
  text: <Link onFollow={() => {
    dispacth(changePreference({ name: 'brightness', value: 'light' }));
  }}>
    <Icon name={settings.brightness === 'light'
      ? 'check'
      : undefined}
    />
    &nbsp;Light
  </Link> as unknown as string,
}, {
  type: 'button',
  text: <Link onFollow={() => {
    dispacth(changePreference({ name: 'brightness', value: 'dark' }));
  }}>
    <Icon
      name={settings.brightness === 'dark'
        ? 'check'
        : undefined}
    />
  &nbsp;Dark
  </Link> as unknown as string,
}, {
  type: 'button',
  text: <Link onFollow={() => {
    dispacth(changePreference({ name: 'brightness', value: 'auto' }));
  }}>
    <Icon name={settings.brightness === 'auto'
      ? 'check'
      : undefined}
    />
  &nbsp;Auto
  </Link> as unknown as string,
}];

const densityItems = (settings: GenericObject, dispacth: AppDispatch): ButtonUtil[] => [{
  type: 'button',
  text: <Link onFollow={() => {
    dispacth(changePreference({ name: 'density', value: 'compact' }));
  }}>
    <Icon
      name={settings.density === 'compact'
        ? 'check'
        : undefined}
    />
  &nbsp;Compact
  </Link> as unknown as string,
}, {
  type: 'button',
  text: <Link onFollow={() => {
    dispacth(changePreference({ name: 'density', value: 'comfort' }));
  }}>
    <Icon
      name={settings.density === 'comfort'
        ? 'check'
        : undefined}
    />
  &nbsp;Comfort
  </Link> as unknown as string,
}];

const motionItems = (settings: GenericObject, dispacth: AppDispatch): ButtonUtil[] => [{
  type: 'button',
  text: <Link onFollow={() => {
    dispacth(changePreference({ name: 'motion', value: 'on' }));
  }}>
    <Icon
      name={settings.motion === 'on'
        ? 'check'
        : undefined}
    />
   &nbsp;On
  </Link> as unknown as string,
}, {
  type: 'button',
  text: <Link onFollow={() => {
    dispacth(changePreference({ name: 'motion', value: 'off' }));
  }}>
    <Icon
      name={settings.motion === 'off'
        ? 'check'
        : undefined}
    />
  &nbsp;Off
  </Link> as unknown as string,
}];

export const utilities = (
  settings: GenericObject,
  dispacth: AppDispatch
): Utilities[] => [
  {
    type: 'menu-dropdown',
    text: '',
    description: '',
    iconName: 'user-profile',
    iconAlt: 'User preferences',
    items: [{
      id: 'brightness',
      text: 'Brightness',
      items: brightnessItems(settings, dispacth) as unknown as ButtonDropdownProps.Items
    },
    {
      id: 'density',
      text: 'Density',
      items: densityItems(settings, dispacth) as unknown as ButtonDropdownProps.Items
    },
    {
      id: 'motion',
      text: 'Motion',
      items: motionItems(settings, dispacth) as unknown as ButtonDropdownProps.Items
    }]
  }
];
