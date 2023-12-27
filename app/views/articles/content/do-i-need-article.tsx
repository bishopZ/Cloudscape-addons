import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';

/* eslint-disable max-len */
export const DoINeedArticle = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug);

  return <SpaceBetween size="m">
    <Container media={article && makeHeaderImage(article.image)}>
      <SpaceBetween size="xs">
        <Header variant="h2">Scale</Header>
        <Box variant="p">
          Scale plays a significant role in deciding whether a design system is necessary.
          If your organization is small, with a single team of skilled individuals capable
          of handling all design work, a design system may not be a top priority. Yet, if
          your brand operates in a complex organizational structure with various skill levels
          and many teams working on different products and channels (such as web, mobile, etc.),
          a design system becomes essential to ensure consistency and efficiency.
        </Box>
        <Header variant="h2">Longevity</Header>
        <Box variant="p">
          If your brand operates in a stable market and has products with a long lifespan,
          investing in a design system can help limit risks associated with inconsistency,
          improve stability, and ensure a seamless customer experience. Yet, if your organization
          experiments with new products or operates in a changing market, the benefits of a
          design system may be outweighed by the need for flexibility and adaptability.
        </Box>
        <Box variant="p" fontSize="body-s" color="text-body-secondary">
          Photo by John Fowler from Placitas, NM, USA, CC BY 2.0, Wikimedia Commons
        </Box>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
