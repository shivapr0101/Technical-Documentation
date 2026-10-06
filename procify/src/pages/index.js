import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Change titles, text, and `to` paths to match your real docs.
const sections = [
  {
    title: 'Training Guide',
    description: 'Learn the basics and get started with Procify.',
    to: '/docs/Docs/Training Guide/Basic Training',
  },
  {
    title: 'Installation',
    description: 'Install and set up Procify.',
    to: '/docs/Docs/Installation',
  },
  {
    title: 'User Guide',
    description: 'Step-by-step guides for everyday tasks and features.',
    to: '/docs/Docs/User Guide',
  },
];

export default function Home() {
  return (
    <Layout
      title="Technical Documentation"
      description="Procify Technical Documentation Portal">
      <main className={styles.page}>
        <header className={styles.hero}>
          <Heading as="h1" className={styles.heroTitle}>
            Explore the Documentation
          </Heading>
          <p className={styles.heroSubtitle}>
            Find guides, installation instructions, administration information,
            and troubleshooting help.
          </p>
        </header>

        <section className={styles.cards}>
          {sections.map(({title, description, to}) => (
            <article key={title} className={styles.card}>
              <Heading as="h2" className={styles.cardTitle}>{title}</Heading>
              <p className={styles.cardText}>{description}</p>
              <Link className={styles.cardLink} to={to}>
                Explore &rarr;
              </Link>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}
