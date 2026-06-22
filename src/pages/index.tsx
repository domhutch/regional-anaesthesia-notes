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
        <p className="hero__subtitle">
          What's the best block for this patient?
        </p>
        <p className={styles.heroDescription}>
          A searchable, mobile-friendly reference for regional anaesthetic techniques
          matched to common surgical procedures. Evidence-based, with alternatives for
          every scenario.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Browse All Procedures
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/find-by-injury">
            Find by Injury
          </Link>
        </div>
      </div>
    </header>
  );
}

type QuickLink = {
  title: string;
  description: string;
  icon: string;
  to: string;
  emergency?: boolean;
};

const quickLinks: QuickLink[] = [
  {
    title: 'LA Toxicity & Lipid Rescue',
    icon: '\u{1F6A8}',
    description: 'AAGBI Intralipid protocol, recognition, and cardiac arrest management',
    to: '/docs/quick-reference/la-toxicity',
    emergency: true,
  },
  {
    title: 'LA Dosing & Calculations',
    icon: '\u{1F9EE}',
    description: 'Max doses, concentration tables, and adjuvants',
    to: '/docs/quick-reference/la-dosing',
  },
  {
    title: 'Standard Infusions',
    icon: '\u{1F4A7}',
    description: 'Epidural, PVB, fascia iliaca, sciatic catheter recipes',
    to: '/docs/quick-reference/standard-infusions',
  },
  {
    title: 'Antibiotic Re-dosing',
    icon: '\u{23F1}\u{FE0F}',
    description: 'Intraoperative re-dosing intervals by agent',
    to: '/docs/quick-reference/antibiotic-redosing',
  },
];

type RegionLink = {
  title: string;
  icon: string;
  examples: string;
  to: string;
};

const regionLinks: RegionLink[] = [
  {title: 'Upper Limb', icon: '\u{1F4AA}', examples: 'Shoulder, wrist ORIF, carpal tunnel', to: '/docs/category/upper-limb'},
  {title: 'Lower Limb', icon: '\u{1F9B5}', examples: 'TKR, hip, ankle, ACL, amputation', to: '/docs/category/lower-limb'},
  {title: 'Trunk', icon: '\u{1FAC1}', examples: 'Laparotomy, mastectomy, ribs, C-section', to: '/docs/category/trunk'},
  {title: 'Head & Neck', icon: '\u{1F9E0}', examples: 'Thyroidectomy, carotid endarterectomy', to: '/docs/category/head--neck'},
];

function QuickLinks(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Quick Reference</Heading>
        <div className="row">
          {quickLinks.map((link, idx) => (
            <div className="col col--3" key={idx} style={{marginBottom: '1rem'}}>
              <Link to={link.to} className={clsx('quickLinkCard', link.emergency && 'emergencyCard')}>
                <div className={styles.cardIcon}>{link.icon}</div>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegionLinks(): ReactNode {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Browse by Region</Heading>
        <div className="row">
          {regionLinks.map((region, idx) => (
            <div className="col col--3" key={idx} style={{marginBottom: '1rem'}}>
              <Link to={region.to} className="quickLinkCard">
                <div className={styles.cardIcon}>{region.icon}</div>
                <h3>{region.title}</h3>
                <p>{region.examples}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className={styles.sectionTitle}>#Blocks4ALL</Heading>
            <p style={{textAlign: 'center', fontSize: '1.05rem'}}>
              Regional anaesthesia should be offered wherever possible to our patients.
              This resource is designed for anyone on shift with ultrasound and RA skills —
              whether you're confident or just getting started. Every procedure page gives you
              a Plan A, alternatives, key anatomy, and practical considerations so you can
              make the best decision for your patient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Surgical procedures and their recommended regional anaesthetic techniques">
      <HomepageHeader />
      <main>
        <QuickLinks />
        <RegionLinks />
        <About />
      </main>
    </Layout>
  );
}
