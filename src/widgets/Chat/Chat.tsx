import styles from './Chat.module.scss';

export const Chat = () => {
  return (
    <iframe
      src={import.meta.env.VITE_RESTREAM_PROXY_URL}
      className={styles.chat}
    />
  );
};
