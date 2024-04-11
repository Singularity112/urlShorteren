import styles from './LastCreatedToast.module.scss';
import { ReactComponent as CopyIcon } from './CopyIcon.svg';

export default function LastCreatedToast ({shortUrl, longUrl}) {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <section className={styles.content}>
      <div className={styles.shortUrlContainer}>
        <a className={styles.shortUrl} href={shortUrl} target="_blank" rel="noreferrer">
          {shortUrl}
        </a>

        <i onClick={copyToClipboard} className={styles.copyIconContainer}><CopyIcon /></i>
      </div>

      <div className={styles.longUrl}>
        {longUrl}
      </div>
    </section>
  );
};