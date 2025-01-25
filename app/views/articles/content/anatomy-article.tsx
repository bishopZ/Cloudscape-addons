import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';

/* eslint-disable max-len */
export const AnatomyArticle = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  return <SpaceBetween size="m">
    <Container
      media={makeHeaderImage(article?.image ?? '')}
      header={<Header variant="h2">What are the Key Parts of a Design System?</Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
          A well-made Design System consists of three parts that work together to provide a cohesive and standardized approach to digital design. Each part is crucial for creating a consistent visual language, ultimately leading to scalability and efficiency.
        </Box>
        <Header variant="h3">Components</Header>
        <Box variant="p">
          A Design System's component are the reusable parts that make up a digital interface. This includes simple elements like buttons, search bars, and text inputs, as well as more complex ones like notifications, breadcrumbs, tabs, tooltips, and radio buttons. Components are built using the fundamental systems defined in the design system, and ensure consistent and coherent customer experiences.
        </Box>
        <Header variant="h3">Documentation</Header>
        <Box variant="p">
          Accurate documentation is critical for any Design System. It provides a single source of truth for designers, developers, and stakeholders to refer to when creating their products. Documentation includes information about each component's usage, behavior, and styling guidelines, as well as design decisions behind the system's fundamental systems. This ensures that everyone working on a project has access to the same knowledge, reducing errors and inconsistencies. It's important to note that the documentation goes beyond the components themselves and expands into common patterns that can be created with the atomic-level components.
        </Box>
        <Header variant="h3">Figma Design Library</Header>
        <Box variant="p">
          The Figma Design Library is an essential tool for managing and maintaining a Design System. It provides a centralized space for designers to create, store, and share components and patterns. A well-maintained Figma Design Library enables teams to collaborate more effectively, ensure consistency across projects, and make global changes with ease.
        </Box>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
