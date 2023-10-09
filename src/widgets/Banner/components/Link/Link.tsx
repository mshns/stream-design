import { FC } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './Link.module.scss';

interface ILink {
  href: string;
  command: string;
}

export const Link: FC<ILink> = (link) => {
  return (
    <div className={styles.link}>
      <QRCodeSVG value={'https://' + link.href} />
      <div className={styles.container}>
        <h3 className={styles.href}>{link.href}</h3>
        <h5 className={styles.description}>
          Ссылка в описании.
          <br /> Сканируй QR код или пиши команду в чате
        </h5>
        <h4 className={styles.command}>{link.command}</h4>
      </div>
    </div>
  );
};
