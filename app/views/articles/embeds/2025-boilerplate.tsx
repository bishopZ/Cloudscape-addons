import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';

/* eslint-disable-next-line max-lines-per-function */
export const Boilerplate2025 = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug ?? ''));

  return <SpaceBetween size="s">
    <Container media={makeHeaderImage(article?.image ?? '')}>
      <SpaceBetween size="s">
        <h2>A Local-first Frontend Boilerplate for 2025</h2>
        <p>
        Today, I'm thrilled to release a new Boilerplate for 2025.
        </p>
        <ExternalLink href="https://github.com/bishopZ/2025-Boilerplate">
        View it on Github
        </ExternalLink>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="s">
        <h2>Motivation</h2>
        <p>
          I release a boilerplate every few years. Boilerplates go a little bit further than the starter projects that each library gives you, yet they land short of being an actual project. They give you a good starting point, if you want this exact mix of technologies. It also suggests good organizational patterns for a scalable code base.
        </p>
        <p>
          When you create an starter application with create-next-app, vite, or the majority of similar command-line tools, the app you're given is wonderful in many ways, but fails to follow best practices outside of the narrow scope of its base framework. It may come with many best practices for React, but not for CSS, accessibility, SEO, file organization and a host of other concerns that any person wanting to publish a well-made website needs.
        </p>
        <p>
          If those repos are trying to be the simplest form of a specific technology, this repository aims to be the simplest form of a family of technologies. This repository aims to be an enhanced starter library, providing concise examples of all the features and best practices.
        </p>
        <p>
          This boilerplate is right for you if:
          <ul>
            <li>
            You need a flexible Node backend.
            </li>
            <li>
            You need user authentication.
            </li>
            <li>
            You will have a lot of state data that should persist across the application.
            </li>
          </ul>
        </p>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="s">
        <h2>Reasoning</h2>
        <h3>Vite</h3>
        <p>
          I'm thrilled to have finally moved on from the complexities of Webpack. With Vite, I can focus on building modern web applications without worrying about tedious configuration and optimization. As Webpack's popularity waned, Rollup paved the way for Vite's arrival, making it easier than ever to switch to a more streamlined build tool.
        </p>
        <h3>
        Typescript, React
        </h3>
        <p>
        TypeScript (TSX) offers numerous benefits over JavaScript (JSX), including better code completion, reduced runtime errors, and improved maintainability. In my experience, writing TSX files is better and faster than writing JSX file.
        </p>
        <h3>
        React Error Boundary
        </h3>
        <p>
        Error boundaries are essential in creating robust and fault-tolerant web applications. By including an example of a React error boundary in the boilerplate, developers can use it as a reference to add error boundries to other places as the application grows.
        </p>
        <h3>
        vite-express, Node, express
        </h3>
        <p>
        Vite's ability to run client and server-side components simultaneously is a game-changer for web development. With vite-express, we can enjoy the flexibility of choosing between Server-Side Rendering (SSR) or Client-Side Rendering (CSR), giving us more freedom in designing our API.
        </p>
        <h3>
        EJS & SEO
        </h3>
        <p>
        For easy setting of SEO meta tag values, I chose to use EJS templates on Node.js. While this approach might be replaced with SSR implementation if needed, it provides a lightweight solution for basic SEO needs.
        </p>
        <h3>
        Redux Toolkit
        </h3>
        <p>
        After years of Reddit posts proclaiming the death of Redux, I remain a strong advocate for its benefits. By providing a cleaner syntax for state management, Redux simplifies code complexity and makes it easier to manage global state in complex applications.
        </p>
        <h3>
        Crypto JS
        </h3>
        <p>
        To ensure data persistence across browser refreshes and sessions, I've integrated CryptoJS for local storage encryption. This approach allows our application to securely store user data while maintaining seamless usability.
        </p>
        <h3>
        Passport.js
        </h3>
        <p>
        By integrating Passport.js as an example login process, we can demonstrate best practices for authentication without compromising security or scalability. Future improvements will focus on implementing additional features like CSRF protection and login attempts limits, which may require a database solution.
        </p>
        <h3>
        ESlint
        </h3>
        <p>
        I added a very through custom config file for ESLint. It's battle-tested and aims to speed development, ignore problems that aren't real, and maximize the rules that can be automatically fixed by ESLint.
        </p>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="s">
        <h2>
        Choosing a Design System
        </h2>
        <p>
        In today's fast-paced web development landscape, Design Systems have become an essential component of any project. By leveraging a well-crafted design system, developers can ensure consistency, efficiency, and scalability in their application.
        </p>
        <p>
        While there are many excellent design systems available, including one in our boilerplate seemed like overkill. Different applications require distinct design approaches that may not align with the one-size-fits-all solution of an out-of-the-box boilerplate.
        </p>
        <p>
        Administrative interfaces may benefit from Cloudscape's intuitive navigation and layout features. While Marketing sites might be better suited to Github's Preview design system, with its emphasis on eye-catching visuals and responsive design.
        </p>
        <p>
        When selecting a design system consider your project's goals and determine which design systems align best with your requirements. Choose a design system with a strong, active community and an extensive ecosystem of supporting tools, libraries, and documentation. Opt for a system with thorough documentation that covers every aspect, including setup, customization, and best practices. Then select the design system best suits your development team's experience level and skillset.
        </p>
        <p>
          If you're uncertain about which design system to implement, refer to our example branch with-chakra-ui, where Chakra UI is used as a case study.
        </p>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="s">
        <h2>
        What's the difference between a Boilerplate and a Design System?
        </h2>
        <p>
          A boilerplate and a design system serve different purposes but can complement each other.
        </p>
        <p>
          <strong>Boilerplate</strong> is a technical foundation.
        </p>
        <ul>
          <li>
            Project structure
          </li>
          <li>
            Build tools configuration
          </li>
          <li>
            Routing setup
          </li>
          <li>
            State management patterns
          </li>
          <li>
            API integration strategies
          </li>
          <li>
            Developer tooling (linters, testing frameworks)
          </li>
        </ul>
        <p>
          <strong>Design system</strong> is a collection of reusable UI components and design guidelines.
        </p>
        <ul>
          <li>
            Visual component library (buttons, forms, modals)
          </li>
          <li>
            Design tokens (colors, spacing, typography)
          </li>
          <li>
            Interaction patterns
          </li>
          <li>
            Accessibility standards
          </li>
          <li>
            Visual design consistency rules
          </li>
        </ul>
        <p>
          My boilerplate focuses on the technical architecture - it provides the "plumbing" for React, TypeScript, data management and more. It handles how data flows, how pages are built, etc.
        </p>
        <p>
          A design system, like Chakra UI, sits on top of that foundation, providing the actual UI components users interact with. You could swap Chakra for MUI, Tailwind, or a custom solution while keeping the same underlying boilerplate architecture.
        </p>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="s">
        <h2>
        History: A Journey Through Time
        </h2>
        <p>
        As we look back on the evolution of frontend development, it's fascinating to see how technologies have transformed. Let's take a journey through the decades and explore how our industry has grown and adapted.
        </p>
        <h3>
        The Next.js Era (2021)
        </h3>
        <p>
        Our first boilerplate built with Next.js and TypeScript, marked the beginning of this era. We saw the rise of server-side rendering and static site generation, making it easier to build fast and scalable web applications.
        </p>
        <ul>
          <li>
          Next.js: A popular framework for building server-rendered React applications
          </li>
          <li>
          TypeScript, React: The combination of static typing and a powerful UI library
          </li>
          <li>
          Sass: A modern CSS preprocessor for writing efficient stylesheets
          </li>
          <li>
          ESLint: A tool for ensuring code quality and consistency
          </li>
        </ul>
        <h3>
        The Webpack Revolution (2018)
        </h3>
        <p>
        As Next.js rose to fame, we saw the decline of another era: the Gulp/Grunt vs Webpack debate. In a valiant effort to prove that gulp was better than webpack, our 2018 boilerplate made its last stand.
        </p>
        <ul>
          <li>
          Node, express: A powerful combination for building web applications
          </li>
          <li>
          gulp: An old favorite, eventually replaced by more efficient tools like Webpack and Rollup
          </li>
          <li>
          React, Redux: The classic combo for state management and UI composition
          </li>
          <li>
          Bootstrap: A popular CSS framework for styling React components
          </li>
          <li>
          ESLint: Ensuring code quality and consistency
          </li>
        </ul>
        <h3>
        The Backbone Age (2016)
        </h3>
        <p>
        In the mid-2010s, we saw the rise of client-side rendering and single-page applications. Our 2016 boilerplate was built around these principles, using the power of both React and jQuery to create complex UIs.
        </p>
        <ul>
          <li>
          Heroku: A cloud platform for hosting and deploying web applications
          </li>
          <li>
          webpack: The beginning of a new era in frontend tooling
          </li>
          <li>
          Node, express: Building robust web applications with a scalable backend
          </li>
          <li>
          React, Redux: State management and UI composition
          </li>
          <li>
          Backbone: A classic JavaScript library for building complex UIs
          </li>
          <li>
          Bootstrap: Styling React components with CSS flair
          </li>
          <li>
          Sass: Efficient styling with a preprocessor
          </li>
          <li>
          ESLint: Enforcing code quality and consistency
          </li>
        </ul>
        <h3>
        The jQuery Era (2013)
        </h3>
        <p>
        Our first boilerplate, built in 2013, was a humble beginning. We used the mighty power of jQuery, underscore, and ejs to create our first web applications.
        </p>
        <ul>
          <li>
          Node, express: A powerful combination for building web applications
          </li>
          <li>
          jQuery: A legendary JavaScript library for client-side scripting
          </li>
          <li>
          underscore: Helper functions for data manipulation and UI composition
          </li>
          <li>
          ejs: A simple templating engine for rendering dynamic views
          </li>
          <li>
          jade: A templating engine with a more expressive syntax
          </li>
        </ul>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
