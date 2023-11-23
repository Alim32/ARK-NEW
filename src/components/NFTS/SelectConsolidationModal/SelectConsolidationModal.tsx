'use client';
import Image from "next/image";
import { formatterNoDec, formatter, openDropDown } from "@/scripts/home";
import { GetNFTNameByLevel } from "../../../scripts/legacy";
import { useState } from "react";

const SelectConsolidationModal = ({
    address,
    id,
    closeEvent,
    selector
}: any) => {

    const NFTBlock = ({
        name,
        level
    }: any) => {
        return (
            <div className='flex flex-row mt-4 items-center justify-between cp mx-2 console-bar px-5' onClick={() => selector(level)}>
                <Image
                    src={`/images/${name.toLowerCase()}.jpg`}
                    alt="nft level"
                    width={35}
                    height={35}
                    className='mr-5 py-2 md:max-w-[35px] max-w-[25px]'
                />
                <h4 className='text-white font-semibold ls-wider'>{name.toUpperCase()}</h4>
                <span></span>
            </div>
        )
    }


    return (
        <div className='modal-overlay' id={id + "overlay"}>
            <div className="modal" id={id}>
                <div className='flex flex-row justify-between lg:items-start items-center w-100 h-[`9.5%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <h4 className='text-white'>Select a NFT level</h4>
                    <button className='text-white font-semibold text-2xl x-btn' onClick={() => closeEvent()}>X</button>
                </div>
                <div className='flex flex-col justify-start items-start content-center h-[90.5%] w-[100%] lg:px-[50px] px-[25px] lg:pt-[35px] pt-[20px]'>
                    <NFTBlock level={2} name={"Tin"} />
                    <NFTBlock level={3} name={"Bronze"} />
                    <NFTBlock level={4} name={"Silver"} />
                    <NFTBlock level={5} name={"Gold"} />
                    <NFTBlock level={6} name={"Platinum"} />
                    <NFTBlock level={7} name={"Iridium"} />
                    <NFTBlock level={8} name={"Diamond"} />
                   
                </div>
            </div>
        </div>

    );
};

export default SelectConsolidationModal;