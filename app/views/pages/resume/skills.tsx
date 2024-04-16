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
          ['LocalGPT', 'Edith'],
          ['Dify.ai'],
        ]
      }, {
        name: 'GenUI', skills: [
          ['SWE-agent', 'LM Studio', 'Prompt engineering'],
          ['Locofy', 'Vercel\'s V0', 'Anima'],
          ['Python'], // TensorFlow, PyTorch, NLTK, spaCy
        ]
      },
    ]
  }, {
    discipline: 'Product', areas: [
      {
        name: 'Delivery', skills: [
          ['Agile project management', 'Jira', 'Trello'],
          ['Requirements gathering', 'Stakeholder management', 'Risk management'],
          ['Mentorship', 'Technical writing', 'Presentation skills'],
        ]
      }, {
        name: 'Analytics', skills: [
          ['SEO', 'Keyword research (SEMRush)', 'Enhanced listings (JSON+ld)'],
          ['Google Marketing Platform', 'Adobe Analytics', 'ArcGIS'],
          ['Power BI Workbench', 'Report creation'],
        ]
      },
    ]
  }, {
    discipline: 'Frontend engineering', areas: [
      {
        name: 'Build system (web & mobile)', skills: [
          ['Node.js', 'Express', 'Webpack', 'Gatsby', 'Next.js', 'Typescript', 'Sass'],
          ['React', 'React Router', 'Redux Toolkit', 'React Hooks'],
          ['Android Studio', 'React Native', 'Cordova'],
        ]
      }, {
        name: 'Design systems & collaboration', skills: [
          ['Bootstrap', 'Cloudscape', 'Blocks'],
          ['Design system principles', 'Design system construction'],
          ['Figjam', 'Miro'],
        ]
      }, {
        name: 'Special effects (web)', skills: [
          ['Greensock', 'React Spring', 'React Transition Groups'],
          ['THREE.js', 'D3.js', 'Canvas', 'WebGL'],
          ['After Effects', 'Figma', 'Motion design']
        ]
      }, {
        name: 'Quality assurance', skills: [
          ['Cypress', 'Jest'],
          ['ESLint', 'Static code analysis'],
          ['Accessibility (WCAG 3)', 'Localization (i18n)'],
        ]
      }
    ],
  }, {
    discipline: 'Backend engineering', areas: [
      {
        name: 'Content management systems', skills: [
          ['Contentful', 'Strapi'],
          ['GraphQL', 'REST'],
          ['Wordpress', 'Drupal']
        ]
      }, {
        name: 'Cloud services', skills: [
          ['Git', 'Docker', 'Kubernetes'],
          ['Lambda', 'CloudFormation', 'AWS Amplify', 'Heroku'],
          ['Amazon Web Services', 'Google Cloud Platform', 'Netlify', 'Gitlab'],
        ]
      }, {
        name: 'Databases', skills: [
          ['Postgres', 'MySQL'],
          ['MongoDB', 'DynamoDB', 'AWS SQS'],
          ['Local Storage', 'Redis', 'Neo4j'],
        ]
      }, {
        name: 'Hardware', skills: [
          ['Linux', 'Raspberry Pi'],
          ['Bluetooth', 'RFID', 'OSC', 'MIDI', 'HDMI'],
          ['Dolby Atmos', '7.1 surround sound'],
        ]
      },
    ]
  }
];
