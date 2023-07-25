import styles from './Plate.module.scss';

interface IPlate {
  title: string;
  subtitle: string;
}

export const Plate = ({ title, subtitle }: IPlate) => (
  <div className={styles.container}>
    <span className={styles.title}>{title}</span>
    <span
      className={`${styles.subtitle} ${subtitle[0] === '-' && styles.error}`}
    >
      {subtitle}
    </span>
  </div>
);
