

import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

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

export const DigitalLife = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug ?? ''));

  return <Container media={makeHeaderImage(article?.image ?? '')}>
    <SpaceBetween size="xs">
      <h2>What</h2>
      <p>
        I created this interactive 3D enivonment for the AT&amp;T smarthome system, "Digital Life."
      </p>
      <p>
        AT&T Digital Life was a maker of wireless home security systems with burglary and fire monitoring for homes and apartments. Digital Life services were discontinued as of September 1, 2022.
      </p>
      <h2>How</h2>
      <p>
        THREE.js
      </p>
      <h2>Why</h2>
      <p>
        Users could construct the rooms and devices in their home, add corners to expand the geometry, move entire rooms, add doors and windows, and see a 3D rendered model of their creation that doubled as a monitoring screen for alarms and devices.
      </p>
      <p>
        While the "modeling" portion of the user experience happens on a flat 2D blueprint of the home, we used THREE.js to render the flat house in three dimentions for the "monitoring" part of the user experience. Using the same technology for both enabled a smooth
        transition between them.
      </p>
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

