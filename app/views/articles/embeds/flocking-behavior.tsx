import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

export const FlockingBehavior = () => {
  return <Container media={{
    height: 550,
    position: 'top',
    content: <iframe
      title="flocking"
      src="https://editor.p5js.org/bishopz/embed/5FDO7s8cs"
      width="100%"
      height="480px" />
  }}>
    <SpaceBetween size="xs">
      <h2>What</h2>
      <p>
        P5.js is a creative coding and web visualization platform that offers millions of possibilities. I wanted to use P5 to create a interactive visualization that makes use of Karsh Hagan's iconic triangles.
      </p>
      <h2>How</h2>
      <p>P5.js</p>
      <h2>Why</h2>
      <p>Flocking behavior is a natural phenomenon. From birds and bees, to drones and robots, this phenomenon has also found broad application in computer science.</p>
      <p>The animation will never repeat, yet the way the triangles break off into new direction, then return to the flock, mirrors Karsh Hagan's company culture.</p>
    </SpaceBetween>
  </Container>;
};
