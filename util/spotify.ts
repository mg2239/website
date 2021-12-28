import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import queryString from 'query-string';
import { AlbumType } from '../types';

const client_id = process.env.CLIENT_ID!;
const client_secret = process.env.CLIENT_SECRET!;

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

type Payload = {
  albums: AlbumType[];
};

export const getAlbums = () => {
  return new Promise<Payload>((resolve, reject) => {
    if (client_id && client_secret) {
      axios
        .post(
          'https://accounts.spotify.com/api/token',
          queryString.stringify(data),
          headers,
        )
        .then((tokenRes) => {
          const { access_token } = tokenRes.data;
          const auth = {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          };
          axios
            .get(
              queryString.stringifyUrl({
                url:
                  'https://api.spotify.com/v1/playlists/0lCLH7IqNSpnGhdzQF3JmP/tracks',
                query: {
                  limit: 50,
                  // fields: 'items(track(album))',
                },
              }),
              auth,
            )
            .then((albumRes) => {
              const { items } = albumRes.data;
              const albums: AlbumType[] = items.map(
                ({ track }: { track: any }) => {
                  return {
                    link: track.album.external_urls.spotify,
                    name: track.album.name,
                    release_date: track.album.release_date,
                    image: track.album.images[1].url,
                  };
                },
              );
              albums.reverse();
              resolve({ albums });
            })
            .catch(console.log);
        })
        .catch(console.log);
    } else {
      reject({ err: 'No env variables' });
    }
  });
};
