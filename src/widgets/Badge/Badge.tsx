import { useEffect, useState } from 'react';

import { SUBTITLE_LIST } from './constants/subtitleList';
import styles from './Badge.module.scss';

export const Badge = () => {
  const [subtitle, setSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitle((prev) => (prev === SUBTITLE_LIST.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.badge}>
      <h3 className={styles.title}>Александр 'storo08'</h3>
      <h4 className={styles.subtitle}>{SUBTITLE_LIST[subtitle]}</h4>
    </div>
  );
};
