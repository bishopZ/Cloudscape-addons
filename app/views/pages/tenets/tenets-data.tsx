/* eslint-disable max-len */
import { Box } from '@cloudscape-design/components';
import React from 'react';

export const tenets = [
  {
    title: 'Good developer experience',
    description: 'Happy coders code more.',
    content: <>
      <Box variant="p">
        When developers feel supported and empowered, they are more likely to invest their time and effort into crafting elegant and efficient code solutions.
      </Box>
      <Box variant="p">
        A good developer experience minimizes frustration by providing intuitive and efficient tools, reducing time wasted on repetitive tasks and technical obstacles, and enabling developers to focus on creative problem-solving and innovation.
      </Box>
      <Box variant="p">
        Comprehensive documentation and clear communication channels contribute to a smooth workflow, minimizing misunderstandings and promoting collaboration among team members.
      </Box>
      <Box variant="p">
        A supportive community and a culture that values knowledge sharing and mentorship create an environment where developers can learn from and inspire each other, leading to continuous growth and skill development.
      </Box>
      <Box variant="p">
        A positive developer experience enhances job satisfaction and reduces turnover rates, ensuring continuity and stability in the development team, which in turn leads to better long-term project outcomes.
      </Box>
    </>
  },
  {
    title: 'Create a vocabulary',
    description: 'Developers shouldn\'t have to guess how this particular thing is implemented.',
    content: <>
      <Box variant="p">
        The point of a design systen is to provide all the pieces.
        The names of those pieces form the language that experiences are described in.
      </Box>
      <Box variant="p">
        When developers are presented with a consistent interface, they are spared from the guesswork associated with understanding how a particular feature or functionality is implemented. This consistency breeds familiarity and enables developers to focus their energy on problem-solving and creative implementation rather than deciphering varying interfaces.
      </Box>
      <Box variant="p">
        By providing a uniform experience across different components or modules, a consistent interface enhances productivity and efficiency, as developers can switch between tasks without the burden of adapting to different conventions.
      </Box>
      <Box variant="p">
        A consistent interface promotes maintainability, as updates or modifications can be applied more easily and with minimal disruption. Ultimately, a consistent interface fosters clarity, collaboration, and smoother development processes, leading to robust and reliable software solutions.
      </Box>
    </>
  },
  {
    title: 'Solve a problem one time',
    description: 'Solve it one time and use that solution everywhere. \
      Changes only need to be made in one place, one time.',
    content: <>
      <Box variant="p">
          By adhering to this principle, changes only need to be made in one place, saving time, effort, and reducing the risk of errors.
      </Box>
      <Box variant="p">
          When code is written in a modular and reusable manner, it allows for easier maintenance and scalability. Rather than duplicating code throughout the project, a DRY approach promotes encapsulation and abstraction, enabling developers to make updates or enhancements in a centralized location. This not only streamlines the development process but also enhances code readability and reduces the likelihood of introducing inconsistencies or discrepancies.
      </Box>
      <Box variant="p">
          By striving to solve problems once and keeping the code DRY, developers can achieve code efficiency, minimize redundancy, and create a more maintainable and adaptable software system.
      </Box>
    </>
  },
  {
    title: 'Use smart defaults',
    description: 'Smart defaults for component properties saves every developer time and brain space.',
    content: <>
      <Box variant="p">
        Smart defaults eliminate the need for developers to specify every property, allowing them to focus on the core functionality and customization of the components. This not only accelerates the development process but also reduces the cognitive load required to configure each property manually.
      </Box>
      <Box variant="p">
        Smart defaults promote consistency across the codebase, ensuring that components behave predictably and adhere to established conventions.
        By providing sensible and optimized default values, developers can enhance the user experience, as components are intuitively functional out of the box.
      </Box>
    </>
  },
  {
    title: 'Be explicit',
    description: 'Internal documentation is easier to work with than external documentation.',
    content: <>
      <Box variant="p">
        Being explicit is more valuable than relying solely on external documentation. Internal documentation, which is embedded within the codebase, provides immediate context and clarity for developers working directly with the code.
        It eliminates the need for constantly referencing external documentation, reducing the time and effort spent searching for information.
      </Box>
      <Box variant="p">
        Being explicit within the codebase allows developers to understand the purpose, functionality, and intended usage of specific components or functions, enhancing their productivity and reducing the risk of misunderstandings.
      </Box>
      <Box variant="p">
        Also, internal documentation remains closely tied to the code, ensuring that it stays up to date as the code evolves, preventing inconsistencies between the documentation and the actual implementation.
      </Box>
    </>
  }
];
