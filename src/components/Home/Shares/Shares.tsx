"use client";
import { getNFTData, getNFTBalance, getShares } from "@/scripts/legacy";
import { formatter, formatterNoDec } from '@/scripts/test';



const Shares = ({
    address,
    openmodal
}: any) => {
    var shares = getShares(address);

    return (
        <h1 className="text-white text-center md:tracking-[0.1em] my-5 mt-4 cp" onClick={openmodal}>
            <span className='text-white-30 mr-[1rem]'>$</span>
            <span className='text-white'>{formatterNoDec.format(shares)}</span>
            <span className='text-white-30'>{formatter.format(shares).substring(formatter.format(shares).indexOf("."), formatter.format(shares).length)}</span>
        </h1>
        <h4 className='text-white ls-wide cp' onClick={openmodal}>{balance} <span className='ml-[11px] text-white-30'>NFT(s)</span></h4>
    );
};

export default Shares;
