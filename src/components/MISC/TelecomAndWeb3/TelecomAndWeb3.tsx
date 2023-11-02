import Image from 'next/image';
import btnIconPlusCircle from '../../images/icons/icon-plus-circle-outline.svg';
import { ScrollVisibility } from '../ScrollVisibility';
import Link from 'next/link';
import { LazyVideo } from '../LazyVideo';

type IBlockItem = {
  text: string;
  title: string;
  isComingSoon?: boolean;
  src: string;
  classNameWrap?: string;
  classNameWrapVideo?: string;
};

const BlockItem = ({
  text,
  title,
  isComingSoon = true,
  src,
  classNameWrap,
  classNameWrapVideo,
}: any) => {
  return (
    <div
      className={`flex-col-reverse flex  sm:flex-row gap-3 lg:gap-6 justify-between items-center ${classNameWrap}`}
    >
      <div className='max-w-400 flex flex-col items-start'>
        <h3 className='font-semibold text-3xl mb-1'>{title}</h3>
        {isComingSoon && (
          <span className='subtitle-label mb-4'>COMING soon</span>
        )}
        <p className='subtitle'>{text}</p>
      </div>
      <div className={`max-w-[400px] m-auto sm:mr-0 ${classNameWrapVideo}`}>
        <LazyVideo
          className=''
          src={src}
        />
      </div>
    </div>
  );
};

const TelecomAndWeb3 = () => {
  return (
    <div className='bg-white py-20'>
      <div className='container text-center'>
        <ScrollVisibility>
          <h2 className='h2 mb-4'>
            Telecom & web3,{' '}
            <span className='color-orange'>together at last</span>
          </h2>
          <p className='subtitle mb-8 max-w-3xl m-auto'>
            High-quality, people-powered connectivity is here. Join us and get
            rewarded for bringing it to the world.
          </p>
          <Link href='https://signup.karrier.one' target='_blank' className='btn-orange inline-flex gap-3 m-auto mb-14'>
            Reserve a radio
            <Image
              src={btnIconPlusCircle}
              width={24}
              alt='icon-brick-wall-outline'
            />
          </Link>
        </ScrollVisibility>
        <div className='flex gap-8 lg:gap-0 flex-col text-left'>
          <ScrollVisibility>
            <BlockItem
              text={`More than just a crypto project, we’re a genuine telecom
                  provider with carrier-grade infrastructure. Plus, we’re
                  partnered with mobile carriers to ensure widespread coverage
                  with future-proof data capabilities, including 5G.`}
              title='Karrier One Mobile'
              src={'./video/Animation-1.mp4'}
            />
          </ScrollVisibility>
          <ScrollVisibility>
            <BlockItem
              text={`Keep it simple and secure with one virtual mobile number for
                all your web3 notifications, payments, logins, permissions,
                and more.`}
              title='Karrier One PNS'
              src={'./video/Animation-3.mp4'}
              classNameWrap='sm:flex-row-reverse'
              classNameWrapVideo='sm:ml-0'
            />
          </ScrollVisibility>
          <ScrollVisibility>
            <BlockItem
              text={`Realize your project on the Karrier One Chain. Our
              EVM-compatible, telecom-compliant blockchain is built using
              Polygon Supernets, giving other DeWi and DePIN projects access
              to our telecom infrastructure via smart contracts.`}
              title='Karrier One Chain'
              src={'./video/Animation-4.mp4'}
            />
          </ScrollVisibility>
        </div>
      </div>
    </div>
  );
};

export default TelecomAndWeb3;
