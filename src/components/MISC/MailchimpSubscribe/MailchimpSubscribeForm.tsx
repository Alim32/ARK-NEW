import React, { useState } from 'react';
import Image from 'next/image';
import ArrowRightIcon from '../../images/icons/icon-arrow-right-outline.svg';
import EmailIcon from '../../images/icons/icon-email-outline.svg';

const MailchimpForm = ({btnID = "", disabled = false}: any) => {
  const [email, setEmail] = useState('');

  return (
    <form 
      action="https://one.us10.list-manage.com/subscribe/post?u=0991a42d2d34d39b6d4c742f7&amp;id=3ad193a615&amp;f_id=009cc7e5f0" 
      method="post" 
      id="mc-embedded-subscribe-form" 
      name="mc-embedded-subscribe-form" 
      className="validate relative mt-5 md:mt-11" 
      target="_blank" 
      noValidate
    >
      <div className="flex gap-3 flex-col md:flex-row">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-7 pointer-events-none">
            <Image src={EmailIcon} alt="email-icon" />
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="EMAIL"
            id="mce-EMAIL"
            className="bg-gray text-gray-900 text-sm rounded-full block w-full pl-16 py-4 pr-5 border border-transparent focus:border-f-orange focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <button 
          id={btnID}
          type="submit" 
          value="Subscribe" 
          name="subscribe" 
          disabled={disabled}
          className="btn-orange flex gap-2.5 items-center w-fit"
        >
          Subscribe
          <Image src={ArrowRightIcon} alt="arrow" />
        </button>
      </div>
    </form>
  );
};

export default MailchimpForm;
