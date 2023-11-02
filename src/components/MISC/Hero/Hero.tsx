'use client';
import Image from 'next/image';
import Link from 'next/link';
import btnIconPlusCircle from '../../images/icons/icon-plus-circle-outline.svg';
import { ScrollVisibility } from '../ScrollVisibility';
import { LazyVideo } from '../LazyVideo';

const Hero = () => {
  return (
    <div className='section-gradient relative overflow-hidden hero-section'>
      <div className='container relative z-20'>
        <div className='relative isolate'>
          <div className='pt-32 pb-32 sm:pt-48 sm:pb-40 max-w-2xl'>
            <ScrollVisibility>
              <div className='text-start'>
                <h1 className='h1'>
                  Build on <br /> the <span className='font-light'>global</span>{' '}
                  telecom layer
                </h1>
                <p className='mt-6 text-xl text-darker-orange leading-8'>
                  Have your share in the world’s first{' '}
                  <span className='text-black font-semibold'>carrier-grade</span>
                  <br />
                  decentralized network.
                </p>
                <div className='mt-10 flex items-center justify-start gap-x-6'>
                  <Link href='#form' className='btn-orange inline-flex gap-3'> 
                    Sign up
                    <Image
                      src={btnIconPlusCircle}
                      width={24}
                      alt='icon-brick-wall-outline'
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
    </div>
  );
};

export default Hero;
