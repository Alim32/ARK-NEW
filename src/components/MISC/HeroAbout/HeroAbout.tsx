'use client';
import Image from 'next/image';
import Link from 'next/link';
import btnIconChat from '../../images/icons/icon-chat-outline.svg';
import btnIconArrowRight from '../../images/icons/icon-arrow-right-outline.svg';
import { ScrollVisibility } from '../ScrollVisibility';

const HeroAbout = () => {
  return (
    <div>
      <div className='section-gradient'>
        <div className='relative isolate py-24 container'>
          <div className='pt-16 pb-0 lg:pb-0 lg:pt-28 max-w-2xl relative z-20'>
            <ScrollVisibility>
              <div className='text-center sm:text-start'>
                <h1 className='h1'>
                  One network.
                  <br />
                  <span className='font-light'>One mission.</span>
                </h1>
                <div className='mt-10 flex flex-col sm:flex-row items-center justify-start gap-3'>
                  <Link href='/#form' className='btn-orange flex gap-3'>
                    Get In touch
                    <Image src={btnIconChat} width={24} alt='icon-chat-outline' />
                  </Link>
                  <Link                    
                    href='https://faq.karrier.one'
                    target='_blank'
                    className='btn-transparent flex gap-3'
                  >
                    Our documentation
                    <Image
                      src={btnIconArrowRight}
                      width={24}
                      alt='icon-chat-outline'
                    />
                  </Link>
                </div>
              </div>
            </ScrollVisibility>
          </div>
        </div>
      </div>

      <div className='pb-32 relative overflow-hidden'>
        <div className="section-gradient min-h-[130px] md:min-h-[250px] w-full absolute left-0 top-0"></div>
        <div className="container">
          <ScrollVisibility>
            <div className='relative'>
              <div className=''>
                <iframe
                  className='rounded-[20px] h-full w-full min-h-[250px] md:min-h-[500px]'
                  src='https://www.youtube.com/embed/WOebc_z3-1s'
                  allowFullScreen
                  id='240632615'
                ></iframe>
              </div>
            </div>
          </ScrollVisibility>
          <ScrollVisibility>
            <div className='text-center max-w-6xl m-auto mt-20'>
              <h6 className='subtitle-label mb-10'>
                CONNECTIVITY WITHOUT BORDERs
              </h6>
              <h2 className='h2 leading-snug'>
                We’re building affordable, reliable carrier-grade connectivity that
                benefits everyone,{' '}
                <span className='text-f-orange'>
                  no matter who or where they are.
                </span>
              </h2>
            </div>
          </ScrollVisibility>
        </div>
      </div>

    </div>
  );
};

export default HeroAbout;
