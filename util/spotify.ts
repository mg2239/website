import axios from 'axios';
import queryString from 'query-string';
import { Album, Song } from '../types';

const client_id = process.env.CLIENT_ID!;
const client_secret = process.env.CLIENT_SECRET!;

type AlbumPayload = {
  albums: Album[];
};

export const getAlbums = () => {
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

  return new Promise<AlbumPayload>(async (resolve, reject) => {
    if (client_id && client_secret) {
      try {
        const tokenRes = await axios.post(
          'https://accounts.spotify.com/api/token',
          queryString.stringify(data),
          headers,
        );
        const { access_token } = tokenRes.data;
        const auth = {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        };
        const albumRes = await axios.get(
          queryString.stringifyUrl({
            url: 'https://api.spotify.com/v1/playlists/0lCLH7IqNSpnGhdzQF3JmP/tracks',
            query: {
              limit: 50,
              // fields: 'items(track(album))',
            },
          }),
          auth,
        );
        const { items } = albumRes.data;
        const albums: Album[] = items.map(({ track }: { track: any }) => {
          return {
            link: track.album.external_urls.spotify,
            name: track.album.name,
            release_date: track.album.release_date,
            image: track.album.images[1].url,
          };
        });
        albums.reverse();
        resolve({ albums });
      } catch (err) {
        console.log(err);
      }
    } else {
      reject({ err: 'No env variables' });
    }
  });
};

const refresh_token = process.env.REFRESH_TOKEN!;

export const getCurrentlyListening = async () => {
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

  return new Promise<Song>(async (resolve, reject) => {
    try {
      const tokenRes = await axios.post(
        'https://accounts.spotify.com/api/token',
        queryString.stringify(data),
        headers,
      );
      const { access_token } = tokenRes.data;
      const playingRes = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      if (playingRes.data) {
        const { is_playing } = playingRes.data;
        const {
          artists,
          name,
          external_urls: { spotify },
        } = playingRes.data.item;
        const artist = artists[0].name;
        resolve({
          title: `${artist} - ${name}`.toLowerCase(),
          link: spotify,
          is_playing,
        });
      } else {
        console.log(playingRes);
        console.log('playingRes has no data');
        reject({ is_playing: false });
      }
    } catch (err: any) {
      console.log(err);
      reject({ is_playing: false });
    }
  });
};
