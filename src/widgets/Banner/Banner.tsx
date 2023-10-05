import { ReactComponent as RedstarChip } from '../../shared/assets/svg/redstar-chip.svg';

import styles from './Banner.module.scss';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.background}>
        <RedstarChip className={styles.logo} />
      </div>
      <h3 className={styles.text}>
        Рейкбэк до 35%
        <br />и другие бонусы
        <br /> на RedStar
      </h3>
    </div>
  );
};
