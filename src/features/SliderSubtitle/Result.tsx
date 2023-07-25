import { Plate } from 'entities';
import data from '../../../public/data.json';

import styles from './SliderSubtitle.module.scss';

export const Result = () => (
  <div className={styles.container}>
    <Plate title={'Прошлый стрим'} subtitle={data.result} />
    <Plate title={'Профит'} subtitle={data.profit} />
    <Plate title={'Рэйкбэк'} subtitle={data.rakeback} />
  </div>
);
