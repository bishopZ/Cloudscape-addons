import type { TableProps
} from '@cloudscape-design/components';
import {
  Box, ColumnLayout, Container, ContentLayout, ExpandableSection, Grid, Header, Link, SpaceBetween, Table
} from '@cloudscape-design/components';
import React from 'react';

import { Spacing } from '/addons/helpers/spacing-constants';

import { JobCard } from '../common/job-card';

/* eslint-disable max-len */
const gridDefinition = [
  { colspan: { default: 12 } },
  { colspan: { default: 12 } }
];

const innerGrid = [
  { colspan: { default: 12, xxs: 4 } },
  { colspan: { default: 12, xxs: 4 } },
  { colspan: { default: 12, xxs: 4 } }
];

type Skill = {
  discipline: string
  areas?: {
    name: string
    skills: string[][]
  }[]
}

const skillColumns: TableProps.ColumnDefinition<Skill>[] = [{
  id: 'discipline',
  header: 'Discipline',
  cell: item => item.discipline ?? '-',
  isRowHeader: true
}, {
  id: 'areas',
  header: 'Area',
  cell: item => {
    return item.areas?.map((area, index) =>
      <Grid key={index} gridDefinition={gridDefinition}>
        <Box
          variant="strong"
          padding={Spacing.TopM}
          display="block">
          {area.name}
        </Box>
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
      </Grid>
    );
  },
  isRowHeader: true
}];

const skills: Skill[] = [
  {
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
          ['ArcGIS', 'Open Streets', 'Google Maps', 'Google Earth', 'Terraform'],
          ['Power BI Workbench'],
        ]
      },
    ]
  }, {
    discipline: 'Frontend engineering', areas: [
      {
        name: 'Build system, CMS & Platform', skills: [
          ['Node.js', 'Express', 'Webpack', 'Gatsby', 'Next.js', 'Sass'],
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
          ['THREE.js', 'D3.js', 'Canvas (WebGL)'],
          ['Processing', 'Resolume', 'Projection mapping'],
        ]
      }, {
        name: 'Testing', skills: [
          ['Selenium', 'Cypress', 'Jest'],
          ['eslint (custom)', 'Static code analysis'],
          ['Accessibility (WCAG)', 'Localization (i18n)'],
        ]
      }
    ],
  }, {
    discipline: 'Backend engineering', areas: [
      {
        name: 'Cloud & API', skills: [
          ['Amazon Web Services', 'Google Cloud Platform (GCP)', 'Gitlab'],
          ['Open Broadcasting System (OBS)', 'RTMP'],
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
          ['Bootstrop', 'Cloudscape'],
          ['Technical writing'],
          ['Design system principles', 'Design system construction'],
        ]
      },
    ]
  }
];

let videoHeight = 480;
if (window.innerWidth < 1024) videoHeight = 240;

