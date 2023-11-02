import React from 'react';
import Image from 'next/image';
import btnIconPlusCircle from "../../images/icons/icon-plus-circle-outline.svg";
import { Indoor, Outdoor, Accessoires } from './mockData/product';
import { ScrollVisibility } from '../ScrollVisibility';
import { IProductItem } from './types';

const ProductItem = ({ title, image, text }: IProductItem) => {
  return (  
   <div className='flex flex-col max-w-[350px] mt-[50px] mx-1 justify-around'>
        <Image
                        src={`/images/hardware/${image}`}
                        width={350}
                        height={350}
                        alt='product'
                      />
        <p className='text-2xl text-start font-bold mt-5'>{title}</p>
        <p className='text-sm mt-3'>{text}</p>
        <ProductButton id="1"/>
   </div>
  );
};

const ProductButton = ({
  id
}: any) => {
  return (
    <button className='w-100 py-3 mt-5 font-bold bg-gray rounded-[80px] flex flex-row align-center justify-center'>
      <p className='mt-[1px]'>Reserve Now</p>
      <Image
        src={btnIconPlusCircle}
        width={25}
        alt='product'
        className='ml-3'
      />
    </button>
  );
};

const BuyYourRadio = () => {
  return (
    <div className='bg-white py-20'>
      <div className='container'>
        <ScrollVisibility>
          <h2 className='h2 mb-2 md:mb-4 text-center'>
            Buy your ideal radio
          </h2>

          <h4 className='md:text-lg text-md md:mt-6 mt-4 text-center'>
            Get started by choosing a Gateway and maximize your setup with extra Accessories.
          </h4>
        </ScrollVisibility>     
        <ScrollVisibility>
          <div className='mt-[75px]'>
            <h2 className='md:text-2xl text-xl font-bold'>Indoor</h2>
            <div className='flex flex-wrap justify-evenly'>
                {Indoor.map((item) => {
                    return (
                      <ProductItem
                        title={item.name}
                        text={item.text}                        
                        image={item.image}                        
                      />
                    );
                })}
            </div>
            <h2 className='md:text-2xl text-xl font-bold mt-[75px]'>Outdoor</h2>
            <div className='flex flex-wrap justify-evenly'>
                {Outdoor.map((item) => {
                    return (
                      <ProductItem
                        title={item.name}
                        text={item.text}                        
                        image={item.image}                        
                      />
                    );
                })}
            </div>
            <h2 className='md:text-2xl text-xl font-bold  mt-[75px]'>Accessories</h2>
            <div className='flex flex-wrap justify-evenly'>
                {Accessoires.map((item) => {
                    return (
                      <ProductItem
                        title={item.name}
                        text={item.text}                        
                        image={item.image}                        
                      />
                    );
                })}
            </div>
          </div>          
        </ScrollVisibility>
      </div>
    </div>
  );
};

export default BuyYourRadio;