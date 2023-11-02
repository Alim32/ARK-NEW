'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import btnIconArrowRight from '../../images/icons/icon-arrow-right-outline.svg';
import CollapseImage1 from '../../images/about-us-accordion-img-1.jpg';
import CollapseImage2 from '../../images/about-us-accordion-img-2.jpg';
import CollapseImage3 from '../../images/about-us-accordion-img-3.jpg';
import CollapseImage4 from '../../images/about-us-accordion-img-4.jpg';
import { ScrollVisibility } from '../ScrollVisibility';


enum CollapsibleType {
  Collapsible1 = 'collapsible1',
  Collapsible2 = 'collapsible2',
  Collapsible3 = 'collapsible3',
  Collapsible4 = 'collapsible4',
}

const collapsibleImages = {
  [CollapsibleType.Collapsible1]: CollapseImage1,
  [CollapsibleType.Collapsible2]: CollapseImage2,
  [CollapsibleType.Collapsible3]: CollapseImage3,
  [CollapsibleType.Collapsible4]: CollapseImage4,
};

interface ICollapsible {
  title: string;
  text: string;
  numberCollapsible: string;
  onClick: () => void;
  activeCollapsible: CollapsibleType;
}

const Collapsible = ({
  title = 'title',
  text = 'text',
  onClick,
  activeCollapsible,
  numberCollapsible,
}: ICollapsible) => {

  const isActive = activeCollapsible === numberCollapsible;


  return (
    <div
      className={`p-4 text-left ${
        !isActive
          ? 'opacity-50 hover:text-f-orange hover:opacity-100 duration-300'
          : ''
      }`}
    >
      <div
        onClick={onClick}
        className={`${
          isActive ? 'border-l-4 pl-5 py-4' : ''
        } text-3xl border-f-orange  cursor-pointer font-semibold`}
      >
        {title}
      </div>
      <div
        className={`transition-max-height duration-300 ${
          isActive ? 'max-h-1000' : 'max-h-0'
        } overflow-hidden`}
      >
        <div className='md:hidden mt-4 max-h-72'>
          <Image
            className='max-h-72 object-cover rounded-[20px] w-full'
            src={collapsibleImages[activeCollapsible]}
            alt=''
          />
        </div>
        <p className='mb-8 mt-4 text-darker-orange text-base'>{text}</p>
        <Link
          href='/#form' 
          className='text-base inline-flex gap-3 font-semibold'
        >
          Sign up
          <Image src={btnIconArrowRight} width={24} alt='icon-arr-outline' />
        </Link>
      </div>
    </div>
  );
};

const CarrierGrade = () => {

  const [activeCollapsible, setActiveCollapsible] = useState<CollapsibleType>(
    CollapsibleType.Collapsible1
  );

  const handleCollapsibleClick = (collapsibleId: CollapsibleType) => {
    setActiveCollapsible(collapsibleId);
  };

  return (
    <div className='bg-white py-8 lg:py-20'>
      <ScrollVisibility>
        <div className='container text-center'>

          <h2 className='h2 mb-5'>
            Carrier-grade connectivity,
            <br />
            <span className='color-orange'>democratized at last</span>
          </h2>
          <h3 className='mb-14 text-lg text-darker-orange max-w-4xl m-auto'>
            The latest in telecom meets the greatest in web3. We’re bridging the
            two powers to launch a forever network that only gets stronger.
          </h3>
          <div className='flex gap-20'>
            <div className='flex-1'>
              <Collapsible
                activeCollapsible={activeCollapsible}
                numberCollapsible={CollapsibleType.Collapsible1}
                onClick={() =>
                  handleCollapsibleClick(CollapsibleType.Collapsible1)
                }
                title='A zone of your own'
                text='Place a Gateway radio anywhere to create new networks wherever you need, including in remote or rural areas.'
              />
              <Collapsible
                activeCollapsible={activeCollapsible}
                numberCollapsible={CollapsibleType.Collapsible2}
                onClick={() =>
                  handleCollapsibleClick(CollapsibleType.Collapsible2)
                }
                title='Encrypted calls & texts'
                text='Keep your communications secure. Everything you send and receive remain encrypted, and nobody will ever monitor your data usage. '
              />
              <Collapsible
                activeCollapsible={activeCollapsible}
                numberCollapsible={CollapsibleType.Collapsible3}
                onClick={() =>
                  handleCollapsibleClick(CollapsibleType.Collapsible3)
                }
                title='Uninterruptible connectivity'
                text='Our proprietary carrier-grade Gateway radios give you constant connectivity to power any number of devices and tasks.'
              />
              <Collapsible
                activeCollapsible={activeCollapsible}
                numberCollapsible={CollapsibleType.Collapsible4}
                onClick={() =>
                  handleCollapsibleClick(CollapsibleType.Collapsible4)
                }
                title='Plug-and-go setup'
                text='Build your network with nothing but power and internet. Gateways are capable of creating carrier-grade networks that span miles of coverage.'
              />
            </div>
            <div className='flex-1 hidden md:block'>
              <Image className='max-h-full min-h-72 object-cover rounded-[20px] w-full' src={collapsibleImages[activeCollapsible]} alt='' />
            </div>
          </div>

          <div className='mt-14 flex flex-col sm:flex-row items-center justify-center gap-3'>
            <Link href='https://signup.karrier.one' target='_blank' className='btn-transparent flex gap-3'>
              Reserve a radio
              <Image
                src={btnIconArrowRight}
                width={24}
                alt='icon-arr-outline'
              />
            </Link>
          </div>
        </div>
      </ScrollVisibility>
    </div>
  );
};

export default CarrierGrade;
