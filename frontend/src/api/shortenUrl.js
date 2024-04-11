const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : process.env.REACT_APP_API_URL;

export default async function generateShortenUrl(url) {
  try {
    const response = await fetch(`${apiUrl}shortenUrl`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
    });

    if (response.ok) {
      const data = await response.json();
      return { status: 'success', data}
    } else {
      const data = await response.json();
      return { status: 'error', message: data.message }
    }

  } catch (error) {
      console.error('Error:', error);
      return { status: 'error', message: 'An error occurred'}
  }
}