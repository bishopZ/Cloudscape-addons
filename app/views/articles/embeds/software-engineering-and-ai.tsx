import { Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';

export const SoftwareEngineeringAI = () => {
  return <SpaceBetween size="m">
    <Container
      media={{ content: <iframe
        src="https://www.youtube.com/embed/bJ-klPNBOXk?si=sEkLlZoROroyu9RN"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        height={'1000px'}
      /> }}>
      <SpaceBetween size="s">
        <p />
        <h3>What</h3>
        <p>A deep dive into the current state of AI-assisted Software Engineering and Generative UI. We'll survey of a wide variety of tools from Low-code to Image Generation Pipelines, look for ways to improve the development process. We'll discuss concepts such as bi-directional workflows, technical artists, and answer the question "Does bad code matter?"</p>
        <h3>Who</h3>
        <p>Presented by Bishop Zareh
          for <ExternalLink href="https://reactdenver.com/">React Denver</ExternalLink></p>
        <h3>Why</h3>
        <p>A presentation of the past few months of research into replacing engineers with artifical intelligence.</p>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
