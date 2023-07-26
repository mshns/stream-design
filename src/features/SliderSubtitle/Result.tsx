import { Plate } from 'entities';

import styles from './SliderSubtitle.module.scss';
import { useEffect, useState } from 'react';

export const Result = () => {
  const [result, setResult] = useState('');
  const [profit, setProfit] = useState('');
  const [rakeback, setRakeback] = useState('');

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setResult(data.result);
        setProfit(data.profit);
        setRakeback(data.rakeback);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Plate title={'Прошлый стрим'} subtitle={result} />
      <Plate title={'Профит'} subtitle={profit} />
      <Plate title={'Рэйкбэк'} subtitle={rakeback} />
    </div>
  );
};
