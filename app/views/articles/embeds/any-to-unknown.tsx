import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';

export const FromAnyToUnknown = () => {
  return <Container
    media={{ content: <iframe
      title="YouTube video of presentation"
      src="https://www.youtube.com/embed/0Kwm4OskzBs"
    /> }}>
      <SpaceBetween size='m'>
        <h2>What</h2>
        <p>This presentation explores differences between Typescript's "any" and "unknown" types.
          We learn when to use which, and the common pitfalls that come with using the
          wrong one. Finally, we investigate how to create and use "is" functions
          to complement type inference.</p>
        <h2>Who</h2>
        <p>Presented by Bishop Zareh
          for <ExternalLink href="https://reactdenver.com/">React Denver</ExternalLink></p>
        <h2>Why</h2>
        <p>Making Typescript best practices more well known.</p>
    </SpaceBetween>
  </Container>;
};
