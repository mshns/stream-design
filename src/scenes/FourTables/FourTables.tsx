import styles from './FourTables.module.scss';
import { Subtitle, Title } from 'widgets';

export const FourTables = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Title />
        <Subtitle />
      </header>
    </main>
  );
};
