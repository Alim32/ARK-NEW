import Image from 'next/image';
import ModemIcon from '../../images/icons/icon-modem-outline.svg';
import UsersIcon from '../../images/icons/icon-users-outline.svg';
import VoteIcon from '../../images/icons/icon-vote-outline.svg';
import { ScrollVisibility } from '../ScrollVisibility';
import { LazyVideo } from '../LazyVideo';

type IBlockItem = {
  src: string;
  title: string;
  text: string;
};

const BlockItem = ({ src, title, text }: IBlockItem) => {
  return (
    <div>
      <div className='flex gap-4 lg:gap-6 items-center mb-5'>
        <div className='bg-black p-3 lg:p-5 rounded-full'>
          <Image src={src} alt='modem-icon' />
        </div>
        <h3 className='font-semibold text-2xl lg:text-3xl'>{title}</h3>
      </div>
      <p className='text-base text-darker-orange'>{text}</p>
    </div>
  );
};

const Divider = () => {
  return <hr className='my-7 lg:my-10 hr-gradient border-none h-0.5' />;
};

const FutureWireless = () => {
  return (
    <div className='bg-white py-20'>
      <div className='container'>
        <ScrollVisibility>
          <h2 className='h2 text-center mb-8'>
            Build the <span className='color-orange'>future of wireless</span>
          </h2>
          <p className='subtitle text-center mb-16'>
            Play your part in bringing connectivity to the world.
          </p>
        </ScrollVisibility>
        <div className='flex flex-col sm:flex-row gap-5 lg:gap-16'>
          <div className='flex-1'>
            <ScrollVisibility>
              <BlockItem
                src={ModemIcon}
                title='Build'
                text='Help build out the network and Earn KONE tokens by operating
                  our radio Gateways as a Gatekeeper Node.'
              />
              <Divider />
              <BlockItem
                src={UsersIcon}
                title='Use'
                text='Contribute to the network as a mobile user. Connect your phone
                to Karrier One and get carrier-grade service for a fraction of
                standard rates.'
              />
              <Divider />
              <BlockItem
                src={VoteIcon}
                title='Vote'
                text='Play a part in tomorrow’s wireless network. Token owners get a
                say on the KONE DAO—and get rewarded for doing so.'
              />
            </ScrollVisibility>
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <ScrollVisibility>
              <LazyVideo
                className=''
                src='./video/Animation-2.mp4'
              />
            </ScrollVisibility>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureWireless;
