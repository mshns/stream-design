import { FC, useEffect, useState } from 'react';

import { Background, Link, Title } from './components';
import { IWidget } from 'shared';

import { BANNER_LIST } from './constants/bannerList';

import styles from './Banner.module.scss';

export const Banner: FC<IWidget> = (widget) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === BANNER_LIST.length - 1 ? 0 : prev + 1));
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={styles.banner}
      style={{
        left: widget.left,
        top: widget.top,
        width: widget.width,
        height: widget.height,
      }}
    >
      <Background icon={BANNER_LIST[slide].icon} />
      <Title title={BANNER_LIST[slide].title} />
      <Link
        url={BANNER_LIST[slide].url}
        href={BANNER_LIST[slide].href}
        command={BANNER_LIST[slide].command}
      />
    </div>
  );
};
