import Image from 'next/image';
import btnIconBrickWall from '../../images/icons/icon-brick-wall-outline.svg';
import Link from 'next/link';

interface IBtnGradientBorder {
  btnText: string;
  href: string;
}

const BtnGradientBorder = ({ btnText, href }: IBtnGradientBorder) => {
  return (
    <div className='rounded-full bg-gradient-to-r from-f-orange to-orange-light p-0.5'>
      <Link href={href} className='rounded-full bg-white py-3 px-6 font-semibold text-base flex gap-1 hover:bg-gray-100 duration-500 text-lg'>
        {btnText}
        <Image
          src={btnIconBrickWall}
          width={24}
          alt='icon-brick-wall-outline'
          className='mb-[1px]'
        />
      </Link>
    </div>
  );
};

export default BtnGradientBorder;
