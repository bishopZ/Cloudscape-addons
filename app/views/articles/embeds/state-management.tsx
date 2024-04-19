import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';

export const StateManagement = () => {
  return <SpaceBetween size="m">
    <Container
      media={{ content: <iframe
        title="YouTube video of presentation"
        src="https://www.youtube.com/embed/Ez4TWswyoZg"
      /> }}>
      <SpaceBetween size="s">
        <p />
        <h2>What</h2>
        <p>We do a side-by-side analysis of the three main state management tools
          in React, useState, useContext and useReducer. We show how the subtle
          differences between them offer strong guidance on what situations each
          one is designed for.</p>
        <p>Beyond best practices, we explore the design patterns that drive
          scalable React applications, and compare them to patterns used
          in other frameworks such as Angular and Vue. Finally, we compare the
          syntax and usage of React's built-in useReducer to Redux reducers,
          and compare older versions of Redux to the newer Redux Toolkit.</p>
        <h2>Who</h2>
        <p>Presented by Bishop Zareh
          for <ExternalLink href="https://reactdenver.com/">React Denver</ExternalLink></p>
        <h2>Why</h2>
        <p>There is a clear difference between beginning and advanced React engineers-
          the advanced engineer looks at each line of code based on the role it plays.
          Understanding the role of different parts of our application enables us to
          reason about the scalability and maintainability of each line.</p>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="s">
        <h2>React state management basics</h2>
        <p>
        Redux handles state management for React applications. It manages the global application state by providing a single source of truth. This means that all components in your application can access and update the same state, making it easier to maintain a consistent and predictable state across the application.
        </p>
        <p>
        In a React application using Redux, you'll typically structure your code in three parts.
        </p>
        <ul>
          <li>
          Components (Views): These are the individual parts of your application, such as buttons, forms, or tables. They're responsible for rendering the UI and handling user input.
          </li>
          <li>
          Actions (Controllers): These are payloads of data that represent an action in your application. For example, a "login" action might contain the user's login credentials. When a component wants to perform an action, it creates an action object and passes it to the Reducer.
          </li>
          <li>
          Reducers (Models): These are functions that take the current state and an action, and return a new state. The reducer is the heart of your application's state management. It's responsible for updating the state based on the actions you pass to it.
          </li>
        </ul>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="s">
        <h2>The benefits of Redux Toolkit</h2>
        <h3>Simplified state management</h3>
        <p>
          With Redux, you don't need to worry about managing state in multiple places across your application. It provides a single source of truth for all the components in your application.
        </p>
        <h3>Easier debugging</h3>
        <p>
          When you have a complex application with many components and state, it can be hard to debug. But with Redux, you can use the reducer to track the state of your application and see exactly how it's changing over time.
        </p>
        <h3>Better scalability</h3>
        <p>
          As your application grows, it can be harder to manage state across multiple components. But with Redux, you can easily add new components and state without having to worry about breaking existing code.
        </p>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="s">
        <h2>
          Examples of Redux in a React application
        </h2>
        <h3>Dispatching actions</h3>
        <p>
          When a component wants to perform an action, it creates an action object and passes it to the reducer. The reducer then updates the state based on the action.
        </p>
        <h3>Setting up a store</h3>
        <p>
          You can create a store by passing a reducer and initial state to the Redux createStore function. Then, you can use the store to access and update the state in your components.
        </p>
        <h3>Using selectors</h3>
        <p>
          Selectors are functions that take the current state and return a new piece of data. They're useful for breaking down complex state into smaller, more manageable pieces. You can use selectors to provide different parts of your application with different pieces of state.
        </p>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
