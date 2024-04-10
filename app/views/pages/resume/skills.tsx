import type { TableProps
} from '@cloudscape-design/components';
import {
  Box, ExpandableSection, Grid,
} from '@cloudscape-design/components';
import React from 'react';

import { Dash } from '/addons/details/loading';
import { Spacing } from '/addons/helpers/spacing-constants';

type Skill = {
  discipline: string
  areas?: {
    name: string
    skills: string[][]
  }[]
}

const gridDefinition = [
  { colspan: { default: 12 } },
  { colspan: { default: 12 } }
];

const innerGrid = [
  { colspan: { default: 12, xxs: 4 } },
  { colspan: { default: 12, xxs: 4 } },
  { colspan: { default: 12, xxs: 4 } }
];

export const skillColumns: TableProps.ColumnDefinition<Skill>[] = [{
  id: 'discipline',
  header: 'Discipline',
  cell: item => item.discipline ?? <Dash />,
  isRowHeader: true
}, {
  id: 'areas',
  header: 'Area',
  cell: item => {
    return item.areas?.map((area, index) =>
      <Grid key={index} gridDefinition={gridDefinition}>
        <ExpandableSection headerText={area.name}>
          <Grid gridDefinition={innerGrid}>
            {area.skills.map((skillSet, setIndex) =>
              <Box
                key={setIndex}
                padding={Spacing.BottomM}
                display="block">
                {skillSet.map(skill => <>
                  {skill}
                  <br />
                </>
                )}
              </Box>
            )}
          </Grid>
        </ExpandableSection>
      </Grid>
    );
  },
  isRowHeader: true
}];

export const skills: Skill[] = [
  {
    discipline: 'AI', areas: [
      {
        name: 'AI-assisted', skills: [
          ['ChatGPT', 'Claude', 'Midjourney'],
          ['OpenGPT'],
          ['Dify.ai'],
        ]
      }, {
        name: 'GenUI', skills: [
          ['LM Studio', 'Prompt engineering'],
          ['Locofy', 'Vercel\'s V0', 'Anima'],
          ['Python'],
        ]
      },
    ]
  }, {
    discipline: 'Product', areas: [
      {
        name: 'Process', skills: [
          ['Agile lead', 'Jira', 'Trello', 'User-centric approach'],
          ['Requirements gathering', 'Project estimation', 'Backlog creation', 'Data-driven decision making'],
          ['Mentorship', 'Workshop design', 'Instructional design'],
        ]
      }, {
        name: 'Analytics', skills: [
          ['SEO', 'Google Marketing Platform', 'Adobe Analytics'],
          ['ArcGIS', 'Open Streets', 'Google Maps', 'Google Earth'],
          ['Power BI Workbench'],
        ]
      },
    ]
  }, {
    discipline: 'Frontend engineering', areas: [
      {
        name: 'Build system, CMS, Platform', skills: [
          ['Node.js', 'Webpack', 'Gatsby', 'Next.js', 'Sass'],
          ['Storyblock', 'Contentful', 'Strapi'],
          ['Git', 'Docker', 'CloudFormation', 'AWS Amplify', 'Heroku'],
        ]
      }, {
        name: 'Development', skills: [
          ['Typescript', 'React', 'React router', 'Redux toolkit'],
          ['Android', 'React Native'],
          ['VS Code', 'Atom', 'Sublime'],
        ]
      }, {
        name: 'Animation', skills: [
          ['Greensock', 'React Spring', 'React Transition Groups'],
          ['THREE.js', 'D3.js', 'Canvas', 'WebGL'],
          ['Processing', 'Resolume', 'Projection mapping'],
        ]
      }, {
        name: 'Testing', skills: [
          ['Selenium', 'Cypress', 'Jest'],
          ['ESLint', 'Static code analysis'],
          ['Accessibility (WCAG 3)', 'Localization (i18n)'],
        ]
      }
    ],
  }, {
    discipline: 'Backend engineering', areas: [
      {
        name: 'Cloud & API', skills: [
          ['Amazon Web Services', 'Google Cloud Platform'],
          ['Netlify', 'Gitlab'],
          ['GraphQL', 'REST'],
        ]
      }, {
        name: 'Database', skills: [
          ['Postgres', 'MySQL'],
          ['MongoDB', 'DynamoDB', 'AWS SQS'],
          ['Local Storage', 'Redis', 'Neo4j'],
        ]
      }, {
        name: 'Hardware', skills: [
          ['Linux', 'Raspberry Pi'],
          ['Bluetooth', 'RFID', 'OSC / MIDI', 'HDMI'],
          ['Dolby Atmos', 'Video signal processing'],
        ]
      },
    ]
  }, {
    discipline: 'Design', areas: [
      {
        name: 'Product design', skills: [
          ['Experiential design', 'Immersive design'],
          ['Copywriting', 'Journey mapping', 'User testing', 'UX research'],
          ['Voice UI', 'Multi-modal / multi-device UI'],
        ]
      }, {
        name: 'Visual, UX & Motion design', skills: [
          ['Figma', 'Sketch', 'Photoshop', 'Illustrator', 'Adobe XD'],
          ['Final Cut Pro', 'After Effects', 'Autodesk 3ds', 'Cinema 4D'],
          ['Narrative construction', 'Storyboards', 'Motion design', 'Compositing', 'Color grading'],
        ]
      }, {
        name: 'Design systems', skills: [
          ['Cloudscape', 'Bootstrap'],
          ['Technical writing'],
          ['Design system principles', 'Design system construction'],
        ]
      },
    ]
  }
];
