import { NextResponse } from 'next/server';
import { getCurrentlyListening } from '../../../util/spotify';

export async function GET() {
  return NextResponse.json(
    await getCurrentlyListening()
      .then((song) => song)
      .catch((err) => err)
  );
}
