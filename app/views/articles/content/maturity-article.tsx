import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

/* eslint-disable max-len */
export const MaturityArticle = () => {
  return <Container header={
    <Header variant="h2">How can I mature my design system?</Header>
  }>
    <SpaceBetween size="xs">
      <Box variant="p">
        Maturity comes through a cycle of three steps: educate, engage, and evolve.
      </Box>
      <Header variant="h3">Step 1: Educate - spreading the knowledge</Header>
      <Box variant="p">
        Education is the key to unlocking the full potential of your design system. Explain its purpose, benefits, and approach. Cast the vision, enlighten your colleagues, and create a shared understanding.
      </Box>
      <Header variant="h3">Step 2: Engage - embrace the power of collaboration</Header>
      <Box variant="p">
        Engage in a two-way conversation with your users. Learn from them, listen to their needs, and give them a voice in the growth of your system. Recruit adopters and contributors who will be the unsung heroes in shaping its future.
      </Box>
      <Header variant="h3">Step 3: Evolve - continuous improvement</Header>
      <Box variant="p">
        Keep evolving your design system like a mad scientist perfecting their creation. Iterate, test, and improve the assets, documentation, and processes. Embrace change and stay on the cutting edge of design.
      </Box>
    </SpaceBetween>
  </Container>;
};
