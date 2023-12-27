'use client';

import anime from 'animejs';
import Image from 'next/image';
import { useState } from 'react';

export const Face = () => {
  const [clicks, setClicks] = useState(0);
  const animate = () => {
    anime({
      targets: '#face',
      rotate: {
        value: `${0.2 * (clicks + 1)}turn`,
        easing: 'easeOutBack',
        duration: 400,
      },
    });

    setClicks((prev) => prev + 1);
  };

  return (
    <Image
      id="face"
      src="/face.webp"
      alt=""
      width={140}
      height={140}
      className="cursor-pointer rounded-full invert-0"
      onClick={animate}
    />
  );
};
