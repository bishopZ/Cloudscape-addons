import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const OfficePet = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  return <Container media={{
    content: <img src={article?.image} alt="" />
  }}>
    <SpaceBetween size="s">
      <h2>What</h2>
      <p>"Office Pet" is Karsh Hagan's voice bot on Amazon's Alexa platform.&nbsp;</p>
      <p>You can ask it things like "Alexa, ask Office Pet, what's the Karsh Hagan motto?" and "Alexa, ask Office Pet, who is Pocky?"</p>
      <p>To try it out- go to your Alexa Skill's interface and search for Karsh Hagan.</p>
      <p><ExternalLink href="https://www.amazon.ca/The-Karsh-Hagan-Office-Pet/dp/B07CVQ3NGP">See it on Amazon!</ExternalLink></p>
      <h2>Who</h2>
      <p>AWS Lex<br />AWS Lambda</p>
      <h2>Why</h2>
      <p>
        I've always been intrigued by voice interfaces. The idea of interacting with devices using simple, conversational commands seemed like a fascinating blend of innovation and convenience. So, when I heard about Amazon's Alexa Skills Kit (ASK), I couldn't resist the opportunity to dive in and learn how these dialogue trees are constructed.
      </p>
      <p>
        Before diving into development, I familiarized myself with the basics of Alexa skills and their capabilities. I explored various use cases and existing skills on the Alexa Skills Store. This research helped me understand the potential applications for voice interfaces in everyday life and inspired me to create an engaging skill that could bring a bit of fun to users' workdays.
      </p>
      <p>
        The goal was to create a simple yet entertaining experience where users could interact with like a pet, like a playful dog or a mischievous cat. Each interaction would provide a short, positive message to help brighten their day.
      </p>
    </SpaceBetween>
  </Container>;
};
