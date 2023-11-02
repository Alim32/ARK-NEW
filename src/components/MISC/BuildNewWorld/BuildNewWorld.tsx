import Image from 'next/image';
import btnIconArrowRight from '../../images/icons/icon-arrow-right-outline.svg';
import { ScrollVisibility } from '../ScrollVisibility';

const BuildNewWorld = () => {
  return (
    <div className='bg-white py-20'>
      <div className='container'>
        <ScrollVisibility>
          <div className='flex justify-between'>
            <h2 className='h2 mb-2 md:mb-4'>
              Not sure <span className='color-orange'>where to start?</span>
            </h2>
            <a href='#' className='font-bold flex flex-row items-start md:visible invisible'>
              <p>Get started</p>
              <Image
              src={btnIconArrowRight}
              width={24}
              alt='icon-chat-outline'
              className='ml-3'
              />
            </a>
          </div>

          <h4 className='md:text-xl text-md md:mt-10 mt-4 m-auto'>
            Karrier One revolutionizes your network connection with affordable, user friendly hardware.<br/>
            Enjoy seamless connectivity and enhanced network experiences with our state of the art tools.
          </h4>
          <a href='#' className='font-bold flex flex-row mt-10 items-start visible md:invisible'>
              <p>Get started</p>
              <Image
              src={btnIconArrowRight}
              width={24}
              alt='icon-chat-outline'
              className='ml-3'
              />
            </a>
        </ScrollVisibility>
     
      </div>
    </div>
  );
};

export default BuildNewWorld;