import type { NextApiRequest, NextApiResponse } from 'next';
import { getCurrentlyListening } from '../../util/spotify';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  getCurrentlyListening()
    .then((song) => res.send(song))
    .catch((err) => res.send(err));
};

export default handler;
