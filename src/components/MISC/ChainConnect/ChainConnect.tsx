import Image from 'next/image';
import { ScrollVisibility } from '../ScrollVisibility';
import { mockData } from './mockData';
import Link from 'next/link';
import btnIconPlusCircle from '../../images/icons/icon-plus-circle-outline.svg';
import bgOval from '../../images/section-bg-oval.jpg';

type IItemBlock = {
  bgLine: string;
  title: string;
  text: string;
};

const ItemBlock = ({ bgLine, title, text }: IItemBlock) => {
  return (
    <li className='relative mb-6 sm:mb-0 flex-1'>
      <div className='flex items-center'>
        <div className='absolute right-offset-dot z-10 hidden md:flex items-center justify-center w-2.5 h-2.5 bg-f-orange rounded-full shrink-0'></div>
        <div className={`hidden md:flex w-full bg-white-200 h-0.5 ${bgLine}`} />
      </div>
      <div className='mt-6 bg-white text-center rounded-3xl pt-4 lg:pt-6 px-2.5 h-full md:mx-2 lg:mx-4 pb-4'>
        <div className='hidden md:flex w-4 h-4 bg-white rotate-45 absolute right-offset top-5' />
        <div className='rounded-full bg-black text-white w-12 xl:w-16 h-12 xl:h-16 text-2xl xl:text-3xl flex items-center justify-center mb-4 m-auto'>
          {title}
        </div>
        <p className='text-sm xl:text-base font-normal text-darker-orange'>
          {text}
        </p>
      </div>
    </li>
  );
};

const ChainConnect = () => {
  return (
    <div className='py-20 relative overflow-hidden'>
      <Image className='h-full w-full object-cover top-1/2 translate-y-[-50%] absolute transform z-10' src={bgOval} alt='' />
      <div className="relative z-20">
        <ScrollVisibility>
          <div className='container text-center'>
            <h2 className='h2 mb-4'>One Chain to connect it all</h2>
            <p className='subtitle mb-3 lg:mb-16 max-w-4xl m-auto'>
              With a community-driven infrastructure, we’re uniting telecom and
              web3 to create a truly decentralized network capable of covering
              every corner of the world.
            </p>
            <div className='hidden md:flex justify-between mb-2 font-semibold text-lg'>
              <span>Start small</span>
              <span>Reach all</span>
            </div>
            <ol className='md:flex mb-12 lg:mb-20 max-w-5xl m-auto'>
              {mockData.map((item, index) => {
                return <ItemBlock key={index} {...item} />;
              })}
            </ol>
            <Link href='#form' className='btn-orange inline-flex gap-3 m-auto'>
              Sign up
              <Image
                src={btnIconPlusCircle}
                width={24}
                alt='icon-brick-wall-outline'
              />
            </Link>
          </div>
        </ScrollVisibility>
      </div>
    </div>
  );
};

export default ChainConnect;
