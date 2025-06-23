import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';

/* eslint-disable max-len */
export const DocumentingArticle = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug);

  return <SpaceBetween size="m">
    <Container
      media={article && makeHeaderImage(article.image)}
      header={<Header variant="h2">How should I document my design system?</Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        Design systems provide a centralized and scalable approach to creating and maintaining cohesive customer experiences. Yet, for others to leverage the potential of your design system, it’s crucial to establish clear documentation that communicates the assets, processes, and guidelines to the teams using it. In this article, we explore the key aspects of design system documentation and its role in fostering consistency, efficiency, and collaboration.
        </Box>
      </SpaceBetween>
    </Container>
    <Container header={<Header variant="h2">
      Assets: tangible elements for layered design systems
    </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        A design system is composed of various layers, each serving a specific purpose. When documenting a design system, you'll need to to break down each layer into tangible assets. In the foundations layer, assets may include logo files that represent the brand identity. The tokens layer might involve CSS primitive color tokens that define the color palette. For core systems, documentation could encompass the Sass layout system (mixin) that facilitates consistent layout across interfaces. In the components layer, assets may comprise Figma components like buttons, ensuring consistent design and functionality throughout the product.
        </Box>
      </SpaceBetween>
    </Container>
    <Container header={<Header variant="h2">
    Processes: guiding human behaviors and actions
    </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        For others to use your design system, it’s important to define and document the processes that govern its development, maintenance, and usage. This journey will help guide the behaviors and actions of the teams that use it.
        </Box>
        <Box variant="p">
        For example, governance and testing processes outline guidelines for evaluating and approving changes to the system. Contribution processes define how teams can contribute to the system's evolution. Synchronization processes ensure consistency across teams and projects. Deprecation processes guide the removal of outdated elements. Release and versioning processes enable controlled updates. Extension and variation processes allow customization while maintaining core consistency. Onboarding processes help the adoption of the design system by new team members.
        </Box>
      </SpaceBetween>
    </Container>
    <Container header={<Header variant="h2">
    Documentation: explaining the why, what, and how
    </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        The documentation is the backbone of a design system, explaining the rationale, purpose, and usage of its various components. It provides answers to questions like why something is designed a certain way, when and how to use specific elements, and who owns them.
        </Box>
        <ul>
          <li>
          Beliefs: Articulating the design principles and philosophies behind the system.
          </li>
          <li>
          Rationales: Explaining the reasoning and benefits of design decisions.
          </li>
          <li>
          Explanations: Describing the purpose and functionality of each component.
          </li>
          <li>
          Usage and Migration: Guiding customers to incorporate and transition to different elements.
          </li>
          <li>
          Guidelines: Outlining the recommended scenarios and limitations for using specific components.
          </li>
          <li>
          Ownership: Identifying the responsible individuals or teams for each element.
          </li>
          <li>
          Location: Providing information on where to find the assets and relevant resources.
          </li>
          <li>
          Examples: Showcasing real-world instances of the system in use, promoting consistency and inspiration.
          </li>
        </ul>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
