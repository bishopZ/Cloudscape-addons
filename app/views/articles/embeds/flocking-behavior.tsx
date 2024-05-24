import { Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

export const FlockingBehavior = () => {
  return <Container
    header={<Header variant="h2">
      Exploring flocking behavior with P5.js: a visual journey into emergent patterns with Karsh Hagen's iconic brand mark
    </Header>}
    media={{
      height: 550,
      position: 'top',
      content: <iframe
        title="flocking"
        src="https://editor.p5js.org/bishopz/embed/5FDO7s8cs"
        width="100%"
        height="480px" />
    }}>
    <SpaceBetween size="xs">
      <h3>What</h3>
      <p>
        Processing is an open-source graphics library and integrated development environment (IDE), created for the electronic arts, new media art, and visual design communities. Its primary objective is to provide a platform where non-programmers can grasp the essential concepts of computer programming through a visual context.

        Processing was first introduced in 1997 by artists Casey and Ben Reas, aiming to make coding more accessible for artists and designers who might not have a programming background. P5.js was later released in 2014 as an open-source JavaScript library, allowing artists and developers to write Processing-like code directly within the browser.

        P5.js has gained significant popularity with over 1.5 million users, and has the official backing of the Processing Foundation.
      </p>
      <p>
        I used P5.js for creating an interactive visualization that highlights Karsh Hagen's iconic triangular brand mark. This project served as a proof-of-concept exploration into the world of flocking behavior - an emergent phenomenon observed in various natural systems, such as birds and bees, and widely adopted in computer science.
      </p>
      <h3>How</h3>
      <p>
        To bring Karsh Hagen's triangles to life through flocking behavior, I began by setting up the canvas using P5.js. I then implemented a simple triangle drawing function and established the foundation for my simulation by defining the initial position and velocity for each triangle.
      </p>
      <p>
        Next, I incorporated the rules that would govern the interactions between individual triangles, emulating the alignment, cohesion, and separation behaviors observed in natural flocks. These rules dictated that every triangle would attempt to maintain a certain distance from its neighbors while aligning with their average heading direction.
      </p>
      <h3>Why</h3>
      <p>
        Flocking behavior is a fascinating natural phenomenon that arises when individual entities behave independently while adhering to simple rules. This results in collective patterns and behaviors that appear complex and cohesive at the group level. From the synchronized movements of birds in flocks to the coordinated actions of schools of fish, this emergent behavior has captivated researchers for decades and found broad applications in computer science.
      </p>
      <p>
        As the simulation came togeather, I observed how simple rules led to the emergence of complex patterns as triangles broke off from the flock and formed new subgroups only to return later. This dynamic dance between individual behavior and collective patterns echoed the adaptive culture at Karsh Hagen, where individuals are empowered to think creatively while maintaining a strong connection to the team's overall purpose.
      </p>
    </SpaceBetween>
  </Container>;
};
