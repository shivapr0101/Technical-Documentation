import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
 
const VERSION = '7.7.564';
 
const DOCS = {
  user: '/docs/Docs/user Guide/basic user guide',
  training: '/docs/Docs/Training Guide/Basic Training',
  release: '/docs/Docs/Release Notes/7.7.564',
};
 
const guides = [
  {
    icon: '📘',
    title: 'User Guide',
    text: 'Learn how to configure and use Procify features and functionality.',
    cta: 'Open User Guide',
    to: DOCS.user,
  },
  {
    icon: '🎓',
    title: 'Training Guide',
    text: 'Follow structured training material to learn Procify development and configuration.',
    cta: 'Open Training Guide',
    to: DOCS.training,
  },
  {
    icon: '📋',
    title: 'Release Notes',
    text: 'Review new features, enhancements, fixes and changes introduced in Procify releases.',
    cta: 'View Release Notes',
    to: DOCS.release,
  },
];
 
const features = [
  {
    title: 'Low-code visual tools',
    text: 'Design data models, screens and workflows in visual editors. Most tasks need no complex coding.',
    icon: (
      <>
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </>
    ),
  },
  {
    title: 'Build once, deploy anywhere',
    text: 'A single design works as both a web portal and a mobile app, on Android and iOS.',
    icon: (
      <>
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </>
    ),
  },
  {
    title: 'Online and offline support',
    text: 'Apps work without internet. Data syncs automatically when connectivity returns.',
    icon: (
      <>
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </>
    ),
  },
  {
    title: 'Enterprise integrations',
    text: 'Built-in connectors for SAP, OData and custom APIs, so you can plug into existing systems.',
    icon: (
      <>
        <path d="M12 22v-5" />
        <path d="M9 8V2" />
        <path d="M15 8V2" />
        <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
      </>
    ),
  },
  {
    title: 'Monthly platform updates',
    text: 'Procify releases improvements every month, without rebuilding your apps from scratch.',
    icon: (
      <>
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </>
    ),
  },
];
 
const quick = [
  {label: 'Getting Started', to: DOCS.user},
  {label: 'Basic Training', to: DOCS.training},
  {label: "What's New", to: DOCS.release},
];
 
function Hero() {
  const bgLight = useBaseUrl('/img/procify-hero-bg.svg');
  const bgDark = useBaseUrl('/img/procify-hero-bg-dark.svg');
  return (
    <header
      className={styles.hero}
      style={{'--hero-bg': `url(${bgLight})`, '--hero-bg-dark': `url(${bgDark})`}}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Documentation</p>
        <Heading as="h1" className={styles.heroTitle}>
          Procify Technical Documentation
        </Heading>
        <p className={styles.heroLead}>
          An enterprise-class low-code platform for transforming business ideas
          into outcomes.
        </p>
        <div className={styles.actions}>
          <Link className={styles.btnPrimary} to={DOCS.user}>
            Get started →
          </Link>
          <Link className={styles.btnGhost} to={DOCS.release}>
            What's new in {VERSION}
          </Link>
        </div>
        <span className={styles.version}>Latest release {VERSION}</span>
      </div>
    </header>
  );
}
 
function Guides() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Heading as="h2" className={styles.h2}>
          Find what you need
        </Heading>
        <div className={styles.cards}>
          {guides.map((g) => (
            <Link key={g.title} to={g.to} className={styles.card}>
              <span className={styles.cardIcon} aria-hidden="true">
                {g.icon}
              </span>
              <Heading as="h3" className={styles.cardTitle}>
                {g.title}
              </Heading>
              <p className={styles.cardText}>{g.text}</p>
              <span className={styles.cardCta}>{g.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
 
function Features() {
  return (
    <section className={`${styles.section} ${styles.alt}`}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Key features</p>
        <Heading as="h2" className={styles.h2}>
          Configure enterprise apps visually, then run them on web and mobile
        </Heading>
        <ul className={styles.features}>
          {features.map((f) => (
            <li key={f.title} className={styles.feature}>
              <svg
                className={styles.featureIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true">
                {f.icon}
              </svg>
              <div>
                <Heading as="h3" className={styles.featureTitle}>
                  {f.title}
                </Heading>
                <p className={styles.featureText}>{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
 
function QuickAccess() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Heading as="h2" className={styles.h2}>
          Quick access
        </Heading>
        <div className={styles.quick}>
          {quick.map((q) => (
            <Link key={q.label} to={q.to} className={styles.pill}>
              {q.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default function Home() {
  return (
    <Layout
      title="Procify Technical Documentation"
      description="Procify user guide, training guide and release notes.">
      <Hero />
      <main>
        <Guides />
        <Features />
        <QuickAccess />
      </main>
    </Layout>
  );
}