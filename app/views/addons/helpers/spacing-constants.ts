import type { BoxProps } from '@cloudscape-design/components';

const SpacingConstant = {
  TopN: { top: 'n' },
  TopXXS: { top: 'xxs' },
  TopXS: { top: 'xs' },
  TopS: { top: 's' },
  TopM: { top: 'm' },
  TopL: { top: 'l' },
  TopXL: { top: 'xl' },
  TopXXL: { top: 'xxl' },

  BottomN: { bottom: 'n' },
  BottomXXS: { bottom: 'xxs' },
  BottomXS: { bottom: 'xs' },
  BottomS: { bottom: 's' },
  BottomM: { bottom: 'm' },
  BottomL: { bottom: 'l' },
  BottomXL: { bottom: 'xl' },
  BottomXXL: { bottom: 'xxl' },

  LeftN: { left: 'n' },
  LeftXXS: { left: 'xss' },
  LeftXS: { left: 'xs' },
  LeftS: { left: 's' },
  LeftM: { left: 'm' },
  LeftL: { left: 'l' },
  LeftXL: { left: 'xl' },
  LeftXXL: { left: 'xxl' },

  RightN: { right: 'n' },
  RightXXS: { right: 'xxs' },
  RightXS: { right: 'xs' },
  RightS: { right: 's' },
  RightM: { right: 'm' },
  RightL: { right: 'l' },
  RightXL: { right: 'xl' },
  RightXXL: { right: 'xxl' },

  VerticalN: { vertical: 'n' },
  VerticalXXS: { vertical: 'xxs' },
  VerticalXS: { vertical: 'xs' },
  VerticalS: { vertical: 's' },
  VerticalM: { vertical: 'm' },
  VerticalL: { vertical: 'l' },
  VerticalXL: { vertical: 'xl' },
  VerticalXXL: { vertical: 'xxl' },

  HorizontalN: { horizontal: 'n' },
  HorizontalXXS: { horizontal: 'xxs' },
  HorizontalXS: { horizontal: 'xs' },
  HorizontalS: { horizontal: 's' },
  HorizontalM: { horizontal: 'm' },
  HorizontalL: { horizontal: 'l' },
  HorizontalXL: { horizontal: 'xl' },
  HorizontalXXL: { horizontal: 'xxl' },

  N: { horizontal: 'n', vertical: 'n' },
  XXS: { horizontal: 'xxs', vertical: 'xxs' },
  XS: { horizontal: 'xs', vertical: 'xs' },
  S: { horizontal: 's', vertical: 's' },
  M: { horizontal: 'm', vertical: 'm' },
  L: { horizontal: 'l', vertical: 'l' },
  XL: { horizontal: 'xl', vertical: 'xl' },
  XXL: { horizontal: 'xxl', vertical: 'xxl' },

};

export const Spacing = SpacingConstant as Record<keyof typeof SpacingConstant, BoxProps.Spacing>;
