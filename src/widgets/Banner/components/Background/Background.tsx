import { ReactComponent as RedstarChip } from 'shared';

import styles from './Background.module.scss';

export const Background = () => {
  return (
    <div className={styles.background}>
      <ul className={styles.circles}>
        {[...Array(10)].map((_item, index) => (
          <li key={index}>
            <RedstarChip className={styles.logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
