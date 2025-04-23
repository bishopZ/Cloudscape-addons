import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';

export const FromAnyToUnknown = () => {
  return <Container
    media={{ content: <iframe
      title="The Journey of Typescript: from any to unknown"
      src="https://www.youtube.com/embed/_JDHxsgIwz4?si=kQHyTVfo264ozcT-&amp;start=1728"
    /> }}>
      <SpaceBetween size='m'>
        <h2>What</h2>
        <p>
        This session is tailored to developers seeking to deepen their understanding of static typing, regardless of whether they're new to Typescript or already using it in their projects. We embark by comparing JavaScript and TypeScript, learning the pitfalls of the "any" type, and explore common ways to avoid it. We'll see how to use "is" functions to enhance type inference, and chart a migration path from unknown to known. By the end, you'll be ready to take your own Typescript journey further!
        </p>
        <h2>Who</h2>
        <p>Presented by Bishop Zareh
          for <ExternalLink href="https://denverscript.com/">Denver Script</ExternalLink>.
          Bishop Zareh has over 20 years of experience crafting novel experiences for the web, mobile, and immersive environments. </p>
        <h2>Why</h2>
        <p>
          1. <strong>Convenience vs. safety</strong>: Using "any" can make code more convenient to write and read, but it also means sacrificing safety and reliability. By not explicitly defining the type of a variable, you are relying on the inference engine to figure it out, which can lead to errors and bugs.
        </p>
        <p>
          2. <strong>Disables type checking</strong>: When you use "any", you are disabling type checking, which means that TypeScript will not check the types of variables or functions at compile-time. This can lead to errors and bugs at runtime.
        </p>
        <p>
          3. <strong>Breaks contracts</strong>: Using "any" can also break contracts between different parts of your code. For example, if you have a function that expects a string but receives an object instead, TypeScript will not catch this error until runtime.
        </p>
        <p>
          4. <strong>Spreads</strong>: The "any" type can also spread to other parts of your code, which means that it can affect more than just the variable or function you originally intended. This can lead to unexpected and hard-to-find errors.
        </p>
        <p>
          5. <strong>"unknown" type is always better</strong>: I suggest that the unknown type is always better than using "any". This is because the unknown type allows you to be explicit about the type of a variable or function, which means that TypeScript can catch errors and bugs at compile-time rather than runtime.
        </p>
        <p>
          6. <strong>Look at functions and "as" keyword</strong>: I discuss the use of the "as" keyword in TypeScript, which can help you avoid using "any" by allowing you to explicitly define the type of a variable or function. For example, instead of using "any", you could write "const myVar = someFunction() as any;".
        </p>
        <p>
          7. <strong>Inference engine</strong>: I emphasize the importance of using the inference engine in TypeScript as much as possible. By doing so, you can avoid being too explicit about everything and let the compiler figure out the types of variables or functions based on their context.
        </p>
        <p>
          8. <strong>Conclusion</strong>: Using "any" is not recommended in TypeScript, especially when working with complex codebases. Instead, you should aim to be explicit about the types of variables and functions as much as possible, while still using the inference engine to simplify your code.
        </p>
    </SpaceBetween>
  </Container>;
};
