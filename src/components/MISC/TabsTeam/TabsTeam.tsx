'use client';
import React from 'react';
import Image from 'next/image';
import socialInIcon from '../../images/icons/icon-in-outline.svg';
import { Leadership } from './mockData/leadership';
import { Advisors } from './mockData/advisors';
import { ITabPanel, IMemberTeam, ITab } from './types';

const TabPanel = ({ children, openTab, numberTab, tabId }: ITabPanel) => {
  return (
    <div
      className={
        openTab === numberTab ? 'flex flex-wrap gap-8 justify-center' : 'hidden'
      }
      id={tabId}
    >
      {children}
    </div>
  );
};

const Tab = ({ label, href, active, onClick }: ITab) => {
  return (
    <li className='-mb-px mr-2 last:mr-0 items-center'>
      <a
        className={
          'py-3 px-6 font-semibold text-base rounded-full' +
          (active ? ' bg-black text-white ' : ' bg-grey ')
        }
        onClick={onClick}
        data-toggle='tab'
        href={href}
        role='tablist'
      >
        {label}
      </a>
    </li>
  );
};

const MemberTeam = ({ name, photo, position, text, linkedin }: IMemberTeam) => {
  return (
    <div className='flex gap-6 max-w-sm sm:max-w-[320px] sm:min-w-[320px] text-left'>
      <div className='w-full'>
        <Image
          src={`/images/team/${photo}`}
          className='mb-7 rounded-[20px] w-full object-cover h-40 md:h-64'
          width={100}
          height={100}
          alt=''
        />
        <h5 className='text-lg font-semibold flex gap-3'>
          <span className=''>{name}</span>
          <a href={linkedin} target='_blank'>
            <Image src={socialInIcon} width={24} alt='icon-chat-outline' />
          </a>
        </h5>
        <p className='mb-2 '>{position}</p>
        <p className='text-darker-orange opacity-80 text-sm'>{text}</p>
      </div>
    </div>
  );
};

const TabsTeam = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <ul
            className='flex mb-10 list-none flex-wrap pt-3 pb-4 flex-row justify-center'
            role='tablist'
          >
            <Tab
              active={openTab === 1}
              href={'#link1'}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              label={'Leadership'}
            />
            <Tab
              active={openTab === 2}
              href={'#link2'}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              label={'Advisors'}
            />
          </ul>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full'>
            <div className='py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <TabPanel tabId='link2' openTab={openTab} numberTab={1}>
                  {Leadership.map((item) => {
                    return (
                      <MemberTeam
                        key={item.name}
                        {...item}
                        photo={`leadership/${item.photo}`}
                      />
                    );
                  })}
                </TabPanel>
                <TabPanel tabId='link2' openTab={openTab} numberTab={2}>
                  {Advisors.map((item) => {
                    return (
                      <MemberTeam
                        key={item.name}
                        {...item}
                        photo={`advisors/${item.photo}`}
                      />
                    );
                  })}
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsTeam;
