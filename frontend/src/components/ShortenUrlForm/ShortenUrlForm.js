import { useState } from "react";
import generateShortenUrl from "../../api/shortenUrl";
import LastCreatedToast from "../LastCreatedToast/LastCreatedToast";
import styles from './ShortenUrlForm.module.scss';

export default function ShortenUrlForm () {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [toastData, setToastData] = useState(null);

  const onSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    const inputValue = event.target.urlInput.value.trim();

    const urlGenerationResponse = await generateShortenUrl(inputValue);

    if (urlGenerationResponse.status === 'success') {
      setToastData(urlGenerationResponse.data);
    } else {
      setErrorMessage(urlGenerationResponse.message);
    }

    setLoading(false);
  }

  return (
    <main className={styles.content}>
      <h1>Url shortener</h1>
      <form onSubmit={onSubmit}>
        <label>
          <span className={styles.description}>Paste a long URL</span>
          <input className={styles.urlInput} name="urlInput" onChange={() => setErrorMessage('')} />
        </label>

        {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}

        <button
          disabled={loading}
          className={`${styles.submitButton} ${loading ? styles.loading : ""}`}
          type="submit">
            Do this url short
        </button>

        {toastData && <LastCreatedToast shortUrl={toastData.shortUrl} longUrl={toastData.longUrl} />}
      </form>
    </main>
  );
};