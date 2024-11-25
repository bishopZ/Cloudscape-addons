import { Container, Link, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const DesignDirectorDance = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug ?? ''));

  return <Container media={{
    content: <img src={article?.image} alt="" />
  }}>
    <SpaceBetween size="s">
      <h2>What</h2>
      <p>
        This article explores the role of design in creating meaningful relationships between users and AI agents. From chatbots to companions, AI agents come in various forms and serve different purposes. Designers must build trust through interface design by creating natural-sounding language models that understand human emotions and respond appropriately, designing interfaces that are aesthetically pleasing and user-friendly, and prioritizing user privacy and transparency. Ethical design practices, including addressing potential biases and ensuring users have control over their data, are crucial for maintaining trust and engagement over time. The future of meaningful relationships with AI agents holds significant advancements in how we live, work, and connect with each other. By focusing on ethical design practices, designers can create AI agents that offer genuine value while avoiding the pitfalls of dystopian scenarios.
      </p>
      <p><ExternalLink href="https://uxdesign.cc/a-design-directors-dance-with-artificial-intelligence-in-2024-0285bda17153">
        Read Part One on UXDesign
      </ExternalLink></p>
      <p><ExternalLink href="https://medium.com/@nathanhardy/charming-the-cyber-serpent-42b8d64141a7">
        Read Part Two on Medium
      </ExternalLink></p>
      <h2>Who</h2>
      <p><strong>
        <ExternalLink href="https://www.linkedin.com/in/nathan-hardy-3139b43/">Nathan Hardy</ExternalLink>
      </strong></p>
      <p>
        At the helm of design strategy, Nathan's leadership in managing cross-functional teams forges user-centered design principles into tangible success. He leverages design systems to provide innovative tools and documentation.
      </p>
      <p>
        In his tenure as Creative Lead at Indeed, he seamlessly integrated AI features into the company's digital experiences. This fusion of art and technology propelled product development and fostered career growth for his design teams.
      </p>
      <h2>Why</h2>
      <p>
        I've read a lot of articles about AI- most of them focus on the technology.
        A rare few focus on design, but those, including <Link href="/articles/genui-outcome-design-nng">NNG's wonder foray into Generative UI</Link>, look at how AI can evolve the practice of Design.
      </p>
      <p>
        Nathan's article was the first I've read that delves into the design of
        AI interfaces and tools. It among the first to ask what designers can do
        to help AI agents become more like sidekicks and buddies.
      </p>
    </SpaceBetween>
  </Container>;
};
