import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const documentationCards = [
  {
    title: 'User Guide',
    description:
      'Learn how to use and configure Procify applications with practical user documentation.',
    link: '/docs/Docs/user%20Guide/basic%20user%20guide',
    icon: '📘',
  },
  {
    title: 'Training Guide',
    description:
      'Build your Procify skills with structured training resources for developers.',
    link: '/docs/Docs/Training%20Guide/Basic%20Training',
    icon: '🎓',
  },
  {
    title: 'Release Notes',
    description:
      'Explore the latest Procify release information, enhancements, fixes, and changes.',
    link: '/docs/Docs/Release%20Notes/7.7.564',
    icon: '🚀',
  },
];

function FeatureCard({title, description, link, icon}) {
  return (
    <Link className={styles.card} to={link}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.learnMore}>
        Explore documentation →
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout
      title="Procify Technical Documentation"
      description="Procify Technical Documentation Portal"
    >
      <main>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>

            <div className={styles.badge}>
              PROCIFY TECHNICAL DOCUMENTATION
            </div>

            <h1>
              Build. Configure.
              <span> Learn Procify.</span>
            </h1>

            <p className={styles.heroDescription}>
              Welcome to the Procify Technical Documentation Portal.
              Find user guides, training resources, release notes, and
              technical documentation in one place.
            </p>

            <div className={styles.heroButtons}>
              <Link
                className={styles.primaryButton}
                to="/docs/Docs/user%20Guide/basic%20user%20guide"
              >
                Start with User Guide
              </Link>

              <Link
                className={styles.secondaryButton}
                to="/docs/Docs/Training%20Guide/Basic%20Training"
              >
                Explore Training
              </Link>
            </div>

          </div>
        </section>

        {/* Documentation */}
        <section className={styles.documentation}>

          <div className={styles.sectionHeader}>
            <h2>Documentation</h2>
            <p>
              Everything you need to learn, configure, and work with Procify.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {documentationCards.map((card) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                description={card.description}
                link={card.link}
                icon={card.icon}
              />
            ))}
          </div>

        </section>

        {/* Quick Access */}
        <section className={styles.quickAccess}>

          <div className={styles.sectionHeader}>
            <h2>Quick Access</h2>
            <p>
              Access frequently used documentation.
            </p>
          </div>

          <div className={styles.quickGrid}>

            <Link to="/docs/Docs/user%20Guide/basic%20user%20guide">
              <strong>User Guide</strong>
              <span>
                Learn the basics of working with Procify.
              </span>
            </Link>

            <Link to="/docs/Docs/Training%20Guide/Basic%20Training">
              <strong>Basic Training</strong>
              <span>
                Start learning Procify development fundamentals.
              </span>
            </Link>

            <Link to="/docs/Docs/Release%20Notes/7.7.564">
              <strong>Release Notes</strong>
              <span>
                View the latest Procify release information.
              </span>
            </Link>

          </div>

        </section>

        {/* Developer Resources */}
        <section className={styles.developerSection}>

          <div>

            <span className={styles.smallTitle}>
              FOR DEVELOPERS
            </span>

            <h2>
              Everything you need to build with Procify.
            </h2>

            <p>
              Explore technical documentation, training resources,
              configuration guidance, and product updates to help
              you develop and maintain Procify applications.
            </p>

            <Link
              className={styles.primaryButton}
              to="/docs/Docs/Training%20Guide/Basic%20Training"
            >
              View Training Guide
            </Link>

          </div>

        </section>

        {/* Release Notes */}
        <section className={styles.releaseSection}>

          <div className={styles.releaseContent}>

            <div>

              <span className={styles.smallTitle}>
                STAY UPDATED
              </span>

              <h2>
                What's new in Procify?
              </h2>

              <p>
                Stay informed about the latest Procify enhancements,
                fixes, and product changes.
              </p>

            </div>

            <Link
              className={styles.secondaryButton}
              to="/docs/Docs/Release%20Notes/7.7.564"
            >
              View Release Notes →
            </Link>

          </div>

        </section>

      </main>
    </Layout>
  );
}