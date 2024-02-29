import { FC, ReactElement } from 'react';
import styles from './Title.module.scss';

interface ITitle {
  title: ReactElement;
}

export const Title: FC<ITitle> = ({ title }) => {
  return <h3 className={styles.title}>{title}</h3>;
};
