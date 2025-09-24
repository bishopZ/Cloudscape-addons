import { Button, Container, ContentLayout, Header, Icon, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { useAppDispatch } from '/data/data-store';
import { changePreference } from '/data/preferences';

/* eslint-disable react/jsx-max-depth */
export const Contact = () => {
  const dispatch = useAppDispatch();
  let videoHeight = 480;
  if (window.innerWidth < 1024) videoHeight = 240;

  return (
    <ContentLayout
      header={<Header
        variant="h1"
        info={<Button
          variant="link"
          onClick={() => {
            dispatch(changePreference({
              name: 'tools',
              value: 'open'
            }));
          }}>
          info
        </Button>}>
        Contact
      </Header>}>
      <Container
        header={<Header variant="h2">Ways to connect</Header>}
        media={{
          content: <iframe
            title="vimeo-player"
            src="//player.vimeo.com/video/213543689"
            height={videoHeight}
            allowFullScreen
          />,
          height: videoHeight,
        }}>

        <SpaceBetween size="l">
          <div>
            <h3>Send an email</h3>
            <p style={{ marginBottom: 0 }}>
              I accept email at support@thisdomain.com.
            </p>
          </div>
          <div>
            <h3>Connect on Social</h3>
            <ul>
              <SpaceBetween size="xs">
                <li>
                  <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/bishopz/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" target="_blank" href="https://bsky.app/profile/bishopzareh.bsky.social">
                    Bluesky
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" target="_blank" href="https://github.com/bishopZ">
                    Github
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" target="_blank" href="https://vimeo.com/bishopz">
                    Vimeo
                  </a>
                </li>
              </SpaceBetween>
            </ul>
          </div>
          <div>
            <h3>ETH a dime?</h3>
            <p>ETH address: 0x277024417b7Debb7f4BEdAF290CD863Cd33530D1</p>
            <p>Yes, I have to declaire these donations on my taxes.</p>
          </div>
        </SpaceBetween>
      </Container>
    </ContentLayout>
  );
};
