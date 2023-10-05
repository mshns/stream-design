import styles from './Donate.module.scss';

export const Donate = () => {
  return (
    <div className={styles.donate}>
      <div className={styles.slider}>
        <h3 className={styles.title}>Сбор на поддержку канала</h3>
        <h3 className={styles.title}>Спасибо за донаты</h3>
      </div>
    </div>
  );
};
