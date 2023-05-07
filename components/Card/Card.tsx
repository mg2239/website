import Image from 'next/image';
import { Song } from '../../types';
import { Section } from '../Section/Section';

type Props = {
  song: Song;
};

export function Card({ song }: Props) {
  return (
    <div className="relative flex w-[340px] flex-col overflow-clip rounded-lg bg-neutral-800 shadow-xl shadow-neutral-400">
      {/* Banner */}
      <div className="h-[60px] bg-green-600" />
      <Image
        className="absolute left-4 top-4 box-content rounded-full border-8 border-neutral-800"
        src="/face.jpg"
        alt="face"
        width={80}
        height={80}
      />
      <div className="h-[60px]" />
      {/* Body */}
      <div className="mx-4 mb-4 rounded-lg bg-neutral-950 p-3">
        {/* Header */}
        <h1 className="text-xl font-semibold text-white">matthewguo</h1>
        {/* Divider */}
        <span className="mt-3 block w-full border-t border-neutral-700" />
        {/* Sections */}
        <Section title="About Me">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae dolor ut urna pharetra luctus a ut nibh. Phasellus nec finibus
            velit, at dignissim enim.
          </p>
        </Section>
        <Section title="About Me">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae dolor ut urna pharetra luctus a ut nibh. Phasellus nec finibus
            velit, at dignissim enim.
          </p>
        </Section>
        <Section title="About Me">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae dolor ut urna pharetra luctus a ut nibh. Phasellus nec finibus
            velit, at dignissim enim.
          </p>
        </Section>
        <Section title="About Me">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae dolor ut urna pharetra luctus a ut nibh. Phasellus nec finibus
            velit, at dignissim enim.
          </p>
        </Section>
      </div>
    </div>
  );
}
