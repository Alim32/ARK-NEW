import Image from 'next/image';
import btnIconArrowRight from '../../images/icons/icon-arrow-right-outline.svg';
import btnIconPlusCircle from '../../images/icons/icon-plus-circle-outline.svg';
import btnIconMoney from '../../images/icons/icon-money-outline.svg';
import iconArbitrum from '../../images/token/icon-arbitrum.png';
import iconGasFees from '../../images/token/icon-gas-fees.png';
import iconGovernance from '../../images/token/icon-governance.png';
import imagePlaceholder from '../../images/token/placeholder.png';
import imageEarnNetworkProvider from '../../images/token/earn-network-provider.png';
import imageConnectKarrierNetwork from '../../images/token/connect-karrier-network.png';
import iconMinting from '../../images/token/icon-minting-pns.png';
import { ScrollVisibility } from '../ScrollVisibility';
import Link from 'next/link';

const BlockItem = ({
  text,
  title,
  linktext,
  icon
}: any) => {
  return (
   <div className='flex flex-col max-w-[340px] mt-[50px]'>
      <div className='flex flex-row items-center h-[80px]'>
        <Image
                        src={icon}
                        width={64}
                        alt='icon-money-outline'
                        className='mb-[1px]'
                      />
        <p className='text-3xl text-start font-bold fw-600 ml-[25px]'>{title}</p>
      </div>
      <p className='text-start mt-[25px]'>{text}</p>
      <div className='flex flex-row mt-[20px]'>
        <a className='font-bold' href="#">{linktext}</a>
        <Image
            src={btnIconArrowRight}
            width={24}
            alt='icon-chat-outline'          
            className='rotate-90'
            />
      </div>

   </div>
  );
};

const UtilityGovernance = () => {
  return (
    <div className='bg-white py-20'>
      <div className='container text-center'>
        <ScrollVisibility>
          <h2 className='h2 mb-2 md:mb-4'>
            Utility + Governance +
          </h2>
          <h2 className='h2 mb-4 color-orange'>Medium of Exchange</h2>
          <h4 className='md:text-xl text-md mb-8 m-auto'>
            Holders of $KONE can use their tokens to vote on Improvement Proposals, pay for PNS profiles and more.
          </h4>
        </ScrollVisibility>
        <ScrollVisibility>
          <div className='flex flex-wrap md:justify-between justify-center w-100 mt-[50px]'>
            <div className='flex flex-col'>
              <BlockItem linktext='See upcoming proposals' title='Governance' icon={iconGovernance} text='Vote on Karrier One Improvement Proposals with your KONE tokens to drive the sustainable long-term success of the Karrier One Protocol.' />
              <BlockItem linktext='Building on Karrier One' title='Arbitrum Orbits (Blockchain)' icon={iconArbitrum} text='Built on the Arbitrum ecosystem, the KONE token solves the issue of decentralizing the network while providing a more efficient way to process transactions and smart contracts.' />
            </div>
            <Image
              src={imagePlaceholder}
              width={358}
              alt='icon-chat-outline'    
              className='mt-[50px]'
              />

            <div className='flex flex-col'>
              <BlockItem title='Minting PNS Profiles' linktext='Our PNS' icon={iconMinting} text='KONE will be used as the de facto currency for payment when purchasing PNS profiles with a premium phone number.' />
              <BlockItem title='Gas & Fees' icon={iconGasFees}  linktext='Go to dashboard'  text='KONE can be used to pay for services and fees in the Karrier One Dashboard and Wallet.'/>
            </div>
          </div>
          <div className='mt-[75px] flex flex-row w-100 justify-center align-center'>
            <Link href='#form' className='btn-orange inline-flex gap-3'> 
              Earn $KONE
              <Image
                src={btnIconMoney}
                width={24}
                alt='icon-brick-wall-outline'
                className='mb-[1px]'
              />
            </Link>
            <a className='flex flex-row items-center ml-[2rem] font-bold'>
              <p>Our Tokenomics</p>
              <Image
                src={btnIconArrowRight}
                width={24}
                alt='icon-chat-outline'         
                />
              </a>
          </div>
        </ScrollVisibility>
        <ScrollVisibility>
          <div className='mt-[150px]'>
              <div className='flex md:flex-row flex-col justify-between'>
                  <div className='flex flex-col md:text-start md:pr-[75px]'>
                    <h2 className='h2'>Looking to earn</h2>
                    <h2 className='h2 color-orange'>as a network provider?</h2>
                    <p className='subtitle w-max-[400px] mt-4'>Earn $KONE tokens as a Gatekeeper by deploying radios to build our network.</p>
                    <Link href='#form' className='btn-orange inline-flex gap-3 mt-8 w-fit md:mx-0 mx-auto'> 
                      Buy a radio
                      <Image
                        src={btnIconPlusCircle}
                        width={24}
                        alt='icon-brick-wall-outline'
                        className='mb-[1px]'
                      />
                    </Link>                    
                  </div>
                  <Image
                    src={imageEarnNetworkProvider}
                    height={332}
                    alt='earn-network-provider'  
                    className='md:mt-0 mt-5 md:pl-[50px]'
                    />
              </div>
              <div className='flex md:flex-row flex-col md:justify-between justify-center mt-[85px]'>
                  <Image
                    src={imageConnectKarrierNetwork}
                    height={332}
                    alt='earn-network-provider'  
                    className='md:mt-0 mt-5 md:pr-[50px] md:order-1 order-1'
                    />
                  <div className='flex flex-col md:text-start md:pl-[75px] md:order-2 order-0'>
                    <h2 className='h2'>Connect to the</h2>
                    <h2 className='h2 color-orange'>Karrier One Network</h2>
                    <p className='subtitle w-max-[400px] mt-4'>Get connectivity at a fraction of standard carrier costs. Sign up now to choose your plan.</p>
                    <Link href='#form' className='btn-orange inline-flex gap-3 mt-8 w-fit md:mx-0 mx-auto'> 
                      Get a SIM
                      <Image
                        src={btnIconPlusCircle}
                        width={24}
                        alt='icon-brick-wall-outline'
                        className='mb-[1px]'
                      />
                    </Link>                     
                  </div>                    
              </div>
          </div>
        </ScrollVisibility>
      </div>
    </div>
  );
};

export default UtilityGovernance;
