// auth.js

import axios from 'axios';

const client_id = '88fbe445437b423fab1b937b6bf9ac53'; // Substitua pelo seu CLIENT_ID
const client_secret = 'a4392c2b182b4ab1b106c3db6065852b'; // Substitua pelo seu CLIENT_SECRET

export default async function authenticateSpotify(req, res) {
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
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


