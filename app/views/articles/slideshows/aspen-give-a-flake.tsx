import '/styles/slick.min.css';
import '/styles/slick-theme.min.css';

import { Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const AspenGiveAFlake = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug ?? ''));

  return <Container
    header={<Header variant="h2">
      Crafting a Home Security Experience with AT&T Digital Life and THREE.js
    </Header>}
    media={makeHeaderImage(article?.image ?? '')}>
    <SpaceBetween size="xs">
      <h3>What</h3>
      <p>
        A module for the Give A Fl*ke campaign website that facilitated tweeting to politicians.
      </p>
      <p>
        Winner of the AdClub of Colorado's "The 50 Award" in 2018.
      </p>
      <p>
        <ExternalLink href="https://karshhagan.com/work/aspen-snowmass-give-a-flake-campaign-case-study">Give a Fl*ke Case Study</ExternalLink>
      </p>
      <h3>Who</h3>
      <p>React.js<br />Google Civic Information API<br />Twitter API<br />Webpack<br />Node.js<br />Heroku</p>
      <h3>Why</h3>
      <p>Aspen Snowmass has always been a values-driven company, but that story has always taken a back seat to their world-class ski offering. As climate change becomes a more pressing threat to the ski industry itself, those two messages now intersect. So we set out to compel snowsports enthusiasts to protect their passion by joining the fight against climate change.</p>
      <p>The module targeted specific lawmakers, in the site visitor's voting district. It offered a variety of phrasings to match the user's voice and to create more impact.</p>
      <Slider {...settings}>
        {article?.images?.map((image, index) =>
          <div key={index}>
            <img src={image} alt="" />
          </div>
        )}
      </Slider>
    </SpaceBetween>
  </Container>;
};

