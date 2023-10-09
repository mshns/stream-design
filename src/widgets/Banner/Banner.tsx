import { FC } from 'react';
import styles from './Banner.module.scss';
import { Background, Link, Title } from './components';
import { IWidget } from 'shared';

export const Banner: FC<IWidget> = (widget) => {
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
      <Background />
      <Title />
      <Link href={'storo08.ru/redstar'} command={'!redstar'} />
    </div>
  );
};
