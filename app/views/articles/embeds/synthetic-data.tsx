import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const SyntheticData = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  return <Container media={{
    content: <img src={article?.image} alt="" />
  }}>
    <SpaceBetween size="m">
      <h2>What</h2>
      <p>
        A few weeks ago, Google published an article exploring the
        best practices and lessons learned from "Synthetic data." Synthetic data
        is the use of Large Language Models (LLMs) to generate training data
        for other LLMs- using AI to train better AIs.
      </p>
      <p>
        It covers three key areas where synthetic data can be used, evaluation, training, and reasoning, and highlights the challenges and limitations associated with its use. Overall, the article emphasizes the importance of carefully considering these factors when working with synthetic data in language modeling applications.
      </p>
      <p>
        Synthetic data can be an effective supplement or alternative to real-world data for training Large Language Models (LLMs). However, below are some of the challenges with
        this approach.
      </p>
      <ul>
        <li>
          It's difficult to "ensuring the factuality ... of the data." Hallucinations in the training data create more hallucinations from the trained model. Biases also become amplified.
        </li>
        <li>
          The synthetic data must "accurately reflects the complex patterns and relationships found in real-world data."
        </li>
        <li>
          It's possible for bad actors to create intentionally misleading training data in order to create LLMs that produce misinformation. "This can be particularly dangerous when synthetic data is used to impersonate real people, manipulate public opinion, or influence political processes."
        </li>
        <li>
          We expect AIs to act according to common human values. This alignment comes as a byproduct of real-wold training data. Synthetic data may not have these values embedded in them. This can cause models to behave in ways that are "misaligned with human expectations."
        </li>
      </ul>
      <h2>Who</h2>
      <p>
        Google Deep Mind
      </p>
      <p>
        <ExternalLink href="https://arxiv.org/pdf/2404.07503">
          View the PDF
        </ExternalLink>
      </p>
      <h2>Why</h2>
      <p>
        <ExternalLink href="https://www.forbes.com/sites/forbescommunicationscouncil/2023/12/22/artificial-intelligence-and-the-future-of-content-marketing/?sh=151a18e63e23">Many people</ExternalLink> have forcasted that AI will dramatically change the content marketing industry as
        we know it. We've all read marketing articles that were devoid of actual content,
        and those were written by humans. You can imagine the burden that is lifted from
        content marketers now that a robot can do their homework.
      </p>
      <p>
        Most LLMs, such as ChatGPT, Llama, and Claude, were training in-part by scraping
        text from websites. As people increase their use of LLMs to generate content for
        their websites, this source of text becomes increasingly synthetic.
      </p>
      <p>
        Using scraped web content to train LLMs then amplifies the challenges this article points out- biases get amplified, hallucinations become real, and facts are replaced with convincing lies.
      </p>
    </SpaceBetween>
  </Container>;
};
