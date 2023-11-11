'use client';

import Image from "next/image";
import { getNFTData, getNFTBalance, getShares, GetNFTNameByLevel } from "@/scripts/legacy";
import { formatter, formatterNoDec } from "../../../scripts/test";

const HomeStatsModal = ({
    id,
    closeEvent,
    address,
    balance
}: any) => {
    var data = getNFTData(address, balance);
    var totalWorth = 0;
    var pendingRewards = 0
    var claimedRewards = 0;

    for (let i in data) {
        totalWorth += data[i].value;
    }

    const listNFTs = data.map((nfts) =>
        <div>
            <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4' key={nfts.id}>
                <div className='flex flex-row items-center'>
                    <Image
                        src={"/icons/nft.png"}
                        width={30}
                        height={50}
                        alt="nft logo"
                        className='mr-5 lg:block hidden'
                    />
                    <p className='md:text-lg text-base text-white ls-wide lg:ml-10'>5 {GetNFTNameByLevel(nfts.level).toUpperCase()}{nfts.amount > 1 ? "S" : ""}</p>
                </div>
                <p className='md:text-lg text-base text-white-60'>${formatterNoDec.format(nfts.value)}</p>
            </div>
            <hr />
        </div>
    );

    return (
        <div className='modal-overlay' id={id + "overlay"}>
            <div className="modal" id={id}>
                <div className='flex flex-row justify-between lg:items-start items-center w-100 lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <h4 className='text-white'>My Account</h4>
                    <button className='text-white font-semibold text-2xl x-btn' onClick={closeEvent}>X</button>
                </div>
                <div className='flex flex-col h-[100%] w-[100%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <hr />
                    {listNFTs}
                    <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-row items-center'>
                            <Image
                                src={"/icons/spark_lottery.png"}
                                width={30}
                                height={50}
                                alt="nft logo"
                                className='mr-5 lg:block hidden'
                            />
                            <p className='md:text-lg text-base text-white lg:ls-widest ls-wide lg:ml-10'>PENDING REWARDS</p>
                        </div>
                        <p className='md:text-lg text-base text-white-60'>${formatterNoDec.format(pendingRewards)}</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-row items-center'>
                            <Image
                                src={"/icons/tab_vault.png"}
                                width={30}
                                height={50}
                                alt="nft logo"
                                className='mr-5 lg:block hidden'
                            />
                            <p className='md:text-lg text-base text-white lg:ls-widest ls-wide lg:ml-10'>CLAIMED REWARDS</p>
                        </div>
                        <p className='md:text-lg text-base text-white-60'>${formatterNoDec.format(claimedRewards)}</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-row items-center'>
                            <Image
                                src={"/icons/ark_a.svg"}
                                width={30}
                                height={50}
                                alt="nft logo"
                                className='mr-5 lg:block hidden'
                            />
                            <p className='md:text-lg text-base text-white lg:ls-widest ls-wide lg:ml-10'>TOTAL WORTH</p>
                        </div>
                        <p className='md:text-lg text-base text-white-60'>${formatterNoDec.format(totalWorth)}</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default HomeStatsModal;