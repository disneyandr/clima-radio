// auth.js

import axios from 'axios';

const client_id = process.env.CLIENT_ID; // Substitua pelo seu CLIENT_ID
const client_secret = process.env.CLIENT_SECRET; // Substitua pelo seu CLIENT_SECRET

export default async function authenticateSpotify(req, res) {
  const authOptions = {
    url: process.env.URL_TOKEN,
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  try {
    const response = await axios.post(authOptions.url, null, {
      headers: {
        'Authorization': authOptions.headers.Authorization
      },
      params: authOptions.form
    });

    const token = response.data.access_token;
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
}


