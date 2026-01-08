import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { makeHeaderImage } from '/utils/content-map';
import { selectArticle } from '/data/articles';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '/data/data-store';

/* eslint-disable max-len */
export const LifecycleArticle = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));
  ``
  return <SpaceBetween size="m">
    <Container
      media={makeHeaderImage(article?.image ?? '')}
      header={<Header variant="h2">What is the lifecycle of a design system?</Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
          Design systems, the superheroes of digital interfaces, don't mature overnight. Like a fine wine or a hilarious joke, they need time to reach their full potential. So, let's embark on a journey through the stages of a design system's maturity model!
        </Box>
        <Box variant="p">
          Think of a design system's lifecycle as a coming-of-age story. It starts as an ambitious idea, stumbles through awkward growing pains, finds its voice, and eventually becomes the wise mentor everyone turns to for guidance. Each stage brings unique challenges, opportunities, and lessons that shape not just the system itself, but the entire organization around it.
        </Box>
        <Box variant="p">
          Understanding this lifecycle isn't just academic exercise—it's practical wisdom. Design systems can be an intimidating undertaking, but recognizing where you are in the journey helps you set realistic expectations, allocate resources wisely, and celebrate the right victories at the right time.
        </Box>
      </SpaceBetween>
    </Container>
    <Container header={<Header variant="h2">
      Stage 1: Building Version One - The Reflection Phase
    </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        Creating a design system is like crafting the perfect dish. You need to find the right ingredients, strike a balance, and present it in a way that makes taste buds tingle. In this stage, focus on discovering the right combination of principles, tokens and core systems. Get the basics right before you dazzle the world.
        </Box>

        <Box variant="p">
        But here's the plot twist: in the minds of your customers—and the teams within your organisation—the design system already exists. It's whatever the product is made up of, regardless of whether there's a team actually trying to make it more cohesive or consistent.
        </Box>
        <Header variant="h3">The Reality Check</Header>
        <Box variant="p">
        Your first job isn't to revolutionize everything—it's to become a reliable mirror. The primary goal of a fledgling design system is to reflect the world in which it exists, acting as a mirror or map of the product it serves. This means taking inventory of what already works and codifying it properly.
        </Box>

        <Box variant="p">
        Start by auditing existing patterns. What components appear across different parts of your product? Which design decisions have stood the test of time? Which ones make developers groan and designers cringe? Your initial design system should capture the best of what exists while gently weeding out the problematic patterns.
        </Box>
        <Header variant="h3">Building the Foundation</Header>
        <Box variant="p">
        <strong>Core Components First:</strong> Begin with the building blocks that appear everywhere—buttons, form fields, typography scales, color systems. These are your bread and butter components that teams use daily.
        </Box>

        <Box variant="p">
        <strong>Documentation as Truth:</strong> You're not trying to do anything more complicated than simply reflecting the components and patterns that people intuitively already know exist. Document what exists, why it exists, and how to use it correctly.
        </Box>
        <Box variant="p">
        <strong>Quick Wins:</strong> Choose components that will have immediate impact. If fixing your button component saves every developer 30 minutes a week, that's a win worth celebrating and communicating.
        </Box>
        <Box variant="p">
        <strong>Humble Ambitions:</strong> Remember that the map is not the territory. You're building a reference, not rewriting the entire codebase overnight.
        </Box>
        <Box variant="p">
        The reflection phase typically lasts 6-12 months for most organizations. Success here isn't measured in innovation—it's measured in adoption, consistency, and the sigh of relief from teams who finally have reliable patterns to work with.
        </Box>
      </SpaceBetween>
    </Container>
    <Container header={<Header variant="h2">
      Stage 2: Growing Adoption by Making It Easy and Obvious
    </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        Your design system is like a charming celebrity; everyone wants to be associated with it. So, make it easy and obvious for everyone to hop on board. Provide clear instructions, showcase its benefits, and make it an irresistible choice.
        </Box>
        <Box variant="p">
        But adoption isn't just about having great components—it's about removing friction. Every extra step, every confusing piece of documentation, every missing example is a barrier between your system and widespread use.
        </Box>
        <Header variant="h3">The Psychology of Adoption</Header>
        <Box variant="p">
        People resist change, even good change. Your design system might be objectively better than the scattered patterns it replaces, but "better" doesn't automatically mean "adopted." You need to make the new way easier than the old way.
        </Box>
        <Box variant="p">
        <strong>Show, Don't Tell:</strong> Create compelling demos that demonstrate real-world usage. A working prototype of a login form using your components is worth more than a thousand words about spacing principles.
        </Box>
        <Box variant="p">
        <strong>Reduce Cognitive Load:</strong> Designers and developers are already juggling multiple priorities. Your system should reduce decision fatigue, not add to it. Provide clear defaults, obvious naming conventions, and examples that answer the question "how do I...?" before it's even asked.
        </Box>
        <Box variant="p">
        <strong>Meet Teams Where They Are:</strong> Integrate with existing tools and workflows. If your developers live in VS Code, make sure your components have excellent IntelliSense support. If your designers work in Figma, ensure your component library stays in sync.
        </Box>
        <Header variant="h3">Building Momentum</Header>
        <Box variant="p">
        Successful adoption follows a pattern: early adopters prove value, pragmatists see results, and eventually the system becomes the default choice.
        </Box>
        <Box variant="p">
        <strong>Champion Identification:</strong> Find the teams already excited about consistency and efficiency. Let them be your proof of concept and your advocates.
        </Box>
        <Box variant="p">
        <strong>Success Metrics:</strong> Track concrete improvements—reduced development time, fewer design inconsistencies, improved accessibility scores. Numbers convince skeptics better than passion.
        </Box>
        <Box variant="p">
        <strong>Support Systems:</strong> Create channels for questions, feedback, and requests. Be responsive. Nothing kills adoption faster than a system that feels abandoned or unresponsive to user needs.
        </Box>
        <Box variant="p">
        This stage often typically lasts 12-18 months and success is measured by adoption metrics: how many teams are using the system, how many components are being implemented, and how often teams choose the system over creating one-off solutions.
        </Box>
      </SpaceBetween>
    </Container>
    <Container header={<Header variant="h2">
      Stage 3: Surviving the Teenage Years by Building a Strong Foundation - The Anticipation Phase
    </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        Ah, the teenage years—a time of self-discovery and growth spurts. Your design system needs to find itself during this stage. Build a strong foundation by assembling a dedicated team and nurturing the right mindset. Prove that your system delivers on its promise and keep improving it, like teenagers mature over time.
        </Box>
        <Box variant="p">
        After a while, the design system will accurately reflect the best parts of the product. Documentation becomes more robust, and your team better understands why certain components and patterns are the way they are. This is when things get interesting—and complicated.
        </Box>
        <Header variant="h3">The Growing Pains</Header>
        <Box variant="p">
        As adoption increases, so do requests, edge cases, and competing priorities. Teams start asking for variations you never considered. Product requirements evolve in directions your original system didn't anticipate. Welcome to the teenage years of design system development.
        </Box>
        <Box variant="p">
        <strong>Scope Creep:</strong> Every team thinks their use case is special. Some are right, some aren't. Learning to distinguish between legitimate system evolution and one-off customization becomes a critical skill.
        </Box>
        <Box variant="p">
        <strong>Technical Debt:</strong> Early decisions that seemed reasonable at small scale start showing strain. Your CSS architecture that worked for 5 components might not scale to 50.
        </Box>
        <Box variant="p">
        <strong>Organizational Politics:</strong> Success brings visibility, and visibility brings opinions. Suddenly everyone has thoughts about your color palette choices and naming conventions.
        </Box>
        <Header variant="h3">Developing Anticipation Skills</Header>
        <Box variant="p">
        Once your design system reaches this point, you can begin to be able to anticipate the emerging needs of the teams you support. This isn't magic—it's pattern recognition and strategic thinking.
        </Box>
        <Box variant="p">
        <strong>Listen Actively:</strong> This might happen because you start to hear the same kinds of feedback about the design system from different teams, or you might see teams naturally gravitating towards new design styles or interaction patterns.
        </Box>
        <Box variant="p">
        <strong>Think Like a Librarian:</strong> A reference interview is a conversation between a librarian and a library user, usually at a reference desk, in which the librarian responds to the user's initial explanation of his or her information need by first attempting to clarify that need and then by directing the user to appropriate information resources. Your job is helping teams understand what they really need, not just what they think they want.
        </Box>
        <Box variant="p">
        <strong>Co-creation Over Dictation:</strong> You can start to use the good credit you've established as a reliable source of truth to bring those teams together and co-create solutions. Involve stakeholders in the design process rather than delivering solutions from on high.
        </Box>
        <Header variant="h3">Building Organizational Maturity</Header>
        <Box variant="p">
        This phase requires more than just better components—it requires organizational support.
        </Box>
        <Box variant="p">
        <strong>Dedicated Resources:</strong> A design system can't survive on volunteer efforts alone. Secure dedicated team members who can focus on system evolution rather than juggling it with other responsibilities.
        </Box>
        <Box variant="p">
        <strong>Governance Processes:</strong> Establish clear processes for requesting changes, proposing new components, and resolving conflicts between teams with different needs.
        </Box>
        <Box variant="p">
        <strong>Communication Rhythms:</strong> Regular updates, office hours, and feedback sessions keep the system connected to its users and prevent it from becoming an ivory tower project.
        </Box>
        <Box variant="p">
        The anticipation phase often spans 18-24 months and represents the system's transition from helpful tool to strategic platform. Success is measured not just in usage, but in the system's ability to enable teams to solve new problems faster than they could before.
        </Box>
      </SpaceBetween>
    </Container>
    <Container header={<Header variant="h2">
      Stage 4: Evolving a Healthy Platform - The Influence Phase
    </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        Congratulations! Your design system has now matured into a wise leader within your organization. It's like the guru of digital interfaces, guiding others on the path to greatness. But remember, even gurus need to keep evolving. Adapt and improve your system to stay ahead of the game.
        </Box>
        <Box variant="p">
        After successfully anticipating the needs of teams you support and working with them to extend the design system, you begin to take on more of a role of influence in the organisation. This is where your design system transcends being just a collection of components and becomes a force for organizational change.
        </Box>
        <Header variant="h3">Beyond Innovation to Influence</Header>
        <Box variant="p">
        The influence phase isn't just about creating new things—it's about changing how people think. Innovation is only successful if it persuades bigger change—if it influences people around it to shift their thinking.
        </Box>
        <Box variant="p">
        our system now has the credibility and reach to tackle bigger challenges: major rebrands, accessibility improvements across all products, transitions to new technologies, or shifts in user experience paradigms. But more importantly, it can shape how your organization approaches these challenges.
        </Box>
        <Header variant="h3">Scaling Through Education</Header>
        <Box variant="p">
        The ultimate goal isn't to control every design decision—it's to distribute design system thinking throughout the organization. All the artefacts you develop for a design system—components, patterns, documentation, APIs, quality enforcement tools—are proxies for ways of thinking about product design and development at scale.
        </Box>
        <Box variant="p">
        <strong>Systems Thinking:</strong> Teams start naturally considering the broader impact of their decisions. They ask questions like "How will this pattern work across different products?" and "What happens when we need to support this in 5 different contexts?"
        </Box>
        <Box variant="p">
        <strong>Quality by Default:</strong> A mature design system supports fine-tuning of tokens, allowing changes to the appearance of the design system without rewriting code or creating new component designs. Quality becomes embedded in the workflow rather than an afterthought.
        </Box>
        <Box variant="p">
        <strong>Federated Ownership:</strong> Influence is the peak of design system maturity, and represents a design system that is federated across the organisation in such a way that all product teams feel empowered to shift the system to meet emergent problems.
        </Box>
        <Header variant="h3">Maintaining Adaptability</Header>
        <Box variant="p">
        Even at peak maturity, humility remains essential. It's crucial for design systems teams to remain nimble and mindful of the fact that the system is always eventually wrong. The world changes, user needs evolve, technology advances, and business priorities shift.
        </Box>
        <Box variant="p">
        <strong>Continuous Learning:</strong> Stay connected to industry trends, emerging technologies, and evolving user expectations. Your system should be a leader, not a barrier to progress.
        </Box>
        <Box variant="p">
        <strong>Strategic Flexibility:</strong> Be prepared for major pivots. Whether it's a rebrand, a new product line, or a technology migration, your system should enable change rather than constrain it.
        </Box>
        <Box variant="p">
        Cultural Impact: At this stage, your influence extends beyond components and code to organizational culture. You're modeling collaborative decision-making, evidence-based design, and user-centered thinking.
        </Box>
        <Header variant="h3">The Continuous Journey</Header>
        <Box variant="p">
        The influence phase doesn't have a defined end—it's an ongoing state of maturity that requires constant attention and evolution. Success here is measured not just in metrics like adoption or consistency, but in cultural indicators: how naturally teams think about scalable solutions, how quickly the organization can adapt to change, and how efficiently new team members can contribute to high-quality user experiences.
        </Box>
      </SpaceBetween>
    </Container>
    <Container header={<Header variant="h2">
      The Never-Ending Story
    </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        Remember, the design system is always eventually wrong. This isn't pessimism—it's realism that keeps you adaptable and humble. The goal isn't perfection; it's usefulness, reliability, and the ability to evolve gracefully.
        </Box>
        <Box variant="p">
        Each stage of this lifecycle brings its own rewards and challenges. Embrace where you are in the journey, but always keep an eye on where you're heading. Your design system's greatest achievement won't be any single component or pattern—it will be the collective improvement in how your organization creates digital experiences.
        </Box>
        <Box variant="p">
        The lifecycle of a design system mirrors the lifecycle of the organization it serves: growing in complexity, capability, and influence. By understanding this journey, you can navigate it with confidence, make better decisions about resource allocation, and most importantly, create something that truly serves the people who use it every day.
        </Box>
        <Box variant="p">
        After all, the best design systems aren't just collections of components—they're catalysts for better collaboration, more efficient workflows, and ultimately, superior user experiences. That's a journey worth taking, one stage at a time.
        </Box>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
