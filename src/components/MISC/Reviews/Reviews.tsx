'use client';
import React from 'react';
import { MouseEventHandler } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Slide1 from '../../images/slider/slide1.png';
import ArrowRightIcon from '../../images/icons/icon-arrow-right-outline.svg';
import ArrowLeftIcon from '../../images/icons/icon-arrow-left-outline.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ScrollVisibility } from '../ScrollVisibility';

const testimonials = [
  {
    text: 'We’ve been working closely with Karrier One to supply our reserve entirely with a decent cell service at a decent rate. This is exciting times—to be able to add the cell phone to our list of services.',
    name: 'Jeff Thomas President',
    position: 'First Nations Cable',
  },
  {
    text: 'It’s something our communities are in desperate need of: having a solution for service and then putting it to another level of monetizing it—to create our own economy within. With Karrier One being such an easy and cost-effective way to deploy that, you’ll see a tremendous amount of uptake on this—in our community here and other communities across Canada.',
    name: 'Landon Miller',
    position: 'Six Nations of the Grand River - Mohawk, Turtle Clan',
  },
];

type ITestimonials = {
  text: string;
  name: string;
  position: string;
};

interface ArrowProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const PrevBtn = ({ onClick }: ArrowProps) => {
  return (
    <div
      onClick={onClick}
      className='hidden lg:block bg-gray p-5 rounded-full w-fit absolute -left-16 top-2/4 cursor-pointer'
    >
      <Image src={ArrowLeftIcon} alt='' />
    </div>
  );
};

const NextBtn = ({ onClick }: ArrowProps) => {
  return (
    <div
      onClick={onClick}
      className='hidden lg:block bg-gray p-5 rounded-full w-fit absolute -right-16 top-2/4 cursor-pointer'
    >
      <Image src={ArrowRightIcon} alt='' />
    </div>
  );
};

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <div className='bg-white py-20 lg:py-20'>
      <ScrollVisibility>
        <div className='container text-center'>
          <Slider {...settings} className='team-slider'>
            {testimonials.map(({ text, name, position }: ITestimonials) => {
              return (
                <div className='text-center lg:p-10' key='index'>
                  <Image className='w-full max-w-[140px] mb-10 m-auto' src={Slide1} alt='' />
                  <p className='h2 smaller mb-10'>
                    {text}
                  </p>
                  <div className='flex items-center gap-5 justify-center flex-wrap'>
                    <span className='font-semibold text-xl'>{name}</span>
                    <span className='w-1.5 h-1.5 bg-black rounded-full' />
                    <span className='text-xl'>{position}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </ScrollVisibility>
    </div>
  );
};

export default Reviews;
