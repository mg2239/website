import Image from 'next/image';

export function Banner() {
  return (
    <div>
      <div className="h-[60px] bg-green-600" />
      <Image
        className="absolute left-4 top-4 box-content rounded-full border-8 border-neutral-800"
        src="/face.png"
        alt="face"
        width={80}
        height={80}
      />
      <div className="h-[60px]" />
    </div>
  );
}
