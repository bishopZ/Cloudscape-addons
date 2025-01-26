import { Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';

/* eslint-disable max-len */
export const FigmaArticle = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  return <Container
    media={makeHeaderImage(article?.image ?? '')}
    header={<Header variant="h2">
      Collaborative design with Figma: a developer's perspective
    </Header>}>
    <SpaceBetween size="xs">
      <h3>
        The power of collaborative design tools
      </h3>
      <p>
        Collaboration is no longer a luxury but a necessity, especially in today's globalized world where teams are spread across every timezone. Designing in a vacuum not only hampers innovation but also introduces miscommunication and inefficiency.

        By embracing collaborative design tools that facilitate real-time editing, commenting, and version control, both designers and developers can actively participate in the design journey.

        A seamless exchange of ideas enables developers to understand the designer's vision more accurately, and facilitates the identification of potential implementation challenges early on.
      </p>
      <h3>Figma: redefining collaborative design</h3>
      <p>
        Among the multitude of collaborative design tools available today, Figma stands out as a powerful and effective solution, offering unique features that cater to both designers and developers.
      </p>
      <h4>
        Real-time design sessions: a new era of collaboration
      </h4>
      <p>
        Figma's real-time collaboration capabilities allow multiple team members to work on a project concurrently, making instant changes that are visible to everyone involved. This real-time interaction promotes seamless collaboration, eliminates version control issues, and reduces the need for frequent file sharing and updates. Designers can present their ideas in progress, gather feedback, and iterate designs quickly, while developers can better understand and prepare for the vision.
      </p>
      <h4>Designing together: shared components and libraries</h4>
      <p>
        Figma's component library feature allows designers to create and share reusable design elements across projects and team members. This encourages consistency, efficiency, and scalability as updates to shared components automatically propagate throughout the project. Designers and developers can collaborate on building and refining these components, ensuring a unified and coherent design system that is accessible to all team members.
      </p>
      <h4>The language of design: effective communication with commenting and feedback</h4>
      <p>
        Figma's commenting and feedback features enable designers and developers to provide contextual feedback directly on specific design elements. This streamlines communication, reduces the need for separate messaging or email threads, and ensures that feedback is captured within the design itself. The result is a more iterative and collaborative design process where everyone contributes their expertise, fostering a sense of ownership and commitment to the project's success.
      </p>
    </SpaceBetween>
  </Container>;
};
