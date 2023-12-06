import { Box, Container, ContentLayout, Header, Link, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';
import { Spacing } from '/addons/helpers/spacing-constants';

/* eslint-disable max-len */
export const Exhibitions = () => {
  return <ContentLayout
    header={<Header variant="h1">Show record</Header>}>
    <SpaceBetween size="s">
      <Container header={<Header variant="h2">Select clients</Header>}>
        <Box
          padding={Spacing.HorizontalL}
          fontSize="heading-m">
          Amazon
          • Citibank • MIT • SAIC • Leo Burnett
          • Mayo Clinic • Aspen Snow Mass • Harvard Book Store
          • Arrow Electronics • Blackberry
          • General Mills • General Motors • AT&T • TD Ameritrade
          • Anchutz Medical Campus • University of Chicago • Cambridge Office of Tourism
          • Fiske Planetarium • Denver International Airport
        </Box>
      </Container>
      <Container header={<Header variant="h2">Awards</Header>}>
        <p>2018 The 50, AdClub of Colorado (<Link external href="//karshhagan.com/case-studies/aspen-snowmass">Aspen Give a Fl*ke Twitter bot</Link>)</p>
        <p>2016 Audience Award for Best Narrative Feature, San Antonio Film Festival ("Second Impression" directed by Wallace Weatherspoon)</p>
        <p>2014 Arts Grant Recipient, Burning Flipside (Meditation Deathmatch)</p>
        <p>2011 Best of New England, AIGA (Island Creek Oyster Bar)</p>
        <p>2011 Site of the Day, <ExternalLink href="//www.awwwards.com/sites/island-creek-oyster-bar">Awwwards.com</ExternalLink> (Island Creek Oyster Bar)</p>
        <p>2010 Visiting Artist, Salisbury University, Maryland</p>
        <p>2009 Semi-finalist, SXSW Game Idea Competition (Chicago House Story)</p>
        <p>2007 Grant Recipient, Cool Globes: Hot Ideas for a Cooler Planet</p>
        <p>2004 World premier, RESfest opening screening of SIGGRAPH (American Analog Set music video “Come Home Julie”)</p>
        <p>2002 Artist in Residence, Depauw University, Indiana</p>
        <p>1999 Nominee, SXSW Web Awards (Kill The President)</p>
        <p>1998 Innovation in Art and Technology, Texas Interactive Multimedia Awards (Kill The President)</p>
      </Container>
      <Container header={<Header variant="h2">Art exhibitions</Header>}>
        <p>2023 Projection artist, <Link external href="//www.westword.com/music/itchy-o-brings-spooktacular-halloween-concerts-to-mercury-cafe-in-denver-18101046">"Hallowmass"</Link> (run of 10 shows) itchy-O, Mercury Cafe - Denver, CO</p>
        <p>2023 Performance artist, "Art Night Out" <Link external href="//itchy-o.com">itchy-O</Link> - Lafayette, CO</p>
        <p>2023 Projection artist, <Link external href="https://itchyo.com/mystic_evening/">"This Mystic Night"</Link> itchy-O, Levitt Pavillion - Denver, CO (4.3k audience)</p>
        <p>2023 Special effects assistant (fog), "Intergalactic Masquerade" <Link external href="//itchy-o.com">itchy-O</Link>, Oriental Theater - Denver, CO</p>
        <p>2023 Performance artist, <Link external href="//itchy-o.com">itchy-O</Link> featuring <Link external href="//www.n3ptune.com/">n3ptune</Link>, Bluebird - Denver, CO</p>
        <p>2023 Projection artist, "Kink Valentines" <Link external href="//itchy-o.com">itchy-O</Link>, Reel Works - Denver, CO</p>
        <p>2022 Special effects assistant (electrical), <Link external href="//itchy-o.com">itchy-O</Link>, The Summit - Denver, CO</p>
        <p>2022 Lighting director, <Link external href="//itchy-o.com">itchy-O</Link>, Far Out Lounge - Austin, TX</p>
        <p>2022 Lighting designer, "Fantastic Fest" <Link external href="//itchy-o.com">itchy-O</Link>, Alamo Draft House - Austin, TX</p>
        <p>2022 Projection artist, "Tetrapolar Purification Ceremony" <Link external href="//itchy-o.com">itchy-O</Link>, Filmore Auditorium - Denver, CO</p>
        <p>2017 Projection artist, Rocky Mountain Audio Festival, Marriott Tech Center - Denver, CO</p>
        <p>2015 Live game show technician, "Meditation Deathmatch" Voice &amp; Exit Festival, Haymaker - Austin, TX</p>
        <p>2015 Group show, "Venice, TX" The Wrong, <Link external href="//homeostasislab.org/info">Homeostasis Lab</Link> - Toronto, Canada</p>
        <p>2014 Lighting designer, “Sangre Del Sol” Voice &amp; Exit Festival, Austin Music Hall - Austin, TX</p>
        <p>2012 Protest performance, “Occupy SouthBy” SXSW Music, Swan Dive - Austin, TX (with <Link external href="//tommorello.com/">Tom Morello</Link>)</p>
        <p>2008 Projection artist, Festival of Ice, Millennium Park - Chicago, IL (with Plaid)</p>
        <p>2008 Projection artist, Green Festival, Navy Pier - Chicago, IL</p>
        <p>2008 Projection artist, Boneyard Arts Festival, Krannert Center for Performing Arts - Champaign-Urbana, IL</p>
        <p>2007 Projection artist, Art of Play, Chicago Cultural Center - Chicago, IL (with <Link external href="//www.bubblyfish.com/">Bubblyfish</Link>)</p>
        <p>2007 Projection artist, Green Festival, McCormick Center - Chicago, IL (with <Link external href="//djspooky.com/">DJ Spooky</Link>)</p>
        <p>2005 Projection artist, Version&gt;05 Fest, Zhou B Art Center - Chicago, IL</p>
        <p>2004 Projection artist, West Loop Art Market, NBC Tower - Chicago, IL</p>
        <p>2003 Projection artist, “SPI Vision” Boston Center for the Arts, Cyclorama - Boston, MA (with DJ Cool Herc)</p>
        <p>2002 Projection artist, “Future Classic” Boston Center for the Arts, Cyclorama - Boston, MA (with <Link external href="//obeygiant.com/">Shepard Fairey</Link>)</p>
        <p>2002 Group show, “Kill The President” Version&gt;02 Fest, Museum of Contemporary Art - Chicago, IL</p>
        <p>2002 Video installation, “digital?confusion” Austin Museum of Digital Art - Austin, TX (SXSW Interactive opening party)</p>
      </Container>
      <Container header={<Header variant="h2">Public speaking</Header>}>
        <p>2023 User Group Presenter, <Link external href="//www.youtube.com/watch?v=Ez4TWswyoZg">"State management: the missing manual"</Link> <Link external href="//reactdenver.com/">React Denver</Link> - Denver, CO</p>
        <p>2023 User Group Presenter, <Link external href="//www.youtube.com/watch?v=0Kwm4OskzBs">"Typescript: from Any to Unknown"</Link> <Link external href="//reactdenver.com/">React Denver</Link> - Denver, CO</p>
        <p>2023 User Group Presenter, "Life as an engineer at Amazon" <Link external href="//reactdenver.com/">React Denver</Link> - Denver, CO</p>
        <p>2022 User Group Presenter, "Typescript: from Any to Unknown" <Link external href="//reactdenver.com/">React Denver</Link> - Denver, CO</p>
        <p>2018 User Group Presenter, “A brief history of recipes” Denver Creative Tech, Legwork Studio - Denver, CO</p>
        <p>2018 User Group Presenter, “ADVANCED INTELLIGENT DEEP ARTIFICIAL NEURAL MACHINE ROBOTS” Refresh Denver, Galvanize - Denver, CO</p>
        <p>2017 User Group Presenter, <Link external href="//vimeo.com/manage/videos/211040647">"RGB vs HSL, the beatdown"</Link> Denver Creative Tech, Commons on Champa - Denver, CO</p>
        <p>2013 Panel organizer, “2012: Year of the GLI.TC/H” SXSW Interactive, Austin Convention Center - Austin, TX</p>
        <p>2010 Conference presenter, “Advancements in motion” Motion Graphics Festival - Boston, San Francisco, Chicago</p>
        <p>2009 Conference presenter, "The history of tomorrow's interfaces" <Link href="//reelchicago.com/article/two-days-43-speakers-1500-attendees-see-future-chicago-new-media-summit/" external>Chicago New Media Summit</Link>, Museum of Contemporary Art - Chicago, IL</p>
        <p>2009 Conference presenter, “The history of tomorrow's interfaces” Motion Graphics Festival - Boston, Washington DC, Austin</p>
        <p>2008 Conference presenter, “Chicago House Story” Consuming Race Conference, University of Chicago - Chicago, IL</p>
      </Container>
    </SpaceBetween>
  </ContentLayout>;
};
