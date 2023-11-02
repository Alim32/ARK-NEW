'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollVisibility } from '../ScrollVisibility';
import Slide1 from '../../images/slider/slide1.png';
import Slide2 from '../../images/slider/slide2.png';
import Slide3 from '../../images/slider/slide3.png';
import Slide4 from '../../images/slider/slide4.png';
import Slide5 from '../../images/slider/slide5.png';
import Slide6 from '../../images/slider/slide6.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderImage {
  img: any;
  link: string;
}

const sliderImages: SliderImage[] = [
  { img: Slide1, link: 'https://polygon.technology/' },
  { img: Slide2, link: 'https://airspan.com/' },
  { img: Slide3, link: 'https://www.iristel.com/' },
  { img: Slide4, link: 'https://www.icewireless.com/' },
  { img: Slide5, link: 'https://blinqnetworks.com/' },
  { img: Slide6, link: 'https://www.sixnations.ca/' },
  { img: Slide1, link: 'https://polygon.technology/' },
  { img: Slide2, link: 'https://airspan.com/' },
  { img: Slide3, link: 'https://www.iristel.com/' },
  { img: Slide4, link: 'https://www.icewireless.com/' },
  { img: Slide5, link: 'https://blinqnetworks.com/' },
  { img: Slide6, link: 'https://www.sixnations.ca/' },
  { img: Slide1, link: 'https://polygon.technology/' },
  { img: Slide2, link: 'https://airspan.com/' },
  { img: Slide3, link: 'https://www.iristel.com/' },
  { img: Slide4, link: 'https://www.icewireless.com/' },
  { img: Slide5, link: 'https://blinqnetworks.com/' },
  { img: Slide6, link: 'https://www.sixnations.ca/' },
];


const PoweringFuture: React.FC = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = sliderImages.map(({ img }) => {
          return new Promise((resolve, reject) => {
            const imgElement = new (Image as any)();
            imgElement.src = img.src;
            imgElement.onload = resolve;
            imgElement.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        setIsImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 4000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 4000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 4000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 4000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 3000,
        },
      },
    ],
  };
  return (
    <div className='bg-white py-20'>
      <ScrollVisibility>
        <div className='container text-center'>
          <h2 className='mb-7 text-lg font-semibold'>
            Powering the <span className='color-orange'>future </span> of DeWi
          </h2>
          <Slider {...settings}>
            {sliderImages.map(({ img, link }: any) => {
              return (
                <Link key={link} href={link} passHref legacyBehavior className='w-full'>
                  <a
                    target='_blank'
                    className='!flex items-center justify-center bg-grey h-16 rounded-full hover:bg-f-orange outline-none cursor-pointer duration-500'
                  >
                    <Image
                      src={img}
                      alt=''
                      width={100}
                      height={100}
                      className='w-[80%] h-8 object-contain'
                    />
                  </a>
                </Link>
              );
            })}
          </Slider>
        </div>
      </ScrollVisibility>
    </div>
  );
};

export default PoweringFuture;
