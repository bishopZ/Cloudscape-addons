import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { makeHeaderImage } from '/utils/content-map';

/* eslint-disable max-len */
export const DoINeedArticle = () => {
  return <SpaceBetween size="m">
    <Container
      media={makeHeaderImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Figma-dynamic-gradient.png/768px-Figma-dynamic-gradient.png')}
      header={<Header variant="h2">Scale and longevity</Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
          Scale plays a significant role in deciding whether a design system is necessary. If your organization is small, with a single team of skilled individuals capable of handling all design work, a design system may not be a top priority. Yet, if your brand operates in a complex organizational structure with various skill levels and many teams working on different products and channels (such as web, mobile, etc.), a design system becomes essential to ensure consistency and efficiency.
        </Box>
        <Box variant="p">
          If your brand operates in a stable market and has products with a long lifespan, investing in a design system can help limit risks associated with inconsistency, improve stability, and ensure a seamless customer experience. Yet, if your organization experiments with new products or operates in a changing market, the benefits of a design system may be outweighed by the need for flexibility and adaptability.
        </Box>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
