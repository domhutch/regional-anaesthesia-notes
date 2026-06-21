import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Searchable',
    description: (
      <>
        Find the right block for any procedure instantly. Full-text search
        across all procedures, techniques, and anatomical landmarks.
      </>
    ),
  },
  {
    title: 'Evidence-Based',
    description: (
      <>
        Each procedure page includes recommended regional techniques with
        references to current guidelines and evidence.
      </>
    ),
  },
  {
    title: 'Mobile-Friendly',
    description: (
      <>
        Designed for use at the bedside or in theatre. Works on any device
        with no app download required.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md" style={{paddingTop: '2rem'}}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
