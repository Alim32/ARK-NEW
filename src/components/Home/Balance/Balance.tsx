"use client";
import { getNFTData, getNFTBalance, getShares } from "@/scripts/legacy";
import { formatter, formatterNoDec } from '@/scripts/test';



const Balance = ({
    address,
    openmodal
}: any) => {
    var balance = getNFTBalance(address);

    return (
        <h4 className='text-white ls-wide cp' onClick={openmodal}>{balance} <span className='ml-[11px] text-white-30'>NFT(s)</span></h4>
    );
};

export default Balance;
