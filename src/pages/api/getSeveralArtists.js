import axios from 'axios';

export default async function getSeveralArtists(accessToken, artistIds) {
  try {
    const response = await axios.get('https://api.spotify.com/v1/artists', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      },
      params: {
        ids: artistIds.join(',')
      }
    });

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Erro ao obter artistas do Spotify: ' + error.message);
  }
}
