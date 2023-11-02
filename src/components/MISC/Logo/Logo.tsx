import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '../../images/logo.svg';

interface ILogo {
  width: number;
  isFooter?: boolean;
}

const Logo: FC<ILogo> = ({ width, isFooter = false }) => {
  const { push } = useRouter();

  return (
    <div className='flex-column lg:flex-1'>
      <a
        onClick={() => push('/')}
        className='inline-block -m-1.5 p-1.5 cursor-pointer'
      >
        <span className='sr-only'>Karrier One</span>
        <Image src={logo} width={width} alt='logo' />
      </a>
      {isFooter && (
        <div className='pl-10 text-xl font-semibold'>Reach the world.</div>
      )}
    </div>
  );
};

export default Logo;
