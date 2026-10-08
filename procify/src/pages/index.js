import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const features = [
  'Low-code visual tools',
  'Deploy anywhere',
  'Online & offline',
  'Enterprise integrations',
  'Monthly updates',
];

const solutions = [
  'Asset Management',
  'Warehouse Mobility',
  'Track & Trace',
  'STO Management',
  'Field Service',
  'B2B Complaints',
];

export default function Home() {
  return (
    <Layout title="Procify Technical Documentation">
      <main>
        <section className="hero">
          <p>BUILT FOR WHAT YOU RUN</p>
          <h1>Procify Technical Documentation</h1>
          <h2>
            An enterprise-class low-code platform for transforming business
            ideas into outcomes.
          </h2>

          <Link className="button button--primary" to="/docs/Docs/user%20Guide/basic%20user%20guide">
            Explore Documentation
          </Link>
        </section>

        <section className="section">
          <h2>Key Features</h2>
          <div className="grid">
            {features.map(x => <div className="card" key={x}>{x}</div>)}
          </div>
        </section>

        <section className="section">
          <h2>Ready-to-Deploy Solutions</h2>
          <div className="grid">
            {solutions.map(x => <div className="card" key={x}>{x}</div>)}
          </div>
        </section>

        <section className="section dark">
          <h2>One Platform. Two Builders.</h2>
          <div className="grid">
            <div className="card">Business Users<br /><b>No Code</b></div>
            <div className="card">Developers<br /><b>Low Code</b></div>
          </div>
        </section>

        <section className="section">
          <h2>Get Started</h2>
          <p>
            Everything you need to learn, configure, and work with Procify.
          </p>
          <Link className="button button--primary" to="/docs/Docs/Training%20Guide/Basic%20Training">
            Training Guide
          </Link>
        </section>
      </main>
    </Layout>
  );
}