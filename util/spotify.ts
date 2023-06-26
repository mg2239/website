import axios from 'axios';
import queryString from 'query-string';
import { Release, Song } from '../types';

const client_id = process.env.CLIENT_ID!;
const client_secret = process.env.CLIENT_SECRET!;
const refresh_token = process.env.REFRESH_TOKEN!;

export const getReleases = async (): Promise<Release[]> => {
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: client_id,
      password: client_secret,
    },
  };

  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const tokenRes = await axios.post(
      'https://accounts.spotify.com/api/token',
      queryString.stringify(data),
      headers
    );
    const { access_token } = tokenRes.data;
    const auth = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    const res = await axios.get(
      queryString.stringifyUrl({
        url: 'https://api.spotify.com/v1/playlists/0lCLH7IqNSpnGhdzQF3JmP/tracks',
        query: {
          limit: 50,
        },
      }),
      auth
    );

    const { items }: { items: any[] } = res.data;

    return items
      .map(({ track }) => ({
        link: track.album.external_urls.spotify,
        albumName: track.album.name,
        trackName: track.name,
        releaseDate: track.album.release_date,
        image: track.album.images[1].url,
      }))
      .reverse();
  } catch (err) {
    return [];
  }
};

export const getCurrentlyListening = async (): Promise<Song> => {
  const data = {
    grant_type: 'refresh_token',
    refresh_token: refresh_token,
  };

  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: client_id,
      password: client_secret,
    },
  };

  try {
    const tokenRes = await axios.post(
      'https://accounts.spotify.com/api/token',
      queryString.stringify(data),
      headers
    );
    const { access_token } = tokenRes.data;
    const playingRes = await axios.get(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const { is_playing } = playingRes.data;
    const {
      artists,
      name,
      external_urls: { spotify },
    } = playingRes.data.item;
    const artist = artists[0].name;

    return {
      title: `${artist} - ${name}`.toLowerCase(),
      link: spotify,
      isPlaying: is_playing,
    };
  } catch (err) {
    return { isPlaying: false };
  }
};
