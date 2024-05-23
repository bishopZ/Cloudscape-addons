

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
      <h2>How</h2>
      <p>
        THREE.js
        <br />Backbone.js
      </p>
      <h2>Why</h2>
      <p>
        Users could construct the rooms and devices in their home, add corners to expand the geometry, move entire rooms, add doors and windows, and see a 3D rendered model of their creation that doubled as a monitoring screen for alarms and devices.
      </p>
      <Slider {...settings}>
        {item?.images?.map((image, index) =>
          <div key={index}>
            <img src={image} alt="" />
          </div>
        )}
      </Slider>
    </SpaceBetween>
  </Container>;
};

