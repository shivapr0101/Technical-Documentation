import React from 'react';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Procify Technical Documentation"
      description="Procify Technical Documentation"
    >
      <main className={styles.page}>

        <div className={styles.container}>

          <div className={styles.breadcrumb}>
            Documentation
          </div>

          <header className={styles.header}>
            <h1>Procify Technical Documentation</h1>

            <p>
              Everything you need to learn, configure, and work with Procify.
            </p>
          </header>

          <div className={styles.divider} />

          <section className={styles.section}>

            <h2>Documentation</h2>

            <div className={styles.grid}>

              <Link
                className={styles.card}
                to="/docs/Docs/user%20Guide/basic%20user%20guide"
              >
                <div className={styles.cardIcon}>
                  📘
                </div>

                <div>
                  <h3>User Guide</h3>

                  <p>
                    Learn how to configure and use Procify features and
                    functionality.
                  </p>

                  <span>
                    Open User Guide →
                  </span>
                </div>
              </Link>

              <Link
                className={styles.card}
                to="/docs/Docs/Training%20Guide/Basic%20Training"
              >
                <div className={styles.cardIcon}>
                  🎓
                </div>

                <div>
                  <h3>Training Guide</h3>

                  <p>
                    Follow structured training material to learn Procify
                    development and configuration.
                  </p>

                  <span>
                    Open Training Guide →
                  </span>
                </div>
              </Link>

              <Link
                className={styles.card}
                to="/docs/Docs/Release%20Notes/7.7.564"
              >
                <div className={styles.cardIcon}>
                  📋
                </div>

                <div>
                  <h3>Release Notes</h3>

                  <p>
                    Review new features, enhancements, fixes, and changes
                    introduced in Procify releases.
                  </p>

                  <span>
                    View Release Notes →
                  </span>
                </div>
              </Link>

            </div>
          </section>

          <section className={styles.quickLinks}>

            <h2>Quick Access</h2>

            <div className={styles.quickGrid}>

              <Link to="/docs/Docs/user%20Guide/basic%20user%20guide">
                Getting Started
              </Link>

              <Link to="/docs/Docs/Training%20Guide/Basic%20Training">
                Basic Training
              </Link>

              <Link to="/docs/Docs/Release%20Notes/7.7.564">
                What's New
              </Link>

            </div>

          </section>

        </div>

      </main>
    </Layout>
  );
}