import { Container } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';

export const StateManagement = () => {
  return <Container
    media={{ content: <iframe
      title="YouTube video of presentation"
      src="https://www.youtube.com/embed/Ez4TWswyoZg"
    /> }}>
    <p />
    <h2>What</h2>
    <p>We'll do a side-by-side analysis of the three main state management tools
      in React, useState, useContext and useReducer. We'll show how the subtle
      differences between them offer strong guidance on what situations each one is designed for.</p>
    <p>Beyond best practices, we'll explore the design patterns that drive scalable React applications,
      and compare them to patterns used
      in other frameworks such as Angular and Vue. Finally, we'll compare the
      syntax and usage of React's built-in useReducer to Redux reducers,
      and compare older versions of Redux to the newer Redux Toolkit.</p>
    <h2>Who</h2>
    <p>Presented by Bishop Zareh for <ExternalLink href="https://reactdenver.com/">React Denver</ExternalLink></p>
    <h2>Why</h2>
    <p>There is a clear difference between beginning and advanced React engineers-
      the advanced engineer looks at each line of code based on the role it plays.
      Understanding the role of different parts of our application enables us to
      reason about the scalability and maintainability of each line.</p>
  </Container>;
};