/* eslint-disable max-lines-per-function, react/jsx-max-depth, react/self-closing-comp */
export const Resume = () => {
  return <ContentLayout
    header={<Header variant="h1">Bishop Zareh</Header>}>
    <SpaceBetween size="s">
      <Container
        media={{
          content:
            <iframe
              title="vimeo-player"
              src="//player.vimeo.com/video/213543689"
              width="100%"
              frameBorder="0"
              height={videoHeight}
              allowFullScreen></iframe>,
          height: videoHeight,
          position: 'top'
        }}
        header={<Header variant="h2">Summary</Header>}>
        <Box variant="p">
          With more than two decades of experience crafting
          novel experiences for the web, mobile, and immersive environments,
          Bishop brings a wealth of knowledge and expertise
          to lead your team to success.
        </Box>
        <Box variant="p">
          He's received awards from
          SIGGRAPH, SXSW, AIGA, Awwwards
          and industry certifications from
          Apple, Google, Adobe, Autodesk and more.
        </Box>
        <Box variant="p">
          From 2005 to 2011, he taught motion design at
          School of the Art Institute of Chicago.
          In 2010, Bishop spoke about the future of user interface design
          at technical conferences across the country.
          In 2013, he organized a panel at South by Southwest on glitch art.
          In 2016, he won an Audience Choice award at the San Antonio Film
          Festival for his color grading and title design work on
          Wallace Witherspoon's "Second Impression."
          In 2018, he was featured in the Colorado AdClub's "The 50"
          for his work on Aspen's "Give a Fl*ke" campaign.
        </Box>
        <Box variant="p">
          Since 2021, he's worked as an embedded expert at Amazon.
        </Box>
      </Container>
      <Container
        header={<Header variant="h2">Experience</Header>}>
        <ColumnLayout borders="horizontal">
          <JobCard
            title="Senior Engineer (Frontend)"
            company="Stellar Elements (current) &bull; Full-time"
            duration="Oct 2021 - Present &bull; Seattle, Washington (remote)"
            /* eslint-disable-next-line max-len */
            logo="https://media.licdn.com/dms/image/D560BAQG-eXtmKYSbfQ/company-logo_100_100/0/1684789598663?e=1698883200&v=beta&t=xvGJ1_lKCNdONe0o4aXsPcKDqA80g0ar66aAOTqhx6s"
            description={<>
              <Box variant="p">
                Worked exclusively on the Amazon account helping to build the interface to Amazon Web Services (AWS).
              </Box>
              <Box variant="p">
                I helped update an in-production service to a newer version of its design system, and to newer React and Redux coding patterns. We created a template that all new code on the project should follow. Enforced those standards with new Contribution Guidelines, ESLint configuration, and new automated testing framework (Cypress). We also built several new features to showcase the velocity of feature development using our system.
              </Box>
              <Box variant="p">
                I single-handedly built the interface for a new AWS service. This allowed me to use the newest and best tools available to Amazon's internal engineers.
              </Box>
              <Box variant="p">
                I built a documentation website using over a 1000 Markdown files and Gatsby. Delivered an aggressive set of features on a 12-week timeline.
              </Box>
            </>}
          />
          <JobCard
            title="Senior Creative Technologist"
            company="Karsh Hagan &bull; Full-time"
            duration="3 yrs 5 mos &bull; Denver, Colorado"
            /* eslint-disable-next-line max-len */
            logo="https://media.licdn.com/dms/image/C4E0BAQFHx-M9LdTajA/company-logo_100_100/0/1569951228610?e=1698883200&v=beta&t=5xfY5OEUyyd_lIbV0UI6MpGQaA-uLVbs8V1_oduNKtk"
            description={<>
              <Box variant="p">
                Managed the technical aspects of over twenty accounts.

                Full-stack development on multiple architectures, mostly
                using React with Redux.

                Managed teams of domestic and foreign contract developers.

                Built websites, take-overs, social media posts,
                mobile apps, voice apps, interactive prototypes, landing pages,
                animated microsites, and large content marketing websites.

                Architected and built three web-based products with Node.js
                for an internal startup incubator.

                Collaborated with brand creatives
                to develop innovative marketing campaigns using
                design systems, personalization, chat bots,
                augmented reality (AR), webcam stream routing,
                animation-to-web pipelines, machine learning,
                blockchain and more.

                Created many starter templates for new
                website builds in diverse industries such as healthcare,
                energy, and consumer electronics.

                Official bug hunter on systems that had fallen out of repair.

                Managed the collaboration
                between analytics, measurement goals, media trafficking,
                reporting, and optimization. Created technology comparisons
                for a wide variety of stakeholders.
              </Box>
            </>}
          />
          <JobCard
            title="Senior Frontend Engineer"
            company="Bloomfire &bull; Full-time"
            duration="1 yr 4 mos &bull; Austin, Texas"
            /* eslint-disable-next-line max-len */
            logo="https://media.licdn.com/dms/image/C4E0BAQFBJYrCf4gQRA/company-logo_100_100/0/1583167897491?e=1698883200&v=beta&t=u0VCJaQhiBZIdUg3c6s8xqMX0rXsfOCnbGscU-Icp1o"
            description="Senior frontend developer for an Austin Ventures-funded
              startup. Used React to create animated
              interfaces for rich-text post editing, series organization,
              member management and data tables for complex analytics.
              Collaborated on UX and visual design."
          />
          <ExpandableSection headerText="More experience">
            <JobCard
              title="Senior Prototype Developer"
              company="Compass Learning &bull; Full-time"
              duration="1 yr 4 mos &bull; Austin, Texas"
              /* eslint-disable-next-line max-len */
              logo="https://media.licdn.com/dms/image/C560BAQFIL_lFjqWATg/company-logo_100_100/0/1519855885980?e=1698883200&v=beta&t=KIXytVQmxAe114j46FZSMjKrKw80e3RcwcQiyT8ka9k"
              description="Built weekly Javascript/HTML5 prototypes for user
                testing in public high schools across the country. These
                eLearning modules included elements of quizing, video,
                reading, vector animation, infographics, and interactive
                exercises. Worked in a U​nity pipeline​ to troubleshoot
                Javascript and legacy Flash in XCode to deliver HTML5-driven
                native iPad applications."
            />
            <JobCard
              title="Senior Presentation Layer Developer"
              company="SapientRazorfish &bull; Full-time"
              duration="1 yr 2 mos &bull; Austin, Texas"
              /* eslint-disable-next-line max-len */
              logo="https://media.licdn.com/dms/image/C560BAQFfYKn6of94Bw/company-logo_100_100/0/1549799977055?e=1698883200&v=beta&t=g1k2kXLwBDrlMQk8TM5YRSiGz8z-ApDvv_hfKbg5iK0"
              description="Built weekly Javascript/HTML5 prototypes for user
                testing in public high schools across the country. These
                eLearning modules included elements of quizing, video,
                reading, vector animation, infographics, and interactive
                exercises. Worked in a U​nity pipeline​ to troubleshoot
                Javascript and legacy Flash in XCode to deliver HTML5-driven
                native iPad applications."
            />
            <JobCard
              title="Chief Technology Officer"
              company="Design After Next &bull; Full-time, Partner"
              duration="12 yrs 11 mos &bull; Chicago, Illinois"
              /* eslint-disable-next-line max-len */
              logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAW9JREFUeF7t1UENACAQxEDwLwV8IAsSVMyjp6Bps7l59rqjYwzMgjAtPkhBrB4FwXoUpCCaAYynH1IQzACG00IKghnAcFpIQTADGE4LKQhmAMNpIQXBDGA4LaQgmAEMp4UUBDOA4bSQgmAGMJwWUhDMAIbTQgqCGcBwWkhBMAMYTgspCGYAw2khBcEMYDgtpCCYAQynhRQEM4DhtJCCYAYwnBZSEMwAhtNCCoIZwHBaSEEwAxhOCykIZgDDaSEFwQxgOC2kIJgBDKeFFAQzgOG0kIJgBjCcFlIQzACG00IKghnAcFpIQTADGE4LKQhmAMNpIQXBDGA4LaQgmAEMp4UUBDOA4bSQgmAGMJwWUhDMAIbTQgqCGcBwWkhBMAMYTgspCGYAw2khBcEMYDgtpCCYAQynhRQEM4DhtJCCYAYwnBZSEMwAhtNCCoIZwHBaSEEwAxhOCykIZgDDaSEFwQxgOC2kIJgBDKeFFAQzgOE8Izs3yD8xrl4AAAAASUVORK5CYII="
              description="CTO of a small boutique design studio
                in Boston and Chicago. Produced web applications for top-tier
                clients such as DraftFCB, Leo Burnett, Sears, Pizza Hut, Hyatt,
                and more. Managed teams of up to five to guide projects from
                concept to completion. Built a 3D interactive home page for
                the Harvard Book Store. Built an animated, single page
                application websites for the Cambridge Board of Tourism and
                Island Creek Oyster Bar, which won a 2012 Site of the Day
                Awwward and was featured by the Boston AIGA."
            />
          </ExpandableSection>
        </ColumnLayout>
      </Container>
      <Container
        header={<Header variant="h2">Education</Header>}>
        <ColumnLayout borders="horizontal">
          <JobCard
            title="Faculty (Digital Animation)"
            company="School of the Art Institute of Chicgo &bull; Adjunct"
            duration="6 yrs 1 mo &bull; Chicago, Illinois"
            /* eslint-disable-next-line max-len */
            logo="https://media.licdn.com/dms/image/C4D0BAQH_O0IttUyiXA/company-logo_100_100/0/1519856335355?e=1698883200&v=beta&t=vZlbTmswjjxNFIzrq30K--M-bW1deQxwtN170FboROE"
            description="Part-time faculty in the Film Video New Media Animation
              department. Taught senior undergraduate courses in new media
              animation and distributed video network design. Researched
              narrative construction, literary theory and visual language."
          />
          <ExpandableSection>
            <JobCard
              title="Certified Professional Instructor (Design Technology)"
              company="Sterling Ledet &bull; Contract"
              duration="17 yrs &bull; Touring"
              /* eslint-disable-next-line max-len */
              logo="https://media.licdn.com/dms/image/C4E0BAQFEFKDuHSAl1w/company-logo_100_100/0/1519856968192?e=1698883200&v=beta&t=p1ssvcQsUJ4wcq4wNrjqJeHO1Jfa9NyD1dYeBvSY7Zs"
              description="Taught multi-day courses to professionals for Adobe,
              Apple, Google, Autodesk and Apache.
              Architected solutions for each student.
              Earned 9.3 out of 10 average student rating over hundreds of
              classes and thousands of students."
            />
            <JobCard
              title="Undergraduate"
              company="University of Texas &bull; Student"
              duration="4 yrs &bull; Austin, Texas"
              /* eslint-disable-next-line max-len */
              logo="https://media.licdn.com/dms/image/C560BAQEREeDg1PACXA/company-logo_100_100/0/1617385772288?e=1698883200&v=beta&t=-pXX5cSF2-_ieG8UCcOUlcDty0lNOGJBcuRK7st1f08"
              description={<>
              Radio, Television, Film department
                <br />Convergent Media program
                <br />Advanced Communication Theory Laboratory (ACTLab)
              </>}
            />
          </ExpandableSection>
        </ColumnLayout>
      </Container>
      <Table
        variant="container"
        header={<Header variant="h2">Skills</Header>}
        columnDefinitions={skillColumns}
        items={skills}
      />
      <Container
        header={<Header variant="h2">Testimonial</Header>}>
        <Box
          variant="p"
          padding={Spacing.HorizontalL}
          fontSize="heading-m">
          &ldquo;Bishop has always impressed me with his ability to solve problems
          with technology, he could engineer a solution to do almost anything.
          He supported many clients for our agency, in many different disciplines,
          including product development. When you have a tough technology problem,
          he is a good one to have on your team!&rdquo;
        </Box>
        <Box variant="p" padding={Spacing.LeftL}>
          <em>
            <Link href="https://karshhagan.com/people/david-stewart" external>
              David Stewart
            </Link>
            <br />VP of Creative Technology, Karsh Hagan
          </em>
        </Box>
      </Container>
    </SpaceBetween>
  </ContentLayout>;
};
