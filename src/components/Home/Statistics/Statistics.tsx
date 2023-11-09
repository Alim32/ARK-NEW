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
                        <h3 className='text-white mb-10'>Ecosystem Statistics</h3>
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
                    <div className="divider lg:block hidden h-[500px]"></div>
                    <div className="flex flex-col justify-center items-center w-[100%] px-5 lg:mt-0 mt-[75px]">
                        <h4 className="text-white-60">You Earn</h4>
                        <div className='flex flex-row justify-evenly w-[100%] mt-10'>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <h3 id='daily' className='text-white'>${formatterNoDec.format(values.daily)}</h3>
                                <p className='text-white-30'>per day</p>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <h3 id='weekly' className='text-white'>${formatterNoDec.format(values.weekly)}</h3>
                                <p className='text-white-30'>per week</p>
                            </div>
                        </div>
                        <div className='flex flex-row justify-evenly w-[100%] mt-10'>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <h3 id='monthly' className='text-white'>${formatterNoDec.format(values.monthly)}</h3>
                                <p className='text-white-30'>per month</p>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <h3 id='yearly' className='text-white'>${formatter.format(values.yearly)}</h3>
                                <p className='text-white-30'>per year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollVisibility>
    );
};

export default Statistics;
