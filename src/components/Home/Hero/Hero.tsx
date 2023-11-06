"use client";
import Image from "next/image";
import { getNFTData, getNFTBalance, getShares } from "@/scripts/legacy";
import { formatter, formatterNoDec } from '@/scripts/test';



const Hero = ({
    address,
    openmodal
}: any) => {
    var shares = getShares(address);
    var balance = getNFTBalance(address);
    var data = getNFTData(address);

    return (
        <div className='flex flex-col w-100 justify-center items-center'>
            <h1 className="text-white text-center md:tracking-[0.1em] my-5 mt-4 cp" onClick={openmodal}>
                <span className='text-white-30 mr-[1rem]'>$</span>
                <span className='text-white'>{formatterNoDec.format(shares)}</span>
                <span className='text-white-30'>{formatter.format(shares).substring(formatter.format(shares).indexOf("."), formatter.format(shares).length)}</span>
            </h1>
            <h3 className='text-white ls-wide cp' onClick={openmodal}>{balance} <span className='ml-[11px] text-white-30'>NFT(s)</span></h3>
            <Image
                className="w-100 h-100 object-fit-contain mt-10 pt-5"
                src={"/images/arc_main.png"}
                width={1600}
                height={1000}
                alt="ARC ARK"
            />
        </div>
    );
};

export default Hero;
