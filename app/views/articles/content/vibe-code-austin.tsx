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
      Vibe Code Austin - January 2026
    </Header>}>
    <SpaceBetween size="xs">
      <Button onClick={() => {
        window.open('https://www.meetup.com/vibe-code-austin/', '_blank');
      }}>Join the group on Meetup</Button>
      <Box variant="p">
        Join us on January 21st from 5-7pm at the Monkey Nest Coffee.
      </Box>
      <Box variant="p">
        In January, we invite special guest Mark Malstrom to share his vibe coding workflow. We'll peak into google's new A2UI framework, and see some vibe coding in action.
      </Box>
      <Button onClick={() => {
        window.open('https://www.meetup.com/vibe-code-austin/events/312773441/', '_blank');
      }}>Meetup event</Button>
      <Button onClick={() => {
        window.open('https://www.facebook.com/events/1396605848666682/', '_blank');
      }}>Facebook event</Button>
      <Header variant="h3">About the Group</Header>
      <Box variant="p">
        Vibe Code Austin is a meetup group for vibe coders in Austin, Texas.
        This is a group for software developers, web programmers, and AI enthusiasts in the Austin area. Join us for networking, coding sessions, workshops, and discussions on the latest trends in computer software development, web programming, and artificial intelligence programming. Whether you're a seasoned pro or just starting out, this group is a great opportunity to collaborate, learn, and share your passion for coding. Let's code together and create some amazing vibes in the Austin tech community!
      </Box>
      <Header variant="h3">What to Expect</Header>
      <Box variant="p">
      First things first: introductions! Whether you're a senior engineer who's been in the trenches for years or someone who just discovered that ChatGPT can write Python, you're welcome here. We want to hear what brought you to Vibe Code Austin and what you're excited to learn or share.
      </Box>
      <Box variant="p">
      After we get to know each other, I'll be presenting "Version Control Keeps the Vibe Rolling" - a practical guide to how version control (Git, primarily) can save you from those nightmare moments when your AI pair programmer decides to delete your entire codebase. No more panicked Reddit posts at 2am!
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

      <EventSubscriptionForm />

      <Box variant="p" margin={{ top: 'm' }}>
      Hosted by &nbsp;
      <ExternalLink href="https://time2magic.com">Time 2 Magic</ExternalLink>
      </Box>

    </SpaceBetween>
  </Container>
</SpaceBetween>;
}
