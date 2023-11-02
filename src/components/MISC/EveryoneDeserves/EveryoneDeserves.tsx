import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import btnIconMoney from '../../images/icons/icon-money-outline.svg';
import btnIconArrowRight from '../../images/icons/icon-arrow-right-outline.svg';
import { ScrollVisibility } from '../ScrollVisibility';
import { mockData } from './mockData';
import bgOval from '../../images/section-bg-oval.jpg';

type IItemBlock = {
  src: string;
  text: string;
};

const ItemBlock = ({ src, text }: IItemBlock) => {
  return (
    <div className='w-fit bg-white rounded-[20px] sm:p-5 p-4 flex gap-6 items-center'>
      <div className='bg-black min-w-[4rem] w-16 h-16 rounded-full flex items-center justify-center'>
        <Image src={src} width={24} alt='icon-arr-outline' />
      </div>
      <h4 className='max-w-298 font-semibold'>{text}</h4>
    </div>
  );
};

const EveryoneDeserves = () => {
  return (
    <div className='py-24 relative overflow-hidden'>
      <Image className='h-full w-full object-cover top-1/2 translate-y-[-50%] absolute transform z-10' src={bgOval} alt='' />
      <div className="relative z-20">
        <ScrollVisibility>
          <div className='container flex gap-14 flex-col lg:flex-row items-center'>
            <div className='flex-1'>
              <h2 className='h2 mb-4'>Everyone deserves to reach the world</h2>
              <div className='mt-10 flex flex-col sm:flex-row items-center justify-start gap-3'>
                <Link href='https://faq.karrier.one/network-faq/node-information/how-are-rewards-distributed' target='_blank' className='btn-orange flex gap-3'>
                  How to earn
                  <Image src={btnIconMoney} width={24} alt='icon-money-outline' />
                </Link>
                <Link href='https://faq.karrier.one/introduction/karrier-one/network-summary' target='_blank' className='btn-transparent flex gap-3'>
                  Our network
                  <Image
                    src={btnIconArrowRight}
                    width={24}
                    alt='icon-arr-outline'
                  />
                </Link>
              </div>
            </div>
            <div className='flex gap-6 flex-col flex-1'>
              {mockData.map((item, index) => {
                return <ItemBlock key={index} {...item} />;
              })}
            </div>
          </div>
        </ScrollVisibility>
      </div>
    </div>
  );
};

export default EveryoneDeserves;
