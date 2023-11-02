'use client';
import Image from 'next/image';
import PhoneIcon from '../../images/icons/icon-phone-outline.svg';
import MessageIcon from '../../images/icons/icon-message-outline.svg';
import { Logo } from '../Logo';
import { useRouter } from 'next/navigation';
import MailchimpForm from '../MailchimpSubscribe/MailchimpSubscribeForm';

const Footer = () => {
  const { push } = useRouter();

  return (
    <div className='p-3 sm:p-5'>
      <div className='bg-white rounded-3xl pt-6 md:pt-14 xl:pt-20 pb-7 px-4 md:px-10 xl:px-32'>
        <div className='flex flex-col flex-wrap md:flex-row items-start justify-center gap-10 lg:gap-5 lg:justify-between mb-10 lg:mb-20'>
          <div className='md:min-w-[100%] lg:min-w-[auto] flex gap-4 flex-col items-center'>
            <Logo width={293} isFooter />
            <div className='mt-5 lg:mt-10 flex gap-3 flex-col'>
              <div className='flex gap-1'>
                <div className='rounded-full bg-f-orange p-2.5 w-11 h-11'>
                  <Image src={PhoneIcon} alt='phone' />
                </div>
                <a
                  href='tel:+14169000010'
                  className='rounded-full bg-gray hover:bg-f-orange duration-500 py-2 px-7 w-fit leading-none flex items-center'
                >
                  +1 (416) 900-0010
                </a>
              </div>
              <div className='flex gap-1'>
                <div className='rounded-full bg-f-orange p-2.5 w-11 h-11'>
                  <Image src={MessageIcon} alt='message' />
                </div>
                <a
                  href='mailto:contact@karrier.one'
                  className='rounded-full bg-gray hover:bg-f-orange duration-500 py-2 px-6 w-fit leading-none flex items-center'
                >
                  contact@karrier.one
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-sm mt-2'>Quick Links</h3>
            <div className='flex flex-col mt-5 md:mt-11 gap-2.5'>
              <a
                onClick={() => push('/about')}
                className='underline hover:text-f-orange duration-500 cursor-pointer'
              >
                About
              </a>
              <a
                target='_blank'
                href='https://karrier.one/Karrier_One_LitePaper_V2.5.pdf'
                className='underline hover:text-f-orange duration-500'
              >
                Whitepaper
              </a>
              <a
                target='_blank'
                href='http://faq.karrier.one'
                className='underline hover:text-f-orange duration-500'
              >
                GitBook
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-sm mt-2'>
              Get first dibs on our next release:
            </h3>
            <MailchimpForm />
            <p className='mt-5 text-sm'>
              By clicking Subscribe, you agree to our{' '}
              <a
                href='https://mobile.karrier.one/privacy.html'
                target='_blank'
                className='underline hover:text-f-orange duration-500'
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className='pt-6 border-solid border-t-2 text-sm gap-3 flex flex-wrap-reverse justify-between'>
          <p className='text-xs md:text-sm'>© Karrier One, Inc. 2023</p>
          <p className='text-xs md:text-sm'>
            <a
              href='https://dashboard.karrier.one/terms-and-conditions'
              target='_blank'
              className='hover:text-f-orange duration-500'
            >
              Terms and Conditions
            </a>{' '}
            |{' '}
            <a
              href='https://mobile.karrier.one/privacy.html'
              target='_blank'
              className='hover:text-f-orange duration-500'
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
