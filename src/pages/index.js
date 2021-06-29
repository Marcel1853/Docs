import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const features = [
  {
    title: 'Antworten zu Kundenfragen',
    imageUrl: 'img/undraw-faq.svg',
    description: (
      <>
        <Translate description="The homepage main heading">
          PuhFAQ ist ein Wikipedia, indem man Antworten zu beliebten Kundenfragen finden kann.
        </Translate>
      </>
    ),
  },
  {
    title: 'Viele Anleitungen',
    imageUrl: 'img/undraw-tutorial.svg',
    description: (
      <>
        Hier Bei PuhFAQ findest du auch Anleitungen, wie zum beispiel das verbinden einer Domain bei einer Website. Duchstöber doch mal <code>FAQ</code> um eine Passende Anleitung zu finden.
      </>
    ),
  },
  {
    title: 'Über PuhHosting',
    imageUrl: 'img/undraw-free.svg',
    description: (
      <>
        PuhHosting ist dein Hoster, wenn es um Kostenlose Produkte geht.
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
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
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
              PuhFAQ durchstöbern
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
