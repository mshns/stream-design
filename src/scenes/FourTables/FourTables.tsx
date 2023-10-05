import { Badge, Banner, Chat, Donate, Subtitle, Title } from 'widgets';

import styles from './FourTables.module.scss';

export const FourTables = () => {
  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>
          <Title />
          <Subtitle />
        </header>
      </main>
      <Badge />
      <Chat />
      <Banner />
      <Donate />
    </>
  );
};
