import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import queryString from 'query-string';
import { Album } from '../../types';

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

export default (_: NextApiRequest, res: NextApiResponse) => {
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
                'https://api.spotify.com/v1/artists/7kC7D533ouUtVaakpKJgoc/albums',
              query: {
                limit: 20,
                offset: 0,
              },
            }),
            auth,
          )
          .then((albumRes) => {
            const { items } = albumRes.data;
            const albums: Album[] = items
              .map((album: any) => {
                return {
                  type: album.album_group,
                  href: album.external_urls.spotify,
                  name: album.name,
                  release_date: album.release_date,
                  image: album.images[1].url,
                };
              })
              .sort((a: Album, b: Album) =>
                a.release_date > b.release_date ? -1 : 1,
              );
            res.send({ albums });
          });
      })
      .catch(() => res.status(500).send({ err: 'An error occured' }));
  } else {
    res.status(500).send({ err: 'No env variables' });
  }
};
