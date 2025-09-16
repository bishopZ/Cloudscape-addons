import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { makeHeaderImage } from '/utils/content-map';
import { selectArticle } from '/data/articles';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '/data/data-store';

/* eslint-disable max-len */
export const LifecycleArticle = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));
  ``
  return <SpaceBetween size="m">
    <Container
      media={makeHeaderImage(article?.image ?? '')}
      header={<Header variant="h2">What is the lifecycle of a design system?</Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
          Design systems, the superheroes of digital interfaces, don't mature overnight. Like a fine wine or a hilarious joke, they need time to reach their full potential. So, let's embark on a journey through the stages of a design system's maturity model!
        </Box>
      </SpaceBetween>
    </Container>
    <Container header={<Header variant="h2">Stage 1: Building version one</Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        Creating a design system is like crafting the perfect dish. You need to find the right ingredients, strike a balance, and present it in a way that makes taste buds tingle. In this stage, focus on discovering the right combination of principals, tokens and core systems. Get the basics right before you dazzle the world.
        </Box>
        <Header variant="h2">Stage 2: Growing adoption by making it easy and obvious</Header>
        <Box variant="p">
        Your design system is like a charming celebrity; everyone wants to be associated with it. So, make it easy and obvious for everyone to hop on board. Provide clear instructions, showcase its benefits, and make it an irresistible choice.
        </Box>
        <Header variant="h2">Stage 3: Surviving the teenage years by building a strong foundation</Header>
        <Box variant="p">
        Ah, the teenage years—a time of self-discovery and growth spurts. Your design system needs to find itself during this stage. Build a strong foundation by assembling a dedicated team and nurturing the right mindset. Prove that your system delivers on its promise and keep improving it, like teenagers mature over time.
        </Box>
        <Header variant="h2">Stage 4: Evolving a healthy platform - becoming a wise leader</Header>
        <Box variant="p">
        Congratulations! Your design system has now matured into a wise leader within your organization. It's like the guru of digital interfaces, guiding others on the path to greatness. But remember, even gurus need to keep evolving. Adapt and improve your system to stay ahead of the game.
        </Box>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
