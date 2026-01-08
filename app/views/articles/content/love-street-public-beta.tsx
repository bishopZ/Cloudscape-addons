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
      header={<Header variant="h2">Love Street 1.2: The Productivity App That Doesn't Bother You</Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
          <strong>My journey building an app for people whose brains work differently—and why version 1.2 feels like coming home</strong>
        </Box>
        <Box variant="p">
          It's January 2026, and we just released version 1.2 as the public release of Love Street on Android. This isn't just another update—it's the culmination of everything I've learned about why productivity apps fail people like me.
        </Box>
        <Box variant="p">
          If you're thinking "great, yet another productivity app," I get it. I had the same thought when I started. But this journey has been different.
        </Box>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">The Realization That Changed Everything</Header>
        <Box variant="p">
          I've always been obsessed with productivity but terrible at productivity tools. Todoist, Things, Notion, Asana—you name it, I've tried it. Downloaded with hope, abandoned within weeks. Always the same pattern.
        </Box>
        <Box variant="p">
          The breaking point came when I realized I was spending more time organizing my task manager than actually doing tasks. These apps weren't failing because they were bad. They were failing because they were designed for a version of me that doesn't exist—someone already disciplined, organized, and self-motivated.
        </Box>
        <Box variant="p">
          Planning systems don't fail because you're not trying hard enough. They fail because life changes. Most productivity apps are built on the assumption that users are self-motivated and disciplined, yet in reality, many people struggle with procrastination, overwhelm, and disorganization. Traditional tools become sources of stress rather than support.
        </Box>
        <Box variant="p">
          I needed something different. Something that didn't pretend life follows a perfect schedule. Something that didn't make me feel guilty when I needed a break. Something designed for momentum over perfection.
        </Box>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">Building for Neuro-Diverse Minds</Header>
        <Box variant="p">
          From the beginning, I knew Love Street had to be built with and for people who think differently. Whether you have ADHD, Autism, or just need flexible structure, every feature centers accessibility, adaptability, and lived experience.
        </Box>
        <Box variant="p">
          The fresh daily approach prevents overwhelm and provides clear, manageable next steps without the guilt. Life doesn't follow a perfect schedule, and your productivity tool shouldn't pretend it does. That's why features like Snooze and Space Out became core to the experience—they let you easily adjust when life gets busy, keeping your workflow manageable and stress-free.
        </Box>
        <Box variant="p">
          The most common piece of feedback I've received: "This is the first productivity app that doesn't make me feel guilty." That's when I knew we were onto something.
        </Box>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">The Evolution to 1.2</Header>
        <Box variant="p">
          Version 1.2 represents a major shift in how I think about productivity. It's not just about task management—it's about chronicling your life's journey. Through our unique blend of task management and journaling, you can track your progress, celebrate your wins, and watch your successes add up over time.
        </Box>
        <Box variant="p">
          The new Habits section was born from watching users struggle with mixing recurring tasks and one-time projects. Now your Ideas list stays focused on meaningful long-term goals, while Habits keeps your routines organized and separate. When routines need adjusting, it's easy to reshuffle and start fresh.
        </Box>
        <Box variant="p">
          The Explore section emerged from a simple question: what if productivity could feel playful? The game-like interactions and music player transform your routine into an engaging, multi-sensory experience. It's not about meaningless badges—it's about creating a sense of excitement and curiosity that makes the process feel more enjoyable.
        </Box>
        <Box variant="p">
          Auto-journaling captures your progress automatically, reducing cognitive load and supporting focus. You don't need to remember to log everything—Love Street does it for you, so you can look back and see your success without the effort.
        </Box>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">The Philosophy: It Doesn't Bother You</Header>
        <Box variant="p">
          One of my core principles from day one: Love Street shouldn't harass you with notifications or reminders. Instead, it subtly suggests tasks when you're most motivated to tackle them, respecting your time and energy.
        </Box>
        <Box variant="p">
          The minimalist interface is intentionally simple and intuitive, free from clutter and distractions. Stop bouncing between apps, sticky notes, and mental checklists. Love Street combines task tracking and journaling in one organized space, reducing overwhelm and supporting focus.
        </Box>
        <Box variant="p">
          You don't need a perfect routine, just one you can return to. Not feeling it today? Snooze. Taking a break? Love Street eagerly awaits your return. Tasks piling up? Space Out and start fresh. Feeling super productive? Skip Ahead. The flexibility is built into every interaction.
        </Box>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">The Aesthetic: Luxury Casual</Header>
        <Box variant="p">
          One thing I knew from the start: this couldn't look like another corporate productivity tool. Love Street blends high-end sophistication with relaxed, free-spirited elegance—a distinctive luxury casual vibe that pairs sleek, modern design elements with a playful, laid-back attitude reminiscent of 1960s counterculture.
        </Box>
        <Box variant="p">
          It's intentional. Productivity shouldn't feel like homework. It should feel like taking a walk down Love Street—sophisticated but playful, structured but free-flowing.
        </Box>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">What I've Learned</Header>
        <Box variant="p">
          Building Love Street has taught me that traditional productivity apps fall short because they're renting someone else's vision of how work should happen. They come with philosophical baggage that may be great for others, but doesn't mesh with how many people actually think and work.
        </Box>
        <Box variant="p">
          Love Street isn't about converting you to GTD, or bullet journaling, or any other system. It's about empowering you to build what works for you. The intentionality focus and daily reset prevent the staleness that causes people to abandon other productivity tools. You can always start fresh.
        </Box>
        <Box variant="p">
          For goal-oriented thinkers, Love Street connects daily actions to meaningful outcomes, making work feel more purposeful. For reflective personalities, the built-in progress visualization lets you see your growth and understand your patterns over time. For those who abandon systems, the flexibility and guilt-free approach keeps you coming back.
        </Box>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h3">Looking Forward</Header>
        <Box variant="p">
          Version 1.2 is a public release, not a beta. It's ready for real-world use. But Love Street isn't finished. It might never be "finished." That's part of the philosophy—it adapts to your reality, and it adapts based on what we learn from the community.
        </Box>
        <Box variant="p">
          If you've ever felt like productivity apps were designed for someone else, give us a shot. We might just be building it for you.
        </Box>
        <Button onClick={() => {
          window.open('https://lovestreet.app', '_blank');
        }}>Try Love Street now!</Button>
        <Box variant="p">
          <strong>Love Street: The productivity app that doesn't bother you. Rated E for Everyone.</strong>
        </Box>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};

