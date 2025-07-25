import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';

// eslint-disable-next-line max-lines-per-function
export const FullStackSoftSkills = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll();
    }, 0);
  }, []);

  return <SpaceBetween size="xs">
    <Container
      media={makeHeaderImage(article?.image ?? '')}
      header={<Header variant="h2">
        A Frontend Developer's Guide to Backend Engineering
      </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        When someone says "full stack engineer," I often think "bad at frontend." Too many backend developers have picked up just enough JavaScript to slap together a React component, ignoring responsiveness, accessibility, and the nuanced craft of user experience design.
        </Box>
        <Box variant="p">
          But here's the thing: frontend developers make the same mistake in reverse. We see Node.js and think, "Great! I already know JavaScript—I'm practically a backend developer now!" We spin up an Express server, write a few routes, and call ourselves full-stack engineers.
        </Box>
        <Box variant="p">
        The reality is much more humbling. Backend engineering isn't just about knowing how to write server-side code—it's about understanding the operational realities of building systems that need to run reliably, scale efficiently, and be maintained by teams over years.
        </Box>
        <Box variant="p">
        This guide covers the "soft skills" of backend development—the engineering practices and operational knowledge that separate weekend projects from production systems. Think of it as your study guide for making the transition from frontend specialist to genuinely capable full-stack engineer.
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        Node.js APIs: you need Controllers & Services, not just Routes
      </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        Most frontend developers learning backend start with routes. You've probably written something like this:
        </Box>
        <pre><code className="language-javascript">
          {`
app.get('/users/:id', async (req, res) => {
  const user = await db.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const posts = await db.query('SELECT * FROM posts WHERE user_id = ?', [req.params.id]);
  user.posts = posts;

  res.json(user);
});
          `}
        </code></pre>
        <Box variant="p">
        This works, but it's not maintainable. Production backend systems separate concerns using a layered architecture.
        </Box>
        <Box variant="p">
          <strong>Controllers</strong> handle HTTP concerns—parsing requests, validating inputs, formatting responses, and managing status codes. They should be thin and focused solely on the web layer.
        </Box>
        <Box variant="p">
          <strong>Services</strong> contain your business logic—the core operations your application performs. They're framework-agnostic and can be tested in isolation.
        </Box>
        <Box variant="p">
          <strong>Repository/Data Access Layer</strong> handles database interactions, abstracting away the specifics of your data store.
        </Box>
        <Box variant="p">
        A better version might look like:
        </Box>
        <pre><code className="language-javascript">
          {`
// controllers/userController.js
exports.getUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    if (!userId) return res.status(400).json({ error: 'Invalid user ID' });

    const user = await userService.getUserWithPosts(userId);
    res.json(user);
  } catch (error) {
    if (error.name === 'UserNotFoundError') {
      return res.status(404).json({ error: 'User not found' });
    }
    throw error; // Let error middleware handle unexpected errors
  }
};

// services/userService.js
exports.getUserWithPosts = async (userId) => {
  const user = await userRepository.findById(userId);
  if (!user) throw new UserNotFoundError(\`User \${userId} not found\`);

  const posts = await postRepository.findByUserId(userId);
  return { ...user, posts };
};
          `}
        </code></pre>
        <Box variant="p">
        This separation makes your code testable, reusable, and much easier to modify as requirements change.
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        What Do I Need to Know About Data Schemas and Migrations?
      </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        Frontend developers are used to data just existing. The API returns JSON, we destructure what we need, and life is good. Backend development means becoming the steward of data—you're responsible for its structure, integrity, and evolution over time.
        </Box>
        <Box variant="p">
          <strong>How are database schemas designed?</strong> You need to think about relationships (one-to-many, many-to-many), normalization vs. denormalization trade-offs, indexing for performance, and data types that make sense for your use cases.
        </Box>
        <Box variant="p">
          But here's what really trips up frontend developers. <strong>How do you change your data structure over time without breaking everything?</strong> The answer is migrations—and they're trickier than you think.
        </Box>
        <Box variant="p">
          Consider this evolution...
        </Box>
        <ol>
          <li>
            Version 1, Users have a single <code className="language-javascript">name</code> field.
          </li>
          <li>
          Version 2, You need separate <code className="language-javascript">first_name</code> and <code className="language-javascript">last_name</code> fields.
          </li>
          <li>
          Version 3, You need to support international names that don't fit Western conventions.
          </li>
        </ol>
        <Box variant="p">
          Each change requires a migration script that can run safely on production data:
        </Box>
        <pre><code className="language-javascript">
          {`
-- Migration. Split name into first_name and last_name
ALTER TABLE users
ADD COLUMN first_name VARCHAR(255),
ADD COLUMN last_name VARCHAR(255);

-- Migrate existing data (this gets complex fast)
UPDATE users
SET first_name = SUBSTRING_INDEX(name, ' ', 1),
    last_name = SUBSTRING_INDEX(name, ' ', -1)
WHERE name IS NOT NULL;

-- Don't drop the old column yet! Run this for a few releases
-- to ensure you can roll back if needed
          `}
        </code></pre>
        <Box variant="p">
          <strong>But what about frontend state migrations?</strong> Here's something most backend developers don't think about. Your frontend application state might also need migrations, whether it's stored in localStorage, IndexedDB, or persisted in your database.
        </Box>
        <Box variant="p">
        When you change your frontend data structures, existing users have old data that breaks your new code. You need migration functions:
        </Box>
        <pre><code className="language-javascript">
          {`
const migrate140 = (state) => {
  const updatedState = { ...state };
  delete updatedState.progress.progressMessage;
  updatedState.schema = '1.4.0';
  return updatedState;
};

// Check schema version and migrate if needed
const loadPlayerState = () => {
  let state = JSON.parse(localStorage.getItem('playerState'));
  if (state.schema === '1.3.0') {
    state = migrate140(state);
  }
  return state;
};
          `}
        </code></pre>
        <Box variant="p">
          <strong>Why is this important?</strong> Because unlike server migrations that you control, frontend migrations need to handle any possible combination of old and new data that users might have sitting in their browsers. It's like doing database migrations, but for every possible version your users might have installed.
        </Box>
        <Box variant="p">
          Learn to think in terms of backwards-compatible changes, rollback strategies, and data integrity. Tools like Flyway or Django's migration system become essential for server-side changes, but you'll also need to build your own migration system for frontend state.
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        Why Should I Care About the OWASP Top 10?
      </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
          Frontend security is mostly about sanitizing inputs and not storing sensitive data in localStorage. Backend security is existential—a vulnerability can mean stolen user data, compromised systems, or regulatory fines.
        </Box>
        <Box variant="p">
          The OWASP Top 10 is your starting checklist:
        </Box>
        <Box variant="p">
          <strong>What are injection attacks?</strong> SQL injection, NoSQL injection, command injection. Use parameterized queries, input validation, and principle of least privilege for database users.
        </Box>
        <Box variant="p">
          <strong>How do you handle authentication properly?</strong> Implement proper session management, multi-factor authentication, and secure password policies. Don't roll your own crypto.
        </Box>
        <Box variant="p">
          <strong>What counts as sensitive data exposure?</strong> Encrypt data at rest and in transit. Use HTTPS everywhere. Be careful about what you log—passwords and tokens should never appear in log files.
        </Box>
        <Box variant="p">
          <strong>What is security misconfiguration?</strong> Default passwords, unnecessary services, verbose error messages that leak implementation details. Security should be part of your deployment checklist.
        </Box>
        <Box variant="p">
          The key mindset shift: every input is potentially malicious, every error message might leak sensitive information, and every dependency introduces potential vulnerabilities. Security reviews become as important as code reviews.
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        How Do I Monitor Systems That Never Sleep?
      </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        In frontend development, errors usually mean users see a broken interface. In backend development, errors can mean data corruption, service outages, or security breaches—and they often happen silently.
        </Box>
        <Box variant="h3">
        What metrics actually matter?
        </Box>
        <Box variant="p">
          You need comprehensive monitoring across several dimensions.
        </Box>
        <ul>
          <li>
            <strong>Application metrics.</strong> Response times, error rates, throughput. These tell you how your code is performing.
          </li>
          <li>
            <strong>Infrastructure metrics.</strong> CPU usage, memory consumption, disk I/O, network latency. These tell you how your servers are performing.
          </li>
          <li>
            <strong>Business metrics.</strong> User registrations, transaction volumes, feature usage. These tell you how your application is performing from a business perspective.
          </li>
        </ul>
        <Box variant="h3">
        When should I set up alerts?
        </Box>
        <Box variant="p">
          In the world of fast-pased world of feature development, Metrics and Alerts are often overlooked.
          Purely technical concerns like monitoring, are difficult
          to get prioritized over feature development. But, evenutally, something breaks. While investigating the failure, use the log files to build evidence for how the failure could have been detected earlier.
          That evidence is what product managers need to prioritize monitoring and alerting.
        </Box>
        <Box variant="h3">
        How do I set up alerts that don't annoy me?
        </Box>
        <Box variant="p">
          Set up alerting that's actionable—not so noisy that you ignore it, but comprehensive enough that you know about problems before your users do.
        </Box>
        <ul>
          <li>
            <strong>Critical alerts.</strong> Wake someone up (service down, data corruption)
          </li>
          <li>
            <strong>Warning alerts.</strong> Review during business hours (high error rate, performance degradation)
          </li>
          <li>
            <strong>Info alerts.</strong> Include in daily/weekly reports (capacity trends, usage patterns)
          </li>
        </ul>
        <Box variant="p">
          Tools like DataDog, New Relic, or open-source options like Prometheus + Grafana become essential parts of your stack.
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        What Happens When Your Server Dies at 2 AM?
      </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        Frontend applications scale by being cached on CDNs and served statically. Backend applications need to handle variable load while maintaining performance and availability.
        </Box>
        <Box variant="p">
          <strong>What is horizontal scaling?</strong> Adding more servers when load increases. This requires your application to be stateless—session data stored in Redis or databases, not in server memory.
        </Box>
        <Box variant="p">
          <strong>How do auto-scaling groups work?</strong> They automatically add or remove servers based on metrics like CPU usage or request volume. But scaling isn't just about handling success—it's about surviving failure.
        </Box>
        <Box variant="h3">
        What failure scenarios should you plan for?
        </Box>
        <Box variant="p">
          Consider these scenarios that will definitely happen to you.
        </Box>
        <ul>
          <li>
          One of your servers dies during peak traffic
          </li>
          <li>
          Your database becomes a bottleneck
          </li>
          <li>
          A dependency service goes down
          </li>
          <li>
          Network partitions isolate parts of your system
          </li>
        </ul>
        <Box variant="p">
        Design for these failures from the beginning. Use health checks, circuit breakers, graceful degradation, and bulkheads to isolate failures. Chaos engineering—intentionally breaking things to see how your system responds—becomes a valuable practice once you realize how many ways things can break.
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        Why Do I Need Step-by-Step Guides for Disasters?
      </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        At 2 AM when your service is down and users are angry, you don't want to be trying to remember how to diagnose database connection issues or rollback a deployment. You want a step-by-step guide that anyone on your team can follow.
        </Box>
        <Box variant="h3">
        What are playbooks?
        </Box>
        <Box variant="p">
          They cover common operational scenarios.
        </Box>
        <ul>
          <li>
          How to deploy a new version
          </li>
          <li>
          How to rollback when things go wrong
          </li>
          <li>
          How to add capacity during traffic spikes
          </li>
          <li>
          How to investigate performance issues
          </li>
        </ul>
        <Box variant="p">
          For instance, a Playbook for incident response might include these steps.
          They should be as simple and straightforward as possible, so that you
          can follow them at 2 AM.
        </Box>
        <ol>
          <li>
            Detect the incident - Verify the failure.
          </li>
          <li>
            Setup a communication channel - typically a Slack channel for the incident.
          </li>
          <li>
            Collect information - When did it start? How bad is it?
          </li>
          <li>
            Notify affected customers
          </li>
          <li>
            Delegate the incident to the team that manintains the failing service.
          </li>
          <li>
            Close the incident and schedule a postmortum meeting to discuss
            how to adjust operations in the future.
          </li>
        </ol>
        <Box variant="h3">
        What are runbooks?
        </Box>
        <Box variant="p">
          They cover emergency procedures.
        </Box>
        <ul>
          <li>
          Service is completely down
          </li>
          <li>
          Database is unresponsive
          </li>
          <li>
          Security incident response
          </li>
          <li>
          Data corruption recovery
          </li>
        </ul>
        <Box variant="h3">
        How detailed should these documents be?
        </Box>
        <Box variant="p">
          Detailed enough that a junior developer following them can resolve issues correctly. Include screenshots, command examples, and decision trees for common branching scenarios.
        </Box>
        <Box variant="p">
          The best teams treat runbooks as living documents, updating them every time they learn something new during an incident. Because you will have incidents, and you'll want to be prepared for them.
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        What's the Difference Between Deploying and Shipping?
      </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        Frontend deployment often means running <code className="language-javascript">npm run build</code> and uploading static files. Backend deployment means coordinating database migrations, managing multiple services, handling traffic routing, and ensuring zero-downtime deployments.
        </Box>
        <Box variant="p">
          <strong>What should continuous integration include?</strong> Your CI should run your full test suite, security scans, and build processes on every commit. Always include end-to-end tests that verify your API contracts.
        </Box>
        <Box variant="p">
          <strong>How do you deploy safely?</strong> Continuous deployment should be automated but safe. Use strategies like rolling deployments (gradually replace old servers with new ones) or canary deployments (deploy to a small percentage of servers first, monitor for issues).
        </Box>
        <Box variant="p">
          <strong>What about rollback strategies?</strong> Always have one. Database migrations are particularly tricky—you might need to maintain backwards compatibility across multiple versions. The ability to quickly revert a bad deployment is often more valuable than perfect deployments.
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        The Mindset Shift
      </Header>}>
      <SpaceBetween size="xs">
        <Box variant="p">
        The biggest change in becoming a full-stack developer isn't learning new syntax—it's adopting a different mindset about reliability, scalability, and operational responsibility.
        </Box>
        <Box variant="p">
        Frontend development is often about creating the best possible user experience. Backend development is about creating systems that work reliably even when things go wrong.
        </Box>
        <Box variant="p">
          <strong>What does it mean to think like a backend developer?</strong> You'll start thinking about failure modes, load patterns, data consistency, and operational burden. You'll become paranoid about edge cases and obsessive about monitoring. You'll realize that the most elegant code is often the most boring code—predictable, well-tested, and easy to debug at 3 AM.
        </Box>
        <Box variant="p">
        This isn't meant to be intimidating—it's meant to be realistic. Building production backend systems is a craft with its own depth and complexity. Respect that complexity, embrace the operational mindset, and you'll make the transition from frontend specialist to genuinely capable full-stack engineer.
        </Box>
        <Box variant="p">
        The good news? Frontend developers actually have some advantages in this transition. You're used to thinking about user experience, you understand asynchronous programming, and you've probably dealt with more browser quirks than most backend developers have dealt with server configurations.
        </Box>
        <Box variant="p">
        Use those strengths, learn these practices, and build systems you'd be proud to support in production.
        </Box>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
