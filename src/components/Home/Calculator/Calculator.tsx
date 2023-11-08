"use client";
import Image from "next/image";
import { getNFTData, getNFTBalance, getShares } from "@/scripts/legacy";
import { formatter, formatterNoDec, calculate, calculateNoSetter, onInput, getInitValues, setNewNFT, openDropDown } from '@/scripts/test';
import { useState } from 'react';
import { Dropdown } from "../../MISC/Dropdown";

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

const Calculator = ({
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
        <div className='mt-[15vh] pb-[100px]'>
            <h3 className='text-white-30 text-center mt-[175px]'>Calculate your returns</h3>
            <div className='flex lg:flex-row flex-col w-100 justify-evenly items-center mt-[100px]'>
                <div className="flex flex-col justify-center items-center w-[100%]">
                    <button className='flex flex-row items-center justify-between dropdown-box px-5 py-3 cp w-[85%]' onClick={() => openDropDown("dropdown-1")}>
                        <Image
                            src={"/icons/nft.png"}
                            width={30}
                            height={50}
                            alt="nft logo"
                            className='mr-5'
                        />
                        <h4 className="text-white text-center mx-5 ls-wider" id='nft-text'>DIAMOND</h4>
                    </button>
                    <div id='dropdown-1' className='dropdown w-[85%]'>
                        <DropItem clickEvent={() => changeShares(100, 1)} text={"COPPER"} image={"/icons/nft.png"} />
                        <DropItem clickEvent={() => changeShares(250, 2)} text={"TIN"} image={"/icons/nft.png"} />
                        <DropItem clickEvent={() => changeShares(500, 3)} text={"BRONZE"} image={"/icons/nft.png"} />
                        <DropItem clickEvent={() => changeShares(1000, 4)} text={"SILVER"} image={"/icons/nft.png"} />
                        <DropItem clickEvent={() => changeShares(4000, 5)} text={"GOLD"} image={"/icons/nft.png"} />
                        <DropItem clickEvent={() => changeShares(10000, 6)} text={"PLATINUM"} image={"/icons/nft.png"} />
                        <DropItem clickEvent={() => changeShares(50000, 7)} text={"DIAMOND"} image={"/icons/nft.png"} />
                    </div>

                    <p className="text-white-30 text-lg text-center mt-[75px]">Utility Products Profits<br /><span className='text-sm'>(Monthly)</span></p>
                    <div className="flex flex-row items-center justify-between 2xl:mt-5 mt-10 w-[85%]">
                        <p className="text-white-60 ws-nowrap mb-0 hide-xs 2xl:text-base xl:text-sm text-xs">$100k</p>
                        <input type="range" className="slider mx-3" id="range1" max={10000000} min={100000} value={sliderVal} step={100000} onChange={(e) => calculate(e, setSliderVal, setInputVal, shares)} />
                        <p className="text-white-60 ws-nowrap mb-0 hide-xs 2xl:text-base xl:text-sm text-xs">$10m</p>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-10">
                        <p className='text-xl text-white-30'>$</p>
                        <input type="number" lang='en' step="0.01" className='text-xl text-white text-center form-control ls-wide' id='selectedAmount' value={inputVal} onChange={(e) => onInput(e, setSliderVal, setInputVal, shares)} />
                    </div>
                    h1</div>
                <div className="divider lg:block hidden"></div>
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
    );
};

export default Calculator;
