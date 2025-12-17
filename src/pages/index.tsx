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
                Welcome to the IEEE TAMU documentation site. Explore our infrastructure, services, and operational flows.
              </p>
            </div>
          </div>
          <div className="row" style={{paddingBottom: '2rem'}}>
            <div className="col col--3">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">🏗️ Infrastructure</Heading>
                </div>
                <div className="card__body">
                  <p>Hardware, Kubernetes cluster, and foundational platform services.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/docs/infrastructure/intro">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col--3">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">☁️ External Services</Heading>
                </div>
                <div className="card__body">
                  <p>Third-party services: Discord, Cloudflare, GitHub, Flywire, and more.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/docs/external-services/intro">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col--3">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">🛠️ Internal Services</Heading>
                </div>
                <div className="card__body">
                  <p>Member Portal, Discord Bot, Homepage, and Cloudflare Workers.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/docs/internal-services/intro">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col--3">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">🔄 Example Flows</Heading>
                </div>
                <div className="card__body">
                  <p>End-to-end flows for payments, events, email setup, and more.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/docs/flows/intro">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
