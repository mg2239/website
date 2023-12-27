import queryString from 'query-string';
import { Release, Song } from '../types';

const client_id = process.env.CLIENT_ID!;
const client_secret = process.env.CLIENT_SECRET!;
const refresh_token = process.env.REFRESH_TOKEN!;

const authToken = Buffer.from(client_id + ':' + client_secret).toString(
  'base64'
);

const getSpotifyToken = (body: Record<string, any>) => {
  return fetch('https://accounts.spotify.com/api/token', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${authToken}`,
    },
    body: new URLSearchParams(body),
    cache: 'no-cache',
  })
    .then((res) => res.json())
    .then((data) => data.access_token);
};

export const getReleases = async (): Promise<Release[]> => {
  try {
    const access_token = await getSpotifyToken({
      grant_type: 'client_credentials',
    });

    const res = await fetch(
      queryString.stringifyUrl({
        url: 'https://api.spotify.com/v1/playlists/0lCLH7IqNSpnGhdzQF3JmP/tracks',
        query: {
          limit: 50,
        },
      }),
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        cache: 'no-cache',
      }
    );

    const { items }: { items: any[] } = await res.json();

    return items
      .map(({ track }) => ({
        link: track.external_urls.spotify,
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
  try {
    const access_token = await getSpotifyToken({
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    });

    const res = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        cache: 'no-cache',
      }
    );

    const { is_playing, item } = await res.json();

    const {
      artists,
      name: title,
      external_urls: { spotify },
    } = item;

    const artistNames = artists.map(({ name }: any) => name).join(', ');

    return {
      title: `${artistNames} — ${title}`.toLowerCase(),
      link: spotify,
      isPlaying: is_playing,
    };
  } catch (err) {
    return { isPlaying: false };
  }
};
