import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

const documentationCards = [
  {
    icon: '📘',
    title: 'User Guide',
    description:
      'Learn how to use, configure, and manage Procify applications with practical user documentation.',
    link: '/docs/Docs/user%20Guide/basic%20user%20guide',
    linkText: 'Explore User Guide',
  },
  {
    icon: '🎓',
    title: 'Training Guide',
    description:
      'Build your Procify skills with structured training resources designed for developers and technical teams.',
    link: '/docs/Docs/Training%20Guide/Basic%20Training',
    linkText: 'Explore Training',
  },
  {
    icon: '🚀',
    title: 'Release Notes',
    description:
      'Stay up to date with the latest Procify enhancements, fixes, features, and product changes.',
    link: '/docs/Docs/Release%20Notes/7.7.564',
    linkText: 'View Release Notes',
  },
];

const quickLinks = [
  {
    icon: '⚙️',
    title: 'Installation',
    description: 'Set up Procify and prepare your environment.',
  },
  {
    icon: '🔧',
    title: 'Configuration',
    description: 'Configure applications and platform components.',
  },
  {
    icon: '💻',
    title: 'Developer Resources',
    description: 'Explore tools, development guides, and advanced topics.',
  },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContent}>
        <div className={styles.eyebrow}>
          PROCIFY TECHNICAL DOCUMENTATION
        </div>

        <h1 className={styles.heroTitle}>
          Build. Configure.
          <br />
          <span>Learn Procify.</span>
        </h1>

        <p className={styles.heroDescription}>
          Everything you need to learn, configure, develop, and work
          effectively with Procify.
        </p>

        <div className={styles.heroButtons}>
          <Link
            className={styles.primaryButton}
            to="/docs/Docs/user%20Guide/basic%20user%20guide"
          >
            Explore Documentation
            <span>→</span>
          </Link>

          <Link
            className={styles.secondaryButton}
            to="/docs/Docs/Release%20Notes/7.7.564"
          >
            Release Notes
          </Link>
        </div>
      </div>

      <div className={styles.heroGlow}></div>
    </section>
  );
}

function DocumentationSection() {
  return (
    <section className={styles.documentationSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionLabel}>DOCUMENTATION</span>

          <h2>Explore Procify Documentation</h2>

          <p>
            Find the guides and resources you need to get started,
            configure your applications, and build with Procify.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {documentationCards.map((card) => (
            <div className={styles.documentationCard} key={card.title}>
              <div className={styles.cardIcon}>{card.icon}</div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

              <Link className={styles.cardLink} to={card.link}>
                {card.linkText}
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickAccess() {
  return (
    <section className={styles.quickAccessSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionLabel}>QUICK ACCESS</span>

          <h2>Get Started Quickly</h2>

          <p>
            Jump directly to the resources you use most often.
          </p>
        </div>

        <div className={styles.quickGrid}>
          {quickLinks.map((item) => (
            <div className={styles.quickCard} key={item.title}>
              <div className={styles.quickIcon}>{item.icon}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeveloperSection() {
  return (
    <section className={styles.developerSection}>
      <div className={styles.container}>
        <div className={styles.developerBox}>
          <div>
            <span className={styles.sectionLabel}>FOR DEVELOPERS</span>

            <h2>Build with Procify</h2>

            <p>
              Explore advanced development topics, configuration
              guidance, training resources, and technical documentation.
            </p>
          </div>

          <Link
            className={styles.developerButton}
            to="/docs/Docs/Training%20Guide/Basic%20Training"
          >
            Start Learning
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div>
            <div className={styles.footerBrand}>PROCIFY</div>

            <p>
              Technical Documentation
            </p>
          </div>

          <div className={styles.footerLinks}>
            <Link to="/docs/Docs/user%20Guide/basic%20user%20guide">
              User Guide
            </Link>

            <Link to="/docs/Docs/Training%20Guide/Basic%20Training">
              Training Guide
            </Link>

            <Link to="/docs/Docs/Release%20Notes/7.7.564">
              Release Notes
            </Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Procify. All rights reserved.</span>

          <span>Technical Documentation Portal</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <Layout
      title="Procify Technical Documentation"
      description="Everything you need to learn, configure, develop, and work with Procify."
    >
      <main>
        <Hero />
        <DocumentationSection />
        <QuickAccess />
        <DeveloperSection />
        <Footer />
      </main>
    </Layout>
  );
}