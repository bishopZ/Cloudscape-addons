import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';

import { ExternalLink } from '/addons/details/external-link';
import { SourceCodeSection } from '/views/common/source-code-section';

import { SourceHeader } from '../../common/headers/source-header';

export const SpacingConstants = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll();
    }, 0);
  }, []);

  return <SpaceBetween size="m">
    <Container
      header={<Header variant="h2">
      Introducing the spacing constants
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          The spacing constants provide a consistent interface to the Spacing
          property of Cloudscape's
          <ExternalLink href="https://cloudscape.design/components/box/">Box component</ExternalLink>.
          The Box component is the only tool in Cloudscapes arsenal that can add
          padding and margin to content. Since the Box component is so common,
          the Spacing constants warrent being DRYed up into a single constants
          file.
        </Box>
        <Box variant="p">
          The spacing constants are divided by direction, and provide the same
          variants as Cloudscape, XXS, XS, S, M, L, XL, XXL, and N for none.
          Spacing.M is medium size spacing in all four directions. Horizontal
          and Vertical provide spacing in two directions, and the rest are
          provided as Top, Left, Bottom and Right.
        </Box>
        <pre><code className="language-javascript">{`TopXXS: { top: 'xxs' },
BottomXS: { bottom: 'xs' },
LeftS: { left: 's' },
RightM: { right: 'm' },
VerticalL: { vertical: 'l' },
HorizontalXL: { horizontal: 'xl' },
XXL: { horizontal: 'xxl', vertical: 'xxl' },`}</code></pre>
        <Box variant="p">
          Having each of these variations already typed out and in the code, enables
          developers to quickly switch between then without worry or hesitation.
          Maintaining this as a file enables you to add any mismatched variations that
          might prove useful, such as TopXXLBottomS.
        </Box>
      </SpaceBetween>
    </Container>
    <SourceCodeSection source={`import type { BoxProps } from '@cloudscape-design/components';

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

export const Spacing = SpacingConstant as Record<keyof typeof SpacingConstant, BoxProps.Spacing>;`}
    />
  </SpaceBetween>;
};
