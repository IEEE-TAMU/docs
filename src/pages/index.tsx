import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/infrastructure/intro">
            Infrastructure 🏗️
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{marginLeft: '1rem'}}
            to="/docs/external-services/brevo">
            External Services ☁️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Documentation for IEEE TAMU Infrastructure and Operations">
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row">
            <div className="col col--12" style={{textAlign: 'center', padding: '2rem'}}>
              <p>
                Welcome to the IEEE TAMU documentation site. Here you can find information about our infrastructure, applications, and how we operate.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
