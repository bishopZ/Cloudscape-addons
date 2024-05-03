import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const NNGGenUIOutcome = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  return <Container media={{
    content: <img src={article?.image} alt="" />
  }}>
    <SpaceBetween size="s">
      <h2>What</h2>
      <p>
      This article discusses how generative user interface (GenUI) is transforming the field of UX design. With GenUI, designers can create highly personalized interfaces in real-time, tailoring them to the individual needs of each user. This approach requires a shift towards outcome-oriented design, where designers prioritize user goals and define constraints for AI to operate within, rather than designing discrete interface elements.
      </p>
      <p>
      Generative AI systems have established a new interaction paradigm, intent-based outcome specification, which is already shifting how we think about digital design. With the rise of automation and generative UI, designers can focus on user goals and final outcomes while strategically automating aspects of interaction and interface.
      </p>
      <p><ExternalLink href="https://www.biopticcoder.com/the-4th-screen-making-screen-readers-part-of-your-front-end-design/">
        Read the article on Nielsen Norman Group
      </ExternalLink></p>
      <h2>Who</h2>
      <p>
        The Nielsen Norman Group (NN/g) is a user experience powerhouse, founded by two UX giants, Jakob Nielsen and Don Norman.
      </p>
      <h2>Why</h2>
      <p>
        There has been so much hype around AI-assisted design, but this is the first article I've seen that approaches Generative UI from a design perspective. AI can help designers with ideas and stock imagery, but what is the role of a designer when AI is actually creating interfaces and interactions in real-time?
      </p>
      <p>
        Rather than creating the exact visual appearance, designers turn towards outcomes and guard-rails. They create the limits of the interaction, and focus on leading users on a journey towards their goals. Designers can stop focusing on each individual tree and focus on tracing a path through the forest.
      </p>
    </SpaceBetween>
  </Container>;
};
