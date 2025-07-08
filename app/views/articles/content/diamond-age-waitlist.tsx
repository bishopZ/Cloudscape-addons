import { Box, Button, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';

export const DiamondAgeWaitlist = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  return <SpaceBetween size="xs">
    <Container
      media={makeHeaderImage(article?.image ?? '')}
      header={<Header variant="h2">Welcome to the Diamond Age, a Private Productivity Game for Slackers</Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        Great news! You've opened the beta waiting list for Diamond Age. We're beyond thrilled to have you join this exciting journey.
        </Box>
        <Button onClick={() => {
          window.open('https://diamond-age.bishopz.com/', '_blank');
        }}>Join the Waitlist</Button>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">What Sets Diamond Age Apart?</Header>
        <Box variant="p">
        Unlike traditional productivity apps that come laden with heavy baggage or boring task lists, Diamond Age is designed specifically for those of us who crave something different:
        </Box>
        <ul>
          <li>
            <strong>Your data remains completely private:</strong> Diamond age doesn't use any external APIs (other than a secure login service), meaning your personal information and secrets stay on your device, encrypted at rest.
          </li>
          <li>
            <strong>The productivy you're missing</strong> is likely not what you were told about how people are "productive", so we're using something new to help out - a little thing called AI Advisors.
          </li>
          <li>
            <strong>Motivation made simple:</strong> You shouldn't have to constantly be thinking about when your task needs completed by; that's like your Mom's version of productivity. Instead, Diamond Age provides the task at just the right time.
          </li>
        </ul>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">The Perfect Productivity Dance: Join the Game!</Header>
        <Box variant="p">
          We aren't talking about setting up tasks with endless notifications here. This isn't what people would have traditionally called productivity, Diamond age is like an old app from the 1960s, its your private, digital, game-like companion.

        </Box>
        <ul>
          <li>
            <strong>A Playful Perspective:</strong> Don't overthink—have fun. Use our Advisors to spice up daily routines.
          </li>
          <li>
            Play with your AI Advisor(s). Have them suggest an idea? Sure! But also feel free to take a snooze and let us handle when it's the best moment for that particular task!
          </li>
        </ul>
        <Box variant="p">
        We'd love nothing more than seeing you enjoy every little productivity hit from Diamond Age.
        </Box>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">Join the Waitlist for the Diamond Age Beta</Header>
        <Box variant="p">
          Our Beta Version will run on web browsers Chrome or Firefox; final apps will work seamlessly across mobile devices.
        </Box>
        <Box variant="p">
          To join the waitlist, visit the Diamond Age website and click the "Join the Waitlist" button.
        </Box>
        <Button onClick={() => {
          window.open('https://diamond-age.bishopz.com/', '_blank');
        }}>Join the Waitlist</Button>
        <Box variant="p">
          Stay tuned—more exciting details will be coming your way!
        </Box>
        <Box variant="p">
          Play on! Keep it simple & snooze with Diamond age. With Diamond Age, your productivity just got more enjoyable and meaningful. We can't wait to embark on this adventure together.
        </Box>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
