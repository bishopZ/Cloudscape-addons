import {
  Box, Button, ColumnLayout, Container, ContentLayout, ExpandableSection, Header, SpaceBetween, Table
} from '@cloudscape-design/components';
import React from 'react';
import { Link } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { Spacing } from '/addons/helpers/spacing-constants';
import { useAppDispatch } from '/data/data-store';
import { changePreference } from '/data/preferences';

import { JobCard } from '../../common/job-card';
import { skillColumns, skills } from './skills';

/* eslint-disable max-lines-per-function */
export const Resume = () => {
  const dispatch = useAppDispatch();

  return <ContentLayout
    header={<Header
      variant="h1"
      // description="I'm on the hunt for my next adventure!"
      info={<Button
        variant="link"
        onClick={() => {
          dispatch(changePreference({
            name: 'tools',
            value: 'open'
          }));
        }}>
      info
      </Button>}
    >
      Bishop Zareh
    </Header>}>
    <SpaceBetween size="s">
      <Container header={<Header variant="h2">Experience</Header>}>
        <ColumnLayout borders="horizontal">
          <JobCard
            title="Founer/CEO"
            company="Diamond Age &bull; Full-time"
            companyLink="https://diamondage.bishopz.com/"
            duration="May 2025 - Present &bull; Denver, Colorado"
            description={
              <p>
                Founded and built a full stack web app that generates personalized advice using On-device LLMs. Product planning, Marketing: Built the entire MVP (minimum viable product). Private web beta is live. App Store and Play Store inclusion pending.
              </p>
            }
          />
          <JobCard
            title="Senior Frontend Architect"
            company="Vertafore &bull; Full-time"
            companyLink="https://www.vertsafore.com/"
            duration="Jul 2024 - Apr 2025 &bull; Denver, Colorado"
            logo="https://media.licdn.com/dms/image/v2/C4D0BAQEuzgQT1Dmzjw/company-logo_100_100/company-logo_100_100/0/1651184196480/vertafore_logo?e=1740614400&v=beta&t=0yXCuYbGmeEigrMMaH5OLpv7yJnjsafw2woCobzZ8qY"
            description={
              <p>
                Work with designers and engineers to develop the company's design system, ensuring fast and consistent work across ten products. Created an outreach program to speed onboarding of new products to the design system. Develop and document design patterns and best practices for all engineering teams, showcasing good architectural decisions that ensure continuous iteration and fast feature development.
              </p>
            }
          />
          <JobCard
            title="Senior Software Engineer, Frontend"
            company="Amdocs &bull; Full-time"
            companyLink="https://www.stellarelements.com/"
            duration="2 yrs 6 mos &bull; Seattle, Washington (remote)"
            logo="https://media.licdn.com/dms/image/D560BAQG-eXtmKYSbfQ/company-logo_100_100/0/1684789598663?e=1698883200&v=beta&t=xvGJ1_lKCNdONe0o4aXsPcKDqA80g0ar66aAOTqhx6s"
            description={<>
              <p>
                I had the opportunity to work exclusively on the Amazon account, where I was part of a team responsible for updating an in-production AWS service that spanned 26 global regions and ran in six languages. Our team of 2-5 engineers updated the service to a newer version of its design system and newer React and Redux coding patterns. As a key member of the team, I created a template for all new code on the project, wrote new contribution guidelines, an ESLint configuration, and a new automated testing framework using Cypress. These efforts not only improved the functionality and performance of the service but also enhanced the overall speed and quality of the development process.
              </p>
              <p>
                For the last three months, I researched ways to achieve engineering productivity enhancements using Large Lanugage Models (LLMs), and built the company's "thought leadership" platform, <Link to="/articles/matter-thought-leadership">MATTER</Link>, which was nominated for an
                Awwwards Site of the Day.
              </p>
            </>}
          />
          <JobCard
            title="Senior Creative Technologist"
            company="Karsh Hagan &bull; Full-time"
            companyLink="https://karshhagan.com"
            duration="3 yrs 5 mos &bull; Denver, Colorado"
            logo="https://media.licdn.com/dms/image/C4E0BAQFHx-M9LdTajA/company-logo_100_100/0/1569951228610?e=1698883200&v=beta&t=5xfY5OEUyyd_lIbV0UI6MpGQaA-uLVbs8V1_oduNKtk"
            description={<>
              <Box variant="p">
                As the Senior Creative Technologist at Karsh Hagan, I managed the technical aspects of over twenty accounts, including full-stack development on multiple architectures using React with Redux. My responsibilities included managing teams of domestic and foreign contract developers, building websites, take-overs, social media posts, mobile apps, voice apps, interactive prototypes, landing pages, animated microsites, and large content marketing websites. Additionally, I architected and built three web-based products with Node.js for an internal startup incubator, and collaborated with brand creatives to develop innovative marketing campaigns using design systems, personalization, chat bots, augmented reality (AR), webcam stream routing, animation-to-web pipelines, machine learning, blockchain, and more. I also created many starter templates for new website builds in diverse industries such as healthcare, energy, and consumer electronics. Furthermore, I acted as the official bug hunter on systems that had fallen out of repair.

                I also managed the collaboration between analytics, measurement goals, media trafficking, reporting, and optimization, and created technology comparisons for a wide variety of stakeholders.
              </Box>
              <Box variant="p">
                Wrote several articles for the company website. [
                <Link to="/articles/using-nfts-to-protect-creative-works">1</Link>,&nbsp;
                <Link to="/articles/third-party-cookies">2</Link>]
                {/* ,&nbsp; */}
                {/* <Link to="/articles/redesigning-retail">3</Link>] */}
              </Box>
              <Box
                variant="p"
                padding={Spacing.HorizontalL}
                fontSize="heading-s">
                &ldquo;Bishop has always impressed me with his ability to solve problems
                with technology, he could engineer a solution to do almost anything.
                He supported many clients for our agency, in many different disciplines,
                including product development. When you have a tough technology problem,
                he is a good one to have on your team!&rdquo;
              </Box>
              <Box variant="p" padding={Spacing.LeftL}>
                <em>
                  <ExternalLink href="https://karshhagan.com/people/david-stewart">
                    David Stewart
                  </ExternalLink>
                  <br />VP of Creative Technology, Karsh Hagan
                </em>
              </Box>
            </>}
          />
          <JobCard
            title="Senior Frontend Engineer"
            company="Bloomfire &bull; Full-time"
            companyLink="https://bloomfire.com"
            duration="1 yr 4 mos &bull; Austin, Texas"
            logo="https://media.licdn.com/dms/image/C4E0BAQFBJYrCf4gQRA/company-logo_100_100/0/1583167897491?e=1698883200&v=beta&t=u0VCJaQhiBZIdUg3c6s8xqMX0rXsfOCnbGscU-Icp1o"
            description="At this Austin Ventures-funded startup, I utilized my expertise in React to create visually stunning and animating interfaces for rich-text post editing, series organization, member management, and data tables for complex analytics. Collaboration was key, and I worked closely with UX/UI designers to bring our ideas to life."
          />
          <ExpandableSection headerText="More experience">
            <JobCard
              title="Senior Prototype Developer"
              company="Compass Learning &bull; Full-time"
              duration="1 yr 4 mos &bull; Austin, Texas"
              logo="https://media.licdn.com/dms/image/C560BAQFIL_lFjqWATg/company-logo_100_100/0/1519855885980?e=1698883200&v=beta&t=KIXytVQmxAe114j46FZSMjKrKw80e3RcwcQiyT8ka9k"
              description="At Compass Learning, I had the privilege of leading the frontend development charge for our innovative eLearning modules. With a focus on creating immersive and interactive learning experiences, I built weekly prototypes using cutting-edge technologies like Javascript and HTML5. These prototypes were put through rigorous testing in public high schools across the country. I also worked in a Unity pipeline to troubleshoot and optimize the implementation of Javascript and legacy Flash in XCode. This allowed us to deliver seamless, native iPad applications that were both intuitive and engaging. My collaboration with cross-functional teams on UX and visual design further elevated the product, resulting in a truly exceptional learning experience for students."
            />
            <hr />
            <JobCard
              title="Senior Presentation Layer Developer"
              company="razorfish &bull; Full-time"
              companyLink="https://www.razorfish.com/"
              duration="1 yr 2 mos &bull; Austin, Texas"
              logo="https://media.licdn.com/dms/image/C560BAQFfYKn6of94Bw/company-logo_100_100/0/1549799977055?e=1698883200&v=beta&t=g1k2kXLwBDrlMQk8TM5YRSiGz8z-ApDvv_hfKbg5iK0"
              description={<>
                <p>
                At razorfish, I used Javascript to build parts of a complex single-page application for the national product release of AT&T's Digital Life home automation system. Specifically, I architected and built a consumer-level, web-based, 3D modeling application with THREE.js. It enabled users to construct a 3D model of their home and their smart devices.
                </p>
                <p>
                Digital Life in the news [<ExternalLink href="//engt.co/Ov1uBh">1</ExternalLink>, <ExternalLink href="//cnet.co/1Gl0ZQa">2</ExternalLink>, <ExternalLink href="//on-ajc.com/1C4FbUZ">3</ExternalLink>]
                </p>
              </>}
            />
            <hr />
            <JobCard
              title="Chief Technology Officer"
              company="Design After Next &bull; Full-time, Partner"
              duration="12 yrs 11 mos &bull; Chicago, Illinois"
              description="As CTO at Design After Next, I led the technology team in developing innovative web applications for top-tier clients such as DraftFCB, Leo Burnett, Sears, Pizza Hut, Hyatt, and more. I managed teams of up to five and guided projects from concept to completion, delivering exceptional results for clients such as the Harvard Book Store and the Cambridge Board of Tourism. My work on these projects earned recognition, including a 2012 Site of the Day Award and feature in the Boston AIGA."
            />
          </ExpandableSection>
        </ColumnLayout>
      </Container>
      <Container
        header={<Header variant="h2">Education</Header>}>
        <ColumnLayout borders="horizontal">
          <JobCard
            title="Faculty (Digital Animation)"
            company="School of the Art Institute of Chicago &bull; Adjunct"
            companyLink="https://www.saic.edu/"
            duration="6 yrs 1 mo &bull; Chicago, Illinois"
            logo="https://media.licdn.com/dms/image/C4D0BAQH_O0IttUyiXA/company-logo_100_100/0/1519856335355?e=1698883200&v=beta&t=vZlbTmswjjxNFIzrq30K--M-bW1deQxwtN170FboROE"
            description="I taught motion design at the School of the Art Institute of Chicago for six years, where I mentored senior undergraduates in developing their portfolios. My passion for inspiring others has earned me praise from students and peers alike. With a proven track record of success and train-the-trainer certifications in Adobe After Effects and Autodesk 3DS."
          />
          <ExpandableSection headerText="More education">
            <JobCard
              title="Certified Professional Instructor (Design Technology)"
              company="Sterling Ledet &bull; Contract"
              companyLink="https://www.ledet.com/"
              duration="17 yrs &bull; Touring"
              logo="https://media.licdn.com/dms/image/C4E0BAQFEFKDuHSAl1w/company-logo_100_100/0/1519856968192?e=1698883200&v=beta&t=p1ssvcQsUJ4wcq4wNrjqJeHO1Jfa9NyD1dYeBvSY7Zs"
              description="With over 17 years of experience as an instructor for leading technology brands like Adobe, Apple, Google, Autodesk, and Apache, I've honed my skills in designing and delivering comprehensive training programs.
              My students have rated me an average of 9.3 out of 10, across hundreds of classes and thousands of students.
              I delivered multi-day courses to professionals across many industries, helping them stay ahead of the curve in their respective fields."
            />
            <hr />
            <JobCard
              title="Undergraduate"
              company="University of Texas at Austin &bull; Undergraduate"
              duration="4 yrs &bull; Austin, Texas"
              logo="https://media.licdn.com/dms/image/C560BAQEREeDg1PACXA/company-logo_100_100/0/1617385772288?e=1698883200&v=beta&t=-pXX5cSF2-_ieG8UCcOUlcDty0lNOGJBcuRK7st1f08"
              description={<>
                This program focused on the intersection of media technologies, including film and digital media. I studied the production, distribution, and consumption of media in various forms. I learned a foundation in the principles and practices of film production, as well as its cultural and historical context. Conducted experiments and simulations to test the performance of novel communication systems.
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
    </SpaceBetween>
  </ContentLayout>;
};
