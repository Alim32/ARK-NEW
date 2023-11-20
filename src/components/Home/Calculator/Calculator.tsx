"use client";
import Image from "next/image";
import { getTotalShares, getContributions, getMaxSupply } from "@/scripts/legacy";
import { formatter, formatterNoDec, calculate, calculateNoSetter, getInitValues, setNewNFT, openDropDown } from '@/scripts/home';
import { useState } from 'react';
import { Dropdown } from "../../MISC/Dropdown";
import { ScrollVisibility } from '@/components/ScrollVisibility'
import { initialize } from "next/dist/server/lib/render-server";

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

const ProgressItem = ({
    width,
    id,
    activeId,
    perc
}: any) => {
    const customStyles = {
        width: width + "%"
    }
    const active = id == activeId;

    return (
        <div className='flex flex-col items-start justify-start -ml-[10px] xl:flex hidden' style={customStyles}>
            <p className='text-white flex flex-col justify-center items-center'>
                <span className={`${active ? "text-activated" : "text-white-60"} `}>Tier {id}</span>
                <span className='text-white-30 text-sm'>{perc}%</span>
                {active ? <Image src='https://bank.arkfi.io/img/fast.png' alt='boost' width={35} height={35} className='contrast-200 mb-2' /> : <span className='h-[35px] w-[1px]'></span>}
                <span className={`divider-2 h-[50px]`}></span>
            </p>
        </div>
    )
}

