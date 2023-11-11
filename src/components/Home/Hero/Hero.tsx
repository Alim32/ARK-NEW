"use client";
import Image from "next/image";
import { getNFTData, getNFTBalance, getShares } from "@/scripts/legacy";
import { formatter, formatterNoDec } from '@/scripts/test';
import { ScrollVisibility } from '@/components/ScrollVisibility'
import { HomeStatsModal } from '@/components/Home/HomeStatsModal';
import { OpenModal, CloseModal } from '@/scripts/test.js';

const Hero = ({
    address    
}: any) => {
    var shares = getShares(address);
    var balance = getNFTBalance(address);
    var width = window.innerWidth;    
    var filename = "/images/arc_main.png";
    if (width < 1300) {
        filename = "/images/arc_mob.png";
    }

    return (
        <ScrollVisibility>
            <div className='flex flex-col w-100 justify-center items-center lg:pt-[2.5vh] 2xl:pb-[20vh] lg:pb-[5vh]'>
                <h1 className="text-white text-center md:tracking-[0.1em] my-5 mt-4 cp" onClick={() => OpenModal("modal-myacc")}>
                    <span className='text-white-30 mr-[1rem]'>$</span>
                    <span className='text-white'>{formatterNoDec.format(shares)}</span>
                    <span className='text-white-30 sm:inline hidden'>{formatter.format(shares).substring(formatter.format(shares).indexOf("."), formatter.format(shares).length)}</span>
                </h1>
                <h3 className='text-white ls-wide cp' onClick={() => OpenModal("modal-myacc")}>{balance} <span className='ml-[11px] text-white-30'>NFT(s)</span></h3>
                <Image
                    className="w-100 h-100 object-fit-contain mt-10 pt-5"
                    src={filename}
                    width={1600}
                    height={1000}
                    alt="ARC ARK"
                />
                <div className='flex flex-row justify-evenly items-center xl:-mt-[5rem] lg:-mt-[3rem] -mt-[0rem]'>
                    <button className='xl:text-base text-sm btn-white mx-2 xl:px-4 sm:px-3 px-2 sm:py-2 py-1 flex flex-row items-center sm:mt-0 mt-[50px]'>
                        <span className='2xl:mt-1'>Mint NFT</span>
                        <Image
                            className="w-100 h-100 object-fit-contain ml-2"
                            src={"/images/mint.png"}
                            width={25}
                            height={25}
                            alt="Mint NFT"
                        />
                    </button>
                    <button className='xl:text-base text-sm btn-white mx-2 xl:px-4 sm:px-3 px-2 sm:py-2 py-1  flex flex-row items-center sm:mt-0 mt-[50px]'>
                        <span className='2xl:mt-1'>Claim Rewards</span>
                        <Image
                            className="w-100 h-100 object-fit-contain ml-2"
                            src={"/images/claim.png"}
                            width={25}
                            height={25}
                            alt="Claim Rewards"
                        />
                    </button>
                </div>
            </div>
            <HomeStatsModal id={"modal-myacc"} closeEvent={() => CloseModal("modal-myacc")} balance={balance} address={address} />
        </ScrollVisibility>
    );
};

export default Hero;
