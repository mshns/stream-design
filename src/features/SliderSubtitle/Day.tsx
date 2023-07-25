import { Plate } from 'entities';
import data from '../../../public/data.json';
import styles from './SliderSubtitle.module.scss';

export const Day = () => (
  <div className={styles.container}>
    <Plate title={'День'} subtitle={data.day} />
    <Plate title={'Банкролл'} subtitle={data.bankroll} />
    <Plate title={'Лимит'} subtitle={data.limit} />
  </div>
);