const Calculator = ({
}: any) => {
    const [sliderVal, setSliderVal] = useState(100000);
    const [inputVal, setInputVal] = useState(100000);
    const [shares, setShares] = useState(10000);

    var activeId = 1;
    var totalShares = getTotalShares();
    var values = getInitValues(sliderVal, shares, totalShares);
    var totalContribution = getContributions();
    var maxSupply = getMaxSupply();
    var percentage = 0;
    var activeTier = "Tier 1";
    var activePercentage = 25;
    //End of Tiers
    var tiers = {1: 2000000, 2: 3300000, 3: 4300000, 4: 5000000, 5: 5500000, 6: 6000000};

    function GetTierPercentage(tier = -1) {
        switch (tier) {
            case 1:
                return 25;
            case 2:
                return 20;
            case 3:
                return 15;
            case 4:
                return 10;
            case 5:
                return 5;
            case 6:
                return 0;
            default:
                return 0;
        }
    }

    for (const [key, value] of Object.entries(tiers)) {
        if (totalContribution <= value) {
            activeId = Number(key);            
            percentage = totalContribution / maxSupply * 100;
            GetTierPercentage;
            activeTier = `Tier ${key}`;
            activePercentage = GetTierPercentage(Number(key));
            break;
        }
    }

    function changeShares(amount = 0, id = 1) {
        setShares(amount);
        setSliderVal(sliderVal);
        setInputVal(sliderVal);
        calculateNoSetter(sliderVal, shares, totalShares);
        setNewNFT(id);        
    }

    return (
        <ScrollVisibility>
            <div className='mt-[15vh] pb-[100px]'>
                <h3 className='text-white-30 text-center mt-[200px]'>Calculate your returns</h3>
                <div className='flex lg:flex-row flex-col w-100 justify-evenly items-center mt-[100px]'>
                    <div className="flex flex-col justify-center items-center w-[100%] px-5">
                        <button className='flex flex-row items-center justify-between dropdown-box px-5 py-3 cp w-[85%]' onClick={() => openDropDown("dropdown-1")}>
                            <Image
                                src={"/images/platinum.png"}
                                width={30}
                                height={50}
                                alt="nft logo"
                                className='mr-5'
                                id="selected-nft"
                            />
                            <h4 className="text-white text-center mx-5 ls-wider" id='nft-text'>PLATINUM</h4>
                        </button>
                        <div id='dropdown-1' className='dropdown w-[85%]'>
                            <DropItem clickEvent={() => changeShares(100, 1)} text={"COPPER"} image={"/images/copper.png"} />
                            <DropItem clickEvent={() => changeShares(250, 2)} text={"TIN"} image={"/images/tin.png"} />
                            <DropItem clickEvent={() => changeShares(500, 3)} text={"BRONZE"} image={"/images/bronze.png"} />
                            <DropItem clickEvent={() => changeShares(1000, 4)} text={"SILVER"} image={"/images/silver.png"} />
                            <DropItem clickEvent={() => changeShares(4000, 5)} text={"GOLD"} image={"/images/gold.png"} />
                            <DropItem clickEvent={() => changeShares(10000, 6)} text={"PLATINUM"} image={"/images/platinum.png"} />
                            <DropItem clickEvent={() => changeShares(50000, 7)} text={"DIAMOND"} image={"/images/platinum.png"} />
                        </div>

                        <p className="text-white-30 text-lg text-center mt-[75px]">Utility Products Profits<br /><span className='text-sm'>(Monthly)</span></p>
                        <div className="flex flex-row items-center justify-between 2xl:mt-5 mt-10 w-[85%]">
                            <p className="text-white-60 ws-nowrap mb-0 hide-xs 2xl:text-base xl:text-sm text-xs">$100k</p>
                            <input type="range" className="slider mx-3" id="range1" max={10000000} min={100000} value={sliderVal} step={100000} onChange={(e) => calculate(e, setSliderVal, setInputVal, shares, totalShares)} />
                            <p className="text-white-60 ws-nowrap mb-0 hide-xs 2xl:text-base xl:text-sm text-xs">$10m</p>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-10">
                            <p className='text-xl text-white-30'>$</p>
                            <input type="text" disabled lang='en' step="0.01" className='text-xl text-white text-center form-control ls-wide' id='selectedAmount' value={formatter.format(inputVal)} />
                        </div>
                        h1</div>
                    <div className="divider lg:block hidden h-[350px]"></div>
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
                <div className='flex flex-col mt-[100px]'>
                    <h4 className='text-center text-activated'>Up to {activePercentage}%</h4>
                    <div className='flex flex row justify-center items-center my-2'>
                        <Image src='https://bank.arkfi.io/img/fast.png' alt='boost' width={35} height={35} className='contrast-200 mx-2' />
                        <h4 className='text-center text-white-30 font-semibold'>Current Boost</h4>
                        <Image src='https://bank.arkfi.io/img/fast.png' alt='boost' width={35} height={35} className='contrast-200 mx-2' />
                    </div>
                    <h5 className='text-center text-white'>{activeTier}</h5>
                </div>
                <div className='flex flex-col xl:mt-[200px] mt-5'>
                    <div className='flex flex-row w-[100%]'>
                        <ProgressItem perc={25} activeId={activeId} width={33} id={1} />
                        <ProgressItem perc={20} activeId={activeId} width={22} id={2} />
                        <ProgressItem perc={15} activeId={activeId} width={16} id={3} />
                        <ProgressItem perc={10} activeId={activeId} width={12} id={4} />
                        <ProgressItem perc={5} activeId={activeId} width={9} id={5} />
                        <ProgressItem perc={0} activeId={activeId} width={8} id={6} />
                    </div>
                    <div className='flex flex-col'>
                        <progress className='h-[25px] xl:w-[100%] progress-home xl:mx-0 mx-auto w-[90%]' value={percentage  } max={100}></progress>

                    </div>
                    <div className='flex flex-row xl:w-[50%] w-[100%] justify-evenly xl:mx-auto mt-5 xl:mt-10'>
                        <div className='flex flex-col'>
                            <h4 className='text-center text-white-60'>{percentage.toFixed(1)}%</h4>
                            <p className='text-center text-white-30'>Minted</p>
                        </div>
                    </div>
                </div>

            </div>
        </ScrollVisibility>
    );
};

export default Calculator;
