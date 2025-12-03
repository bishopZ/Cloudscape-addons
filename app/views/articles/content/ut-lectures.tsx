import { useParams } from "react-router-dom";
import { selectArticle } from "/data/articles";
import { useAppSelector } from "/data/data-store";
import { Alert, Box, Button, Header } from "@cloudscape-design/components";
import { Container, SpaceBetween } from "@cloudscape-design/components";
import { makeHeaderImage } from "/utils/content-map";

export const UTLectures = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  return <SpaceBetween size="xs">
  <Alert
    type="info"
    header="Follow UTLectures on social media"
    action={
      <SpaceBetween size="s" direction="horizontal">
        <Button onClick={() => {
          window.open('https://www.instagram.com/utlectures/', '_blank');
        }}>
          Follow on Instagram
        </Button>
        <Button onClick={() => {
          window.open('https://www.facebook.com/groups/1467743208255595', '_blank');
        }}>
          Join Facebook Group
        </Button>
      </SpaceBetween>
    }>
    Stay updated with the latest lectures and events at UT Austin by following us on Instagram or joining our Facebook group!
  </Alert>
  <Container
    media={makeHeaderImage(article?.image ?? '')}
    header={<Header variant="h2">
      Announcing UTLectures.org
    </Header>}>
    <SpaceBetween size="xs">
      <Box variant="p">
        The site started with a simple problem. I live near the university and I wanted to know what lectures were happening. The main UT Calendar never helps. Each department has their own calendar, but I can't check 30 separate webpages just to find out what's happening.
      </Box>
      <Box variant="p">
        So I built UTLectures.org to aggregate the data from all the different calendars into a single view.
      </Box>
      <Button onClick={() => {
          window.open('https://utlectures.org/', '_blank');
        }}>Open the site</Button>
    </SpaceBetween>
  </Container>
  <Container>
    <SpaceBetween size="xs">
      <Box variant="p">
      UT Lectures is your comprehensive resource for discovering the rich intellectual life at the University of Texas at Austin and throughout Austin. Our platform aggregates information about free lectures, academic seminars, research presentations, cultural events, guest speaker series, debates, festivals, and showcase events happening across UT Austin's diverse departments and programs. Whether you're a UT student seeking lectures related to your studies, a researcher looking for departmental seminars in your field, a faculty member staying current with academic discourse, or a community member interested in the vibrant intellectual culture of Austin, UT Lectures helps you find events that match your interests.
      </Box>
      <Box variant="p">
      We cover the full spectrum of university programming: from technical computer science talks to philosophy debates, from cultural festivals celebrating diversity to environmental science seminars addressing climate challenges, from business showcase events to humanities lectures exploring literature and history. Our automated system continuously scans publicly available sources to keep you informed about upcoming opportunities for intellectual engagement and community connection.
      </Box>
      <Box variant="p">
      Browse our listings to find your next opportunity to expand your knowledge, engage with experts, participate in important conversations, and connect with the Austin academic and cultural community. All events are free and open to anyone interested in learning and exploration.
      </Box>
    </SpaceBetween>
  </Container>
</SpaceBetween>
}
