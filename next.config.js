const { parsed: localEnv } = require('dotenv').config()

module.exports = {
  env: {
    CLIENT_ID: localEnv.CLIENT_ID,
    CLIENT_SECRET: localEnv.CLIENT_SECRET,
    URL_TOKEN: localEnv.URL_TOKEN,
    URL_ARTISTS: localEnv.URL_ARTISTS,
  },
}
