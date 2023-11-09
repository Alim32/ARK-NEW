"use client";
import Image from "next/image";
import { getNFTData, getNFTBalance, getShares } from "@/scripts/legacy";
import { formatter, formatterNoDec, calculate, calculateNoSetter, onInput, getInitValues, setNewNFT, openDropDown } from '@/scripts/test';
import { useState } from 'react';
import { Dropdown } from "../../MISC/Dropdown";
import { ScrollVisibility } from '@/components/ScrollVisibility'

const DropItem = ({
    image,
    text,
    clickEvent
}: any) => {
    return (
        <button className='dropdown-item' onClick={clickEvent}>
            <Image
                src={image}
                width={30}
                height={50}
                alt="nft logo"
                className='mr-5'
            />
            <h4 className="text-white text-center mx-5 ls-wider">{text}</h4>
            <span></span>
        </button>
    )
}

const Statistics = ({
}: any) => {
    const [sliderVal, setSliderVal] = useState(100000);
    const [inputVal, setInputVal] = useState(100000);
    const [shares, setShares] = useState(10000);

    function changeShares(amount = 0, id = 1) {
        setShares(amount);
        setSliderVal(sliderVal);
        setInputVal(sliderVal);
        calculateNoSetter(sliderVal, shares);
        setNewNFT(id);
    }

    var values = getInitValues(sliderVal, shares);

    return (
        <ScrollVisibility>
            <div className='mt-[15vh] mb-[15vh] 2xl:p-10 xl:p-5 sm:p-4 stats-box'>
                <div className='flex lg:flex-row flex-col w-100 justify-evenly items-center'>
                    <div className="flex flex-col justify-start items-start w-[100%] px-5">
                        <h3 className='text-white mb-10 mt-5'>Ecosystem Statistics</h3>
                        <button className='btn-products'>
                            <h5>Privacy Products</h5>
                            <p>Our decentralized Emailing, VPN, Password Manager and File Manager services.</p>
                        </button>
                        <button className='btn-products mt-3 active'>
                            <h5>Banking Products</h5>
                            <p>Our arrangement of crypto to fiat and fiat to crypto solutions.</p>
                        </button>
                        <button className='btn-products mt-3'>
                            <h5>Arklite</h5>
                            <p>Lorem ipsum dolar connet.</p>
                        </button>
                    </div>
                    <div className="divider lg:block hidden h-[550px]"></div>
                    <div className="flex flex-col justify-center items-center w-[100%] px-5 lg:mt-0 md:mt-[75px] mt-[25px] pb-5">
                        <video autoPlay={true} muted={true} loop={true} playsInline={true} className="max-w-[325px] md:order-1 order-3 md:mt-0 mt-5">
                            <source src={"/video/cards.mp4"} type="video/mp4" />
                        </video>
                        <div className='flex flex-row justify-center items-center w-[100%] md:mt-0 mt-7 md:order-2 order-1'>
                            <div className='info-box flex flex-col items-center justify-center text-center min-w-[115px] sm:mx-2 mx-1'>
                                <p className='text-lg text-white sm:text-base text-[16px]'>{formatterNoDec.format(84)}</p>
                                <p className='text-lg text-white-30 mb-0'>Terras</p>
                            </div>
                            <div className='info-box flex flex-col items-center justify-center text-center min-w-[115px]  sm:mx-2 mx-1 '>
                                <p className='text-lg text-white sm:text-base text-[16px]'>${formatterNoDec.format(58700900)}</p>
                                <p className='text-lg text-white-30 mb-0'>Loaded</p>
                            </div>
                            <div className='info-box flex flex-col items-center justify-center text-center min-w-[115px]  sm:mx-2 mx-1 '>
                                <p className='text-lg text-white sm:text-base text-[16px]'>${formatterNoDec.format(312006)}</p>
                                <p className='text-lg text-white-30 mb-0'>Profits</p>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center w-[100%] sm:mt-4 mt-2 md:order-3 order-2'>
                            <div className='info-box flex flex-col items-center justify-center text-center min-w-[115px]  sm:mx-2 mx-1 '>
                                <p className='text-lg text-white sm:text-base text-[16px]'>{formatterNoDec.format(129)}</p>
                                <p className='text-lg text-white-30 mb-0'>Airs</p>
                            </div>
                            <div className='info-box flex flex-col items-center justify-center text-center min-w-[115px]  sm:mx-2 mx-1 '>
                                <p className='text-lg text-white sm:text-base text-[16px]'>${formatterNoDec.format(28700090)}</p>
                                <p className='text-lg text-white-30 mb-0'>Loaded</p>
                            </div>
                            <div className='info-box flex flex-col items-center justify-center text-center min-w-[115px]  sm:mx-2 mx-1 '>
                                <p className='text-lg text-white sm:text-base text-[16px]'>${formatterNoDec.format(2000326)}</p>
                                <p className='text-lg text-white-30 mb-0'>Profits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollVisibility>
    );
};

export default Statistics;
