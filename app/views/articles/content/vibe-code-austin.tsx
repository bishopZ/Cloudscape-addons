import { useParams } from "react-router-dom";
import { selectArticle } from "/data/articles";
import { useAppSelector } from "/data/data-store";
import { Box, Button, Container, Header, List, SpaceBetween } from "@cloudscape-design/components";
import { makeHeaderImage } from "/utils/content-map";
import { EventSubscriptionForm } from "../common/event-subscription-form";
import { ExternalLink } from "/addons/details/external-link";

export const VibeCodeAustin = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  return <SpaceBetween size="xs">
  <Container
    media={makeHeaderImage(article?.image ?? '')}
    header={<Header variant="h2">
      Announcing Vibe Code Austin
    </Header>}>
    <SpaceBetween size="xs">
      <Box variant="p">
        Vibe Code Austin is a new meetup group for vibe coders in Austin, Texas.
        This is a group for software developers, web programmers, and AI enthusiasts in the Austin area. Join us for networking, coding sessions, workshops, and discussions on the latest trends in computer software development, web programming, and artificial intelligence programming. Whether you're a seasoned pro or just starting out, this group is a great opportunity to collaborate, learn, and share your passion for coding. Let's code together and create some amazing vibes in the Austin tech community!
      </Box>
      <EventSubscriptionForm />
      <Button onClick={() => {
        window.open('https://www.meetup.com/vibe-code-austin/', '_blank');
      }}>View the meetup group</Button>
      <Box variant="p">
        Our first meeting is on November 18th, 2025 from 5pm to 7pm at the Monkey Nest Coffee.
      </Box>
      <Button onClick={() => {
        window.open('https://www.meetup.com/vibe-code-austin/events/311997037/?eventOrigin=group_upcoming_events', '_blank');
      }}>View the event on Meetup</Button>
      <Button onClick={() => {
        window.open('https://www.facebook.com/events/810732441591882', '_blank');
      }}>View the event on Facebook</Button>
      <Header variant="h3">What to Expect</Header>
      <Box variant="p">
      First things first: introductions! Whether you're a senior engineer who's been in the trenches for years or someone who just discovered that ChatGPT can write Python, you're welcome here. We want to hear what brought you to Vibe Code Austin and what you're excited to learn or share.
      </Box>
      <Box variant="p">
      After we get to know each other, I'll be presenting "Version Control Keeps the Vibe Rolling" – a practical guide to how version control (Git, primarily) can save you from those nightmare moments when your AI pair programmer decides to delete your entire codebase. No more panicked Reddit posts at 2am!
      </Box>
      <Header variant="h3">Who Should Come</Header>
      <List items={[
        { id: "experienced-developers", content: "Experienced developers who want to connect with the Austin community" },
        { id: "newer-to-coding", content: "Folks newer to coding who want friendly guidance (especially around AI-assisted development)" },
        { id: "ai-curious", content: "Anyone curious about making AI a useful coding partner instead of a chaos agent" },
        { id: "tech-folks", content: "People who just want to hang with other tech folks in Austin" }
      ]} renderItem={(item) => item} />

      <Box variant="p">
      Bring your questions, your war stories, and your curiosity. Let's build a community where everyone - from the veterans to the vibes-curious - can learn, collaborate, and keep the coding energy positive.
      </Box>

      <Box variant="p">
      Hosted by
      <ExternalLink href="https://time2magic.com">Chill Street Productions</ExternalLink>
      </Box>

    </SpaceBetween>
  </Container>
</SpaceBetween>;
}
