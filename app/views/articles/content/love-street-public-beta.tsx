import { Box, Button, Container, Header, List, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';

export const LoveStreetPublicBeta = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  return <SpaceBetween size="xs">
    <Container
      media={makeHeaderImage(article?.image ?? '')}
      header={<Header variant="h2">Love Street Public Beta: Building the Anti-Productivity Productivity App</Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
          <strong>Why I spent six months building yet another productivity app—and why this one's different</strong>
        </Box>
        <Box variant="p">
          Today marks a milestone: Love Street's public beta is live on Android!
        </Box>
        <Box variant="p">
          If you're thinking "great, yet another productivity app," I get it. I had the same thought. But hear me out.
        </Box>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">The Problem I Couldn't Ignore</Header>
        <Box variant="p">
          I've always been a productivity app junkie. Todoist, Things, Notion, Asana, Monday, Trello—you name it, I've tried it. Downloaded with hope, abandoned within weeks. Always the same pattern.
        </Box>
        <Box variant="p">
          The breaking point came when I realized I was spending more time organizing my task manager than actually doing tasks.
        </Box>
        <Box variant="p">
          These apps weren't failing because they were bad. They were failing because they were designed for a version of me that doesn't exist—someone already disciplined, organized, and motivated.
        </Box>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">A Different Foundation</Header>
        <Box variant="p">
          Love Street starts from a different premise: <strong>most people need support for the messy reality of how human brains actually work.</strong>
        </Box>
        <Box variant="p">
          That means:
        </Box>
        <List items={[
          { id: 'no-notifications', content: <><strong>No notification harassment.</strong> The app suggests tasks when you're in the right context and mindset, not on a rigid schedule.</> },
          { id: 'no-religion', content: <><strong>No productivity religion.</strong> I'm not here to convert you to GTD, or bullet journaling, or any other system. You build what works for you.</> },
          { id: 'wellness', content: <><strong>Wellness isn't optional.</strong> Mental health practices are integrated at the foundation, not bolted on as an afterthought.</> },
          { id: 'privacy', content: <><strong>Privacy by design.</strong> Local-first architecture. Your data lives on your device. Period.</> },
          { id: 'gamification', content: <><strong>Gamification that respects you.</strong> Unlock AI advisors as you progress. Build your entrepreneurial journey. No meaningless badges.</> }
        ]} renderItem={(item) => item} />
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">The Aesthetic Choice</Header>
        <Box variant="p">
          One thing I knew from the start: this couldn't look like another corporate productivity tool.
        </Box>
        <Box variant="p">
          Love Street blends modern minimalist design with 1960s counterculture spirit. Think Don Draper meets the Grateful Dead. Sophisticated but playful. Structured but free-flowing.
        </Box>
        <Box variant="p">
          It's intentional. Productivity shouldn't feel like homework. It should feel like... well, like taking a walk down Love Street.
        </Box>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">What I Learned from Private Beta</Header>
        <Box variant="p">
          The private beta testing taught me more than the previous months of development.
        </Box>
        <Box variant="p">
          Our testers—entrepreneurs, creatives, ADHD folks, recovering productivity app addicts—shared brutally honest feedback that shaped every decision. I'm grateful for their help.
        </Box>
        <Box variant="p">
          Some highlights:
        </Box>
        <List items={[
          { id: 'onboarding', content: 'Cut the onboarding from 7 screens to 2 (activation rate jumped 40%)' },
          { id: 'gamification', content: 'Redesigned gamification 3 times before it clicked' },
          { id: 'feature-request', content: 'Added the SpaceOut feature after 8 different users requested it' },
        ]} renderItem={(item) => item} />
        <Box variant="p">
          The most common piece of feedback: "This is the first productivity app that doesn't make me feel guilty."
        </Box>
        <Box variant="p">
          That's when I knew we were onto something.
        </Box>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">What's Next</Header>
        <Box variant="p">
          The public beta is step one. iOS is in Apple's review process (fingers crossed). But more importantly, I want to hear from you.
        </Box>
        <Box variant="p">
          What works? What doesn't? What's missing? What should we kill?
        </Box>
        <Box variant="p">
          Love Street isn't finished. It might never be "finished." But it's ready for real-world use, and I'm excited to build the next phase with a broader community.
        </Box>
        <Button onClick={() => {
          window.open('[Google Play link]', '_blank');
        }}>Try Love Street on Google Play</Button>
        <Box variant="p">
          <strong>Share feedback with the Feedback link in the app.</strong>
        </Box>
        <Box variant="p">
          If you've ever felt like productivity apps were designed for someone else, give us a shot. We might just be building it for you.
        </Box>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};

