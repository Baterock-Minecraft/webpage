import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Built on Minecraft',
    imageUrl: 'img/Minecraft.jpg',
    description: (
      <>
        Minecraft is a perfect platform for everyone to collaborate virtually. It is creative, fun, open—especially for a younger audience. Enjoy every minute you spend on our Minecraft server!
      </>
    ),
  },
  {
    title: 'Promotion of debate culture',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Debate is a highly academic activity. It encompasses topics from international relations to political theories, from logic fallacies to modes of persuasion. We hope that this knowledge can be spread to a wider population.
      </>
    ),
  },
  {
    title: 'Hosts debate tournaments',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Virtual debate tournaments now have one more option: instead of having a monotonous Zoom / Discord call, you may now interact &quot;physically&quot; in our Minecraft world.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Baterock">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
