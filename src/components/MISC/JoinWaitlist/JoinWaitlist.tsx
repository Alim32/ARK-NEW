'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import btnIconPlusCircle from '../../images/icons/icon-plus-circle-outline.svg';
import btnIconArrowRight from '../../images/icons/icon-arrow-right-outline.svg';
import btnIconChat from '../../images/icons/icon-chat-outline.svg';

const JoinWaitlist = () => {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  return (
    <div className='text-center pb-14 xl:pb-20 pt-10 lg:pt-28'>
      <div className='overflow-hidden whitespace-nowrap pb-5'>
        <div className='whitespace-pre animate-marquee inline-block text-3xl lg:text-8xl font-semibold'>
          {isAboutPage
            ? `Build the network the world deserves. Build the network the world deserves. Build the network the world deserves`
            : `Take your place in the forever network. Take your place in the forever network.`}
        </div>
      </div>
      <p className='subtitle my-5 lg:my-10'>
        {isAboutPage
          ? 'Take your place in a future where connectivity belongs to you.'
          : 'Get ready to shape the future of connectivity.'}
      </p>
      {isAboutPage ? (
        <div className='flex flex-col justify-center sm:flex-row items-center gap-5 sm:gap-3'>
          <Link href='/#form' className='btn-orange flex gap-3'>
            Get In touch
            <Image src={btnIconChat} width={20} alt='icon-brick-wall-outline' />
          </Link>
          <a
            href='https://faq.karrier.one'
            target='_blank'
            className='btn-transparent flex gap-3'
          >
            Our documentation
            <Image src={btnIconArrowRight} width={24} alt='icon-chat-outline' />
          </a>
        </div>
      ) : (
        <div className='flex flex-col justify-center sm:flex-row items-center gap-5 sm:gap-3'>
          <Link href='#form' className='btn-orange inline-flex gap-3'>
            Sign up
            <Image
              src={btnIconPlusCircle}
              width={24}
              alt='icon-brick-wall-outline'
            />
          </Link>
          <Link
            href='https://signup.karrier.one'
            target='_blank'
            className='btn-transparent inline-flex gap-3'
          >
            Reserve a radio
            <Image
              src={btnIconArrowRight}
              width={24}
              alt='icon-chat-outline'
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default JoinWaitlist;
