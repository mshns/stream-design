import styles from './Badge.module.scss';

export const Badge = () => {
  return (
    <div className={styles.badge}>
      <h3 className={styles.title}>Александр 'storo08'</h3>
      <h4 className={styles.subtitle}>Профессиональный игрок в покер</h4>
    </div>
  );
};
