'use client';
import Image from "next/image";
import { formatterNoDec, formatter, openDropDown } from "@/scripts/home";
import { getUSDTBalance } from "@/scripts/general";
import { getPriceOfLevel, getCurrentBoostOfLevel, getCurrentTier } from "@/scripts/legacy";
import { MintButton } from "@/components/Layout/MintButton";
import { setMintNFT } from "@/scripts/home";
import { useState } from 'react';

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

const HomeMintModal = ({
    id,
    closeEvent,
    credit = 0,
    address
}: any) => {
    const [level, setLevel] = useState(8);
    var currentTier = getCurrentTier();
    var price = getPriceOfLevel(level);
    var usdtBalance = getUSDTBalance(address);
    var boost = getCurrentBoostOfLevel(level, currentTier);

    var usedCredit = 0;

    if (price < credit) {
        usedCredit = price;
    } else {
        usedCredit = credit;
    }
    
    return (
        <div className='modal-overlay' id={id + "overlay"}>
            <div className="modal" id={id}>
                <div className='flex flex-row justify-between lg:items-start items-center w-100 h-[7.5%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <h4 className='text-white'>Mint NFT</h4>
                    <button className='text-white font-semibold text-2xl x-btn' onClick={closeEvent}>X</button>
                </div>
                <div className='flex flex-col h-[92.5%] w-[100%] lg:px-[50px] px-[25px] lg:pt-[35px] pt-[20px] overflow-y-auto'>
                    <button className='flex flex-row items-center justify-between dropdown-box md:px-5 px-4 md:py-3 py-1 h-fit cp w-[100%] md:mt-5 mt-4' onClick={() => openDropDown("dropdown-mint")}>
                        <Image
                            src={"/images/platinum.png"}
                            width={30}
                            height={50}
                            alt="nft logo"
                            className='md:mr-5 mr-4 md:max-h-[50px] md:max-w-[30px] max-h-[35px] max-w-[20px]'
                            id="mint-selection"
                        />
                        <h4 className="text-white text-center mx-5 ls-wider  md:text-2xl text-base" id='mint-text'>DIAMOND</h4>
                    </button>
                    <div id='dropdown-mint' className='dropdown w-[100%] dropdown-bg'>
                        <DropItem clickEvent={() => setMintNFT(1, setLevel)} text={"COPPER"} image={"/images/copper.png"} />
                        <DropItem clickEvent={() => setMintNFT(2, setLevel)} text={"TIN"} image={"/images/tin.png"} />
                        <DropItem clickEvent={() => setMintNFT(3, setLevel)} text={"BRONZE"} image={"/images/bronze.png"} />
                        <DropItem clickEvent={() => setMintNFT(4, setLevel)} text={"SILVER"} image={"/images/silver.png"} />
                        <DropItem clickEvent={() => setMintNFT(5, setLevel)} text={"GOLD"} image={"/images/gold.png"} />
                        <DropItem clickEvent={() => setMintNFT(6, setLevel)} text={"PLATINUM"} image={"/images/platinum.png"} />
                        <DropItem clickEvent={() => setMintNFT(7, setLevel)} text={"IRIDIUM"} image={"/images/platinum.png"} />
                        <DropItem clickEvent={() => setMintNFT(8, setLevel)} text={"DIAMOND"} image={"/images/platinum.png"} />
                    </div>
                    <div className='flex flex-col h-[100%]'>
                        <div className='flex flex-row justify-between items-center mt-10'>
                            <h4 className='text-white-30'>My Balance</h4>
                            <h4 className='text-white flex flex-row items-center'>
                                ${formatter.format(usdtBalance)}
                                <Image
                                    alt="usdt"
                                    src="/icons/usdt.png"
                                    width={28}
                                    height={28}
                                    className='ml-3'
                                />
                            </h4>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-5'>
                            <h4 className='text-white-30'>Mint Credit</h4>
                            <h4 className='text-white flex flex-row items-center'>
                                ${formatter.format(credit)}
                                <Image
                                    alt="usdt"
                                    src="/icons/usdt.png"
                                    width={28}
                                    height={28}
                                    className='ml-3'
                                />
                            </h4>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-5'>
                            <h4 className='text-white-30'>Boost</h4>
                            <h4 className='text-white flex flex-row items-center'>
                                {boost}%
                                <Image
                                    alt="usdt"
                                    src="/icons/fast.png"
                                    width={30}
                                    height={30}
                                    className='ml-3 contrast-200'
                                />
                            </h4>
                        </div>
                        <hr className='mt-5' />
                        <div className='flex flex-row justify-between items-center mt-5'>
                            <h4 className='text-white-30'>Price</h4>
                            <h4 className='text-white flex flex-row items-center'>
                                ${formatter.format(price)}
                                <Image
                                    alt="usdt"
                                    src="/icons/usdt.png"
                                    width={28}
                                    height={28}
                                    className='ml-3'
                                />
                            </h4>
                        </div>
                        {
                            credit > 0 ?
                                <div className='flex flex-row justify-between items-center mt-5'>
                                    <h4 className='text-white-30'>Credit</h4>
                                    <h4 className='text-white flex flex-row items-center'>
                                        -${formatter.format(usedCredit)}
                                        <Image
                                            alt="usdt"
                                            src="/icons/usdt.png"
                                            width={28}
                                            height={28}
                                            className='ml-3'
                                        />
                                    </h4>
                                </div>
                                : <></>
                        }
                        <hr className='mt-5' />
                        <div className='flex flex-row justify-between items-center mt-5'>
                            <h4 className='text-white-30'>Total</h4>
                            <h4 className='text-white flex flex-row items-center'>
                                ${formatter.format(price - usedCredit)}
                                <Image
                                    alt="usdt"
                                    src="/icons/usdt.png"
                                    width={28}
                                    height={28}
                                    className='ml-3'
                                />
                            </h4>
                        </div>
                        <div className='flex flex-row h-[100%] md:justify-end md:items-end md:mt-0 mt-5'>
                            <MintButton level={level} address={address} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeMintModal;