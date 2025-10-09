import type { TableProps } from '@cloudscape-design/components';
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
        <ExpandableSection
          headerText={area.name}
          defaultExpanded={area.name === 'Build system (web & mobile)'}>
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
        name: 'AI-assisted engineering', skills: [
          ['AWS Bedrock', 'HuggingFace', 'Tensorflow'],
          ['Cursor', 'GitHub Copilot', 'Notebook ML'],
          ['Response Augmentation (RAG)', 'Prompt engineering'],
        ]
      }, {
        name: 'Generative AI', skills: [
          ['Claude.ai', 'LM Studio'],
          ['ComfyUI', 'Stable Diffusion', 'Adobe Firefly', 'RunwayML'],
          ['Sono'],
        ]
      },
    ]
  }, {
    discipline: 'Product', areas: [
      {
        name: 'Delivery', skills: [
          ['Agile', 'Jira', 'Trello'],
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
          ['Node.js/Express', 'Vite', 'Gatsby', 'Next.js', 'Nest.js'],
          ['Typescript', 'React', 'Redux Toolkit', 'Zustand', 'Tailwind CSS'],
          ['React Native', 'Expo', 'Android Studio'],
        ]
      }, {
        name: 'Design systems & collaboration', skills: [
          ['Cloudscape', 'shadcn', 'Material UI', 'Bootstrap'],
          ['Storybook', 'Design system principles', 'Design system construction'],
          ['Figma', 'Figjam', 'Miro'],
        ]
      }, {
        name: 'Special effects (web)', skills: [
          ['Greensock', 'React Spring', 'React Transition Groups', 'View Transition API'],
          ['THREE.js', 'D3.js', 'Canvas', 'WebGL', 'SVG'],
          ['After Effects', 'Figma', 'Lottie', 'Motion design']
        ]
      }, {
        name: 'Quality assurance', skills: [
          ['Cypress', 'React Testing Library', 'Playwright'],
          ['ESLint', 'Static code analysis'],
          ['Accessibility (WCAG 3)', 'Localization (i18n)', 'SEO'],
        ]
      }
    ],
  }, {
    discipline: 'Backend engineering', areas: [
      {
        name: 'Content management & APIs', skills: [
          ['Ghost', 'Webflow', 'Contentful', 'Strapi'],
          ['GraphQL', 'RESTful APIs'],
          ['Wordpress', 'Drupal', 'Django']
        ]
      }, {
        name: 'Cloud services', skills: [
          ['Git', 'Docker', 'Kubernetes'],
          ['Amazon Web Services', 'Google Cloud Platform', 'Railway', 'Netlify', 'Gitlab'],
          ['Lambda', 'CloudFormation', 'AWS Amplify', 'Vercel'],
        ]
      }, {
        name: 'Databases', skills: [
          ['Postgres', 'MySQL', 'SQLite'],
          ['MongoDB', 'DynamoDB', 'AWS SQS'],
          ['Local Storage', 'Redis', 'Neo4j'],
        ]
      }, {
        name: 'Hardware', skills: [
          ['Linux', 'Raspberry Pi', 'Arduino'],
          ['Bluetooth', 'RFID', 'OSC', 'MIDI', 'HDMI'],
          ['Dolby Atmos', '7.1 surround sound'],
        ]
      },
    ]
  }
];
