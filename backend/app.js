const express = require('express');
const shortid = require('shortid');
const { isUrl } = require('check-valid-url');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const urlEnum = {};

app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

app.post('/shortenUrl', (req, res) => {
  const { url } = req.body;

  if (!url || !isUrl(url)) {
      return res.status(400).send({status: 'error', message: 'Invalid url'});
  }

  const shortUrl = shortid.generate();
  urlEnum[shortUrl] = url;

  const protocol = req.protocol;
  const host = req.get('host');
  
  const resultUrl = `${protocol}://${host}/${shortUrl}`;

  res.json({ shortUrl: resultUrl, longUrl: url });
});

app.get('/:requiredUrl', (req, res) => {
  const fullUrl = urlEnum[req.params.requiredUrl];

  if (!fullUrl) {
      return res.status(404).send('Not found');
  }

  res.redirect(fullUrl);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});