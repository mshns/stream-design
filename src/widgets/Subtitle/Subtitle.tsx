import { useEffect, useState } from 'react';
import styles from './Subtitle.module.scss';

export const Subtitle = () => {
  const description1 = 'Twister Poker €1 / €2 / €5 / €10 на RedStar';
  const description2 = 'День 50 / Банкролл €1000 / Прошлый стрим +€100';
  const [description, setDescription] = useState(description1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDescription((prev) =>
        prev === description1 ? description2 : description1
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className={styles.subtitle}>{description}</div>;
};
