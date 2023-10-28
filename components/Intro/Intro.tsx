import Image from 'next/image';
import { Song } from '../../types';
import { Link } from './Link';
import { Text } from './Text';

const Intro = ({ song }: { song: Song }) => {
  return (
    <div className="mb-8 ml-4 mr-4 sm:mb-16 sm:ml-0 sm:mr-0">
      <div className="mb-2 flex grid-cols-6 gap-1 sm:grid sm:grid-cols-3 sm:gap-6">
        <div className="mr-5 sm:m-0 sm:flex sm:flex-col sm:items-center ">
          <div className="h-20 w-20 sm:h-auto sm:w-auto">
            <Image
              src="/face.png"
              alt="face"
              width={140}
              height={140}
              className="invert-0 transition-all dark:invert"
            />
          </div>
        </div>
        <div className="col-span-5 sm:col-span-2">
          <h1 className="mb-1 font-light sm:mb-2">matthew guo</h1>
          <div className="mb-2">
            <Link to="https://github.com/mg2239">github</Link>
            <Link to="https://www.linkedin.com/in/mg2239/">linkedin</Link>
          </div>
          <div className="hidden sm:block">
            <Text song={song} />
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <Text song={song} />
      </div>
    </div>
  );
};

export default Intro;
