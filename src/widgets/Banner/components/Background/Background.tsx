import { FC } from 'react';

import styles from './Background.module.scss';

interface IBackground {
  icon: string;
}

export const Background: FC<IBackground> = ({ icon }) => {
  return (
    <div className={styles.background}>
      <ul className={styles.circles}>
        {[...Array(10)].map((_item, index) => (
          <li
            className={styles.icon}
            style={{ backgroundImage: icon }}
            key={index}
          ></li>
        ))}
      </ul>
    </div>
  );
};
