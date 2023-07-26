import { Plate } from 'entities';
import styles from './SliderSubtitle.module.scss';
import { useEffect, useState } from 'react';

export const Day = () => {
  const [day, setDay] = useState('');
  const [bankroll, setBankroll] = useState('');
  const [limit, setLimit] = useState('');

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setDay(data.day);
        setBankroll(data.bankroll);
        setLimit(data.limit);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Plate title={'День'} subtitle={day} />
      <Plate title={'Банкролл'} subtitle={bankroll} />
      <Plate title={'Лимит'} subtitle={limit} />
    </div>
  );
};
