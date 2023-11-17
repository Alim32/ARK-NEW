'use client';

import Image from "next/image";
import { abi, ca } from "@/scripts/legacy";
import { formatterNoDec } from "../../../scripts/home";
import { GetNFTNameByLevel } from "../../../scripts/legacy";
import { useEffect, useState } from "react";
import { readContracts } from '@wagmi/core'

const HomeStatsModal = ({
    id,
    closeEvent,
    pendingRewards = 0,
    claimedRewards = 0,
    credit = 0,
    nftsInWallet
}: any) => {
    const [nftData, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);
    var totalWorth = 0;

    useEffect(() => {
        var _data: any = {};

        async function getNFTInfos(id: number) {
            var returnVal = {
                shares: 0,
                level: 0
            }

            const multiData: any = await readContracts({
                contracts: [
                    {
                        address: ca,
                        abi: abi,
                        functionName: 'shares',
                        args: [id],
                        chainId: 137,                        
                    },
                    {
                        address: ca,
                        abi: abi,
                        functionName: 'levelOfNft',
                        args: [id],
                        chainId: 137,
                    }
                ]
            }).then((data: any) => {
                returnVal.shares = Number(data[0].result) / Math.pow(10, 2);
                returnVal.level = Number(data[1].result);
            });

            return returnVal;
        }

        async function fetchData() {
            var _data: any = {};
            for (let i in nftsInWallet) {
                var nftId = Number(nftsInWallet[i]);
                var nftInfo = await getNFTInfos(nftId);

                var nft = {
                    id: nftId,
                    level: nftInfo.level,
                    value: nftInfo.shares,
                    amount: 1
                };


                if (_data[nftInfo.level] === undefined) {
                    _data[nftInfo.level] = nft;
                } else {
                    _data![nftInfo.level].value += nft.value
                    _data![nftInfo.level].amount++;
                }

            }
            var dataArray: any = [];

            for (let i in _data) {
                dataArray.push(_data[i]);
            }

            setDataLength(nftsInWallet.length);
            setData(dataArray);
        }
        if (nftsInWallet.length > dataLength) {
            fetchData();
        }
    }, [nftsInWallet])

    totalWorth += claimedRewards;

    var listNFTs = null;

    if (nftData.length > 0) {
        listNFTs = nftData.map((nfts) =>
            <div key={nfts!["id"]}>
                <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4'>
                    <div className='flex flex-row items-center'>
                        <Image
                            src={"/icons/nft.png"}
                            width={30}
                            height={50}
                            alt="nft logo"
                            className='mr-5 lg:block hidden'
                        />
                        <p className='md:text-lg text-base text-white ls-wide lg:ml-10'>{nfts!["amount"]} {GetNFTNameByLevel(nfts!["level"]).toUpperCase()}{nfts!["amount"] > 1 ? "S" : ""}</p>
                    </div>
                    <p className='md:text-lg text-base text-white-60'>${formatterNoDec.format(nfts!["value"])}</p>
                </div>
                <hr />
            </div>
        );
    } else {
        if (nftsInWallet.length <= 0) {
            listNFTs =
                <div>
                    <div className='flex flex-row justify-center items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-row items-center'>
                            <p className='md:text-lg text-base text-white ls-wide lg:ml-10'>NO NFTs FOUND.</p>
                        </div>
                        <p className='md:text-lg text-base text-white-60'></p>
                    </div>
                    <hr />
                </div>
        } else {
            listNFTs =
                <div>
                    <div className='flex flex-row justify-center items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-row items-center'>
                            <p className='md:text-lg text-base text-white ls-wide lg:ml-10'>LOADING...</p>
                        </div>
                        <p className='md:text-lg text-base text-white-60'></p>
                    </div>
                    <hr />
                </div>
        }
    }

    return (
        <div className='modal-overlay' id={id + "overlay"}>
            <div className="modal" id={id}>
                <div className='flex flex-row justify-between lg:items-start items-center w-100 h-[7.5%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <h4 className='text-white'>My Account</h4>
                    <button className='text-white font-semibold text-2xl x-btn' onClick={closeEvent}>X</button>
                </div>
                <div className='flex flex-col h-[92.5%] w-[100%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
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
                            <p className='md:text-lg text-base text-white lg:ls-widest ls-wide lg:ml-10'>MINT CREDIT</p>
                        </div>
                        <p className='md:text-lg text-base text-white-60'>${formatterNoDec.format(credit)}</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-row items-center'>
                            <Image
                                src={"/icons/tab_foundation.png"}
                                width={30}
                                height={50}
                                alt="nft logo"
                                className='mr-5 lg:block hidden contract-200'
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
                        <p className='md:text-lg text-base text-white-60'>${formatterNoDec.format(claimedRewards - pendingRewards)}</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4 pb-5'>
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