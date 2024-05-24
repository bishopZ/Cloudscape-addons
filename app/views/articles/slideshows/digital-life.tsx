import '/styles/slick.min.css';
import '/styles/slick-theme.min.css';

import { Container, Header, SpaceBetween } from '@cloudscape-design/components';
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

  return <Container
    header={<Header variant="h2">
      Crafting a Home Security Experience with AT&T Digital Life and THREE.js
    </Header>}
    media={makeHeaderImage(article?.image ?? '')}>
    <SpaceBetween size="xs">
      <h3>What</h3>
      <p>
        Despite its discontinuation on September 1, 2022, AT&T Digital Life stood out as a pioneer in delivering innovative automation and security systems for homes and apartments.

        It offered homeowners and tenants peace of mind through advanced burglary and fire monitoring systems. Their mission was to make homes smarter, safer, and more connected.
      </p>
      <p>
        I created an interactive 3D modeling environment for AT&T Digital Life using THREE.js - a JavaScript library renowned for its capabilities in creating and manipulating three-dimensional computer graphics in the web browser.

        Users could intuitively construct rooms and place devices within their homes, expand geometry by adding corners, reposition entire rooms, install doors and windows, and enjoy a 3D rendering of their creation as a monitoring screen for alarms and connected devices.
      </p>
      <p>
        To facilitate an seemless transition between the modeling and monitoring components of the user experience, we opted to employ THREE.js for rendering both aspects. By using the same technology in both scenarios, we ensured a fluid progression from designing one's home on a flat 2D blueprint to visualizing it in three dimensions as an immersive security dashboard.
      </p>
      <h3>How</h3>
      <p>
        With THREE.js, we could easily manipulate 3D models, apply materials and lighting, and leverage WebGL technology for rendering within the web browser - ensuring seamless compatibility across a wide landscape of devices.
      </p>
      <h3>Why</h3>
      <p>
        The integration of THREE.js in our AT&T Digital Life project marked a significant milestone in my career as a software engineer. This endeavor showcased how innovative technologies could be harnessed to enhance user experiences and create engaging, interactive applications for home security systems. It also underscored the importance of staying abreast of emerging web technologies like THREE.js to remain at the cutting edge of the industry.
      </p>
      <p>
        My experience with crafting a 3D environment for AT&T Digital Life using THREE.js was both challenging and rewarding. Not only did it represent an opportunity to work on a pioneering project, but it also served as a testament to the potential that web technologies hold in transforming everyday applications, such as home security systems, into immersive and engaging experiences for users.
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

