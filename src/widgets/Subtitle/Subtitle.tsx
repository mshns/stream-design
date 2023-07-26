import { useEffect, useState } from 'react';

import { SliderSubtitle } from 'features';

import styles from './Subtitle.module.scss';

export const Subtitle = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === SliderSubtitle.length - 1 ? 0 : prev + 1));
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className={styles.subtitle}>{SliderSubtitle[slide]}</div>;
};
