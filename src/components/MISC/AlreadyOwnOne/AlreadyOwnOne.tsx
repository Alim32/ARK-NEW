'use client';
import Image from 'next/image';
import btnIconArrowRight from '../../images/icons/icon-arrow-right-outline.svg';
import { ScrollVisibility } from '../ScrollVisibility';
import MailchimpForm from '../MailchimpSubscribe/MailchimpSubscribeForm';

function handleCheckBox(){  
  const ele = document.getElementById("check-hardware-subscribe") as HTMLInputElement;
  const btn = document.getElementById("btn-hardware-subscribe") as HTMLButtonElement;
  
  if(ele.checked){
    btn.disabled = false;
  }else{    
    btn.disabled = true;
  }
}

const AlreadyOwnOne = () => {
  return (
    <div className='bg-white py-20'>
      <div className='container'>
        <ScrollVisibility>
          <div className='flex flex-col justify-center text-center w-100 mt-[85px]'>
            <h2 className='h2'>
              Already own <span className='color-orange'>a radio?</span>
            </h2>
            <h4 className='md:text-xl text-md md:mt-10 mt-4 subtitle'>
              Karrier One revolutionizes your network connection with affordable, user friendly hardware.<br/>
              Enjoy seamless connectivity and enhanced network experiences with our state of the art tools.
            </h4>
          </div>
          <div className='flex flex-col w-100 justify-center text-center items-center'>
            <MailchimpForm btnID="btn-hardware-subscribe" disabled={true} />
            <input type="checkbox" id="check-hardware-subscribe" value="" onChange={handleCheckBox}></input>
          </div>          

          <Image
            src={'/images/hardware/radio.png'}
            width={400}
            height={400}
            alt="image-radio"
            className='mx-auto mt-[65px]'
          />
        </ScrollVisibility>
     
      </div>  
    </div>
  );
};

export default AlreadyOwnOne;