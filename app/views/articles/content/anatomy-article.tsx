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
      header={<Header variant="h2">What are the parts of a design system?</Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        A design system consists of several key elements that work together to provide a cohesive and standardized approach to digital design.
        </Box>
        <Header variant="h3">Foundations</Header>
        <Box variant="p">
        The foundation layer of a design system encompasses a subset of the organization's brand elements to be used in the design and development of digital interfaces. It includes design principles, iconography guidelines, logos and typefaces, illustration guidelines, sound guidelines, voice and tone, photography guidelines, motion guidelines, layout guidelines, elevation guidelines, color palettes, and more. These guidelines ensure that all digital experiences align with the brand's identity and maintain a consistent visual language.
        </Box>
        <Header variant="h3">Tokens</Header>
        <Box variant="p">
        Tokens are a set of codified design decisions derived from the Foundations layer. They define the values and properties of various design attributes, such as typography, color, spacing, elevation, opacity, radii, volume, borders, timing, and more. By utilizing tokens, design teams can maintain consistent design patterns and make global changes across different platforms and products. Tokens ease scalability, ease of change, and multi-platform support, ensuring a unified and efficient design journey.
        </Box>
        <Header variant="h3">Core Systems</Header>
        <Box variant="p">
        Core systems are a collection of "Building Block" systems that solve common interface challenges. These systems provide reusable components and patterns that can be used across different digital interfaces. Examples of core systems include iconography systems, layout and grid systems, theming systems, color systems, type scale systems, animation systems, and more. Core systems enable designers and developers to solve complex design problems while maintaining consistency and reducing redundant work.
        </Box>
        <Header variant="h3">Components</Header>
        <Box variant="p">
        The component layer of a design system consists of reusable parts that make up a digital interface. These components range from simple elements like buttons, search bars, and text inputs to more complex ones like notifications, breadcrumbs, tabs, tooltips, and radio buttons. Components are built using the fundamental systems defined in the design system, ensuring consistent and coherent customer experiences. By utilizing pre-built components, designers can save time and effort while maintaining design consistency throughout the digital ecosystem.
        </Box>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
