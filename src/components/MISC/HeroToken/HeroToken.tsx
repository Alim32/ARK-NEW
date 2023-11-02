'use client';
import Image from 'next/image';
import Link from 'next/link';
import polygonLogo from '../../images/token/polygon.png'
import btnIconMoney from '../../images/icons/icon-money-outline.svg';
import { ScrollVisibility } from '../ScrollVisibility';
import { LazyVideo } from '../LazyVideo';

const HeroToken = () => {
  return (
    <div className='section-gradient relative overflow-hidden hero-section'>
      <div className='container relative z-20'>
        <div className='relative isolate'>
          <div className='pt-32 pb-32 sm:pt-48 sm:pb-40 max-w-2xl'>
            <ScrollVisibility>
              <div className='text-start'>
                <h1 className='h1'>
                  Vote, pay<br />and build with<br /><span className='font-light'>$KONE</span>                  
                </h1>
                <p className='mt-6 text-xl text-darker-orange leading-8'>
                An EVM-compatible token ready for mass adoption and built with integrations for high-performance transaction speeds.
                </p>
                <div className='mt-10 flex items-center justify-start gap-x-6'>
                  <Link href='#form' className='btn-orange inline-flex gap-3'> 
                    Earn $KONE
                    <Image
                      src={btnIconMoney}
                      width={24}
                      alt='icon-brick-wall-outline'
                      className='mb-[1px]'
                    />
                  </Link>
                </div>
              </div>
            </ScrollVisibility>
          </div>
        </div>
      </div>
      <LazyVideo
        className='hero-animation lg:h-full object-cover'
        src='./video/hero-animation.mp4'
      />
      <ScrollVisibility>
        <div className='flex w-100 justify-center'>
        <Image
                        src={polygonLogo}
                        width={165}
                        alt='polygon logo'
                        className='z-30 pb-[35px]'
                      />
        </div>
      </ScrollVisibility>
    </div>
  );
};

export default HeroToken;
