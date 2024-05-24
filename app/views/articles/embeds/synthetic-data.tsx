import { Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';

/* eslint-disable max-lines-per-function */
export const SyntheticData = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll();
    }, 0);
  }, []);

  return <SpaceBetween size="l">
    <Container
      header={<Header variant="h2">Exploring the limitations of using AI to generate training data for better AIs</Header>}
      media={{
        content: <img src={article?.image} alt="" />
      }}>
      <SpaceBetween size="m">
        <h3>What</h3>
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
          It's difficult to ensure "the factuality and fidelity of the data." Hallucinations in the training data create more hallucinations from the trained model. For instance, if synthetic data is generated based on certain assumptions or preferences, these biases could be reflected in the model's output. This could potentially lead to inaccurate or unfair predictions, particularly for sensitive applications such as hiring decisions.
          </li>
          <li>
          The synthetic data must "accurately reflect the complex patterns and relationships found in real-world data," which can lead to models that perform well on synthetic data but struggle with real data.
          </li>
          <li>
          It's possible for bad actors to create intentionally misleading training data in order to create LLMs that produce misinformation. "This can be particularly dangerous when synthetic data is used to impersonate real people, manipulate public opinion, or influence political processes."
          </li>
          <li>
          We expect AIs to act according to common human values. This alignment comes as a byproduct of real-wold training data. Synthetic data may not have these values embedded in them. This can cause models to behave in ways that are "misaligned with human expectations."
          </li>
        </ul>
        <p>
          <ExternalLink href="https://arxiv.org/pdf/2404.07503">
          View the PDF
          </ExternalLink>
        </p>
        <h3>Who</h3>
        <p>
        Google DeepMind
          <br />Stanford University
          <br />Georgia Institute of Technology
        </p>
        <h3>Why</h3>
        <p>
          <ExternalLink href="https://www.forbes.com/sites/forbescommunicationscouncil/2023/12/22/artificial-intelligence-and-the-future-of-content-marketing/?sh=151a18e63e23">Many people</ExternalLink> have forecasted that AI will dramatically change the content marketing industry as we know it. We've all read marketing articles that were devoid of actual content, and those were written by humans. You can imagine the burden that is lifted from content marketers now that a robot can do their homework.
        </p>
        <p>
          Most LLMs, such as ChatGPT, Llama, and Claude, were trained in-part by scraping text from websites. As people increase their use of LLMs to generate content for their websites, this source of text becomes increasingly synthetic.
        </p>
        <p>
          Using scraped web content to train LLMs amplifies the challenges Google's article points out- biases and hallucinations become more ingrained and facts are replaced with convincing lies.
        </p>
      </SpaceBetween>
    </Container>
    <Container header={<Header variant="h2">Benifits of synthetic data</Header>}>
      <SpaceBetween size="m">
        <p>
        Desipite its limitations and challenges, generating synthetic data is still an essential skill for those learning to create machine learning models.
        </p>
        <p>
        Synthetic data provides a controlled environment for training and evaluating LLMs that is consistent and repeatable. This can be particularly useful in the early stages of model development, where it's important to gain a deep understanding of how the model behaves.
        </p>
        <p>
        LLMs require vast quantities of training data to achieve good performance. Synthetic data can be used to augment existing datasetsin a more cost-effective way. Synthetic data can also be generated in-house, reducing reliance on external data sources and minimizing costs associated with purchasing or licensing data.
        </p>
      </SpaceBetween>
    </Container>
    <Container header={<Header variant="h2">How to create synthetic data with scikit-learn</Header>}>
      <SpaceBetween size="m">
        <p>
        Before you begin, you will need to install the sklearn package. It's recommended to also use a virtual environment (venv).
        </p>
        <pre><code className="language-bash">{`
$ python -m venv sklearn-env
$ source sklearn-env/bin/activate  # activate
$ pip install -U scikit-learn matplotlib
      `}</code></pre>
        <p>
          <code>sci-learn</code> has many different methods for creating synthetic data. <code>make_regression</code> and <code>make_classification</code> are two of the most valuable, but this example focuses on <code>make_blobs</code>. With <code>make_blobs</code> the <code>centers</code> parameter controls the number of clustered data points to be generated.
        </p>
        <pre><code className="language-python">{`
from sklearn.datasets import make_blobs

features, target = make_blobs(
  n_samples = 100,
  n_features = 2,
  centers = 4,
  cluster_std = 0.3,
  shuffle = True,
  random_state = 1
)

print('features ', features[:3])
print('target ', target[:3])
      `}</code></pre>
        <p>We can then see the distibution with the <code>matplotlib</code> library.</p>
        <pre><code className="language-python">{`
import matplotlib.pyplot as plot

plot.scatter(features[:,0], features[:,1], c=target)
plot.show()
      `}</code></pre>
        <img style={{ maxWidth: 500 }} src="https://bishopz.s3.amazonaws.com/2024/scilearn-distribution.webp" alt="graph showing dot plot distribution in four clusters" />
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
