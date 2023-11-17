"use client";
import Image from "next/image";
import { ca, abi, getNFTBalance, GetNFTNameByLevel, GetBoostPercentageByLevelAndTier } from "@/scripts/legacy";
import { readContract } from '@wagmi/core'
import { formatter, formatterNoDec, OpenModal, CloseModal } from '@/scripts/home';
import { ScrollVisibility } from '@/components/ScrollVisibility'
import { HomeStatsModal } from '@/components/Home/HomeStatsModal';
import { useEffect, useState } from "react";
import { readContracts } from "wagmi";


const NftBlock = ({    
    id,
    value,
    boost,
    boostperc,
    type,
}: any) => {
    return (
        <div className='nft-box flex flex-col items-center justify-center mx-[0.625rem] mt-5'>
            <Image
                src={`images/${type}.png`}
                alt=""
                width={190}
                height={190}
                className="mt-4 mb-2"
            />
            <div className="nft-body w-[100%] pb-3 flex item-center flex-col">
                <p className='text-white mt-4 font-semibold px-5 sm:text-base text-sm'>{type.substring(0, 1).toUpperCase() + type.substring(1, type.length)} #{id}</p>
                <div className='flex flex-row md:px-5 px-4 items-start justify-between mt-4'>
                    <p className='text-white-30 mt-2 sm:text-base text-sm font-semibold mr-3'>Value:</p>
                    <p className='text-white-60 mt-2 sm:text-base text-sm font-semibold ml-3'>${formatter.format(value)}</p>
                </div>
                <div className='flex flex-row md:px-5 px-4 items-start justify-between'>
                    <p className='text-white-30 mt-2 sm:text-base text-sm font-semibold mr-3'>Tier:</p>
                    <p className='text-white-60 mt-2 sm:text-base text-sm font-semibold ml-3'>Tier {boost}</p>
                </div>
                <div className='flex flex-row md:px-5 px-4 items-start justify-between'>
                    <p className='text-white-30 mt-2 sm:text-base text-sm font-semibold mr-3'>Boost:</p>
                    <p className='text-white-60 mt-2 sm:text-base text-sm font-semibold ml-3'>{boostperc}%</p>
                </div>
                <button className='btn-purple-og py-1 sm:text-base text-sm font-semibold mt-5 w-[90%] mx-auto'>Options</button>

            </div>

        </div>
    )
}

const Hero = ({
    address
}: any) => {
    const [nftBalances, setNftBalances] = useState([]);
    const [nftData, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);
    var balance = getNFTBalance(address);
    var totalWorth = 0;

    useEffect(() => {
        async function tokenOfOwnerByIndex(id: number) {
            var returnVal = 0;

            const data: any = await readContract({
                chainId: 137,
                address: ca,
                abi: abi,
                functionName: 'tokenOfOwnerByIndex',
                args: [address, id]
            }).then((data: any) => {
                returnVal = Number(data);
            });

            return returnVal;
        }

        async function fetchData() {
            var nftData: any = [];
            for (let i = 0; i < balance; i++) {
                var tokenId = Number(await tokenOfOwnerByIndex(i));
                nftData.push(Number(tokenId));
            }

            setNftBalances(nftData);
        }

        if (nftBalances.length < balance) {
            fetchData();
        }
    }, [balance]);

    useEffect(() => {
        var _data: any = {};

        async function getNFTInfos(id: number) {
            var returnVal = {
                shares: 0,
                level: 0,
                tier: 0,
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
                    },
                    {
                        address: ca,
                        abi: abi,
                        functionName: 'mintTierOfNft',
                        args: [id],
                        chainId: 137,
                    },
                ]
            }).then((data: any) => {
                returnVal.shares = Number(data[0].result) / Math.pow(10, 2);
                returnVal.level = Number(data[1].result);
                returnVal.tier = Number(data[2].result);
            });

            return returnVal;
        }

        async function fetchData() {
            var _data: any = [];
            for (let i in nftBalances) {
                var nftId = Number(nftBalances[i]);
                var nftInfo = await getNFTInfos(nftId);

                var nft = {
                    id: nftId,
                    level: nftInfo.level,
                    value: nftInfo.shares,
                    tier: nftInfo.tier,
                    amount: 1
                };


                _data.push(nft);
            }

            console.log(_data);
            setDataLength(nftBalances.length);
            setData(_data);
        }
        if (nftBalances.length > dataLength) {
            fetchData();
        }
    }, [nftBalances]);
    
    var listNFTs;

    if (nftData.length > 0) {
        listNFTs = nftData.map((nfts) =>
            <NftBlock key={nfts!["id"]} id={nfts!["id"]} value={nfts!["value"]} boost={nfts!["tier"]} boostperc={GetBoostPercentageByLevelAndTier(nfts!["level"], nfts!["tier"])} type={GetNFTNameByLevel(nfts!["level"])} />
        );
    } else {
        if (nftBalances.length <= 0) {
            listNFTs =
                <div className='mx-auto'>
                    <div className='flex flex-row justify-center items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-row items-center'>
                            <p className='md:text-xl text-lg text-white ls-wide lg:ml-10'>NO NFTs FOUND.</p>
                        </div>
                        <p className='md:text-lg text-base text-white-60'></p>
                    </div>
                </div>
        } else {
            listNFTs =
                <div className='mx-auto'>
                    <div className='flex flex-row justify-center items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-row items-center'>
                            <p className='md:text-xl text-lg text-white ls-wide lg:ml-10'>LOADING...</p>
                        </div>
                        <p className='md:text-lg text-base text-white-60'></p>
                    </div>
                </div>
        }
    }

    return (
        <ScrollVisibility>
            <div className='flex flex-col w-100 justify-start items-start 2xl:pb-[20vh] lg:pb-[5vh]'>
                <h2 className="text-white text-center md:tracking-[0.1em] my-5 mt-0 md:mx-0 mx-3">
                    My NFTs
                </h2>
                <hr className='h-[2px] bg-white-25 w-[100%]' />
                <div className='flex flex-wrap my-4 mt-0 sm:justify-between justify-center w-[100%]'>
                    <div className='flex flex-row mt-3'>
                        <button className='flex flex-row items-center justify-between dropdown-box-2 px-4 py-2 cp'>
                            <p className="text-white text-center" id='nft-text'>Recently Added</p>
                        </button>
                        <button className='flex flex-row items-center justify-between dropdown-box-2 px-4 py-2 cp ml-4'>
                            <p className="text-white text-center" id='nft-text'>Type</p>
                        </button>
                    </div>

                    <div className='flex flex-row justify-end min-w-[50%] mt-3'>
                        <input className='form-control fc-2 w-[100%]' placeholder='Search by name' />
                        <button className='btn-white-2 px-3 ml-2 rounded-[15px] my-[2px]'>Search</button>
                    </div>

                </div>
                <div className='flex flex-wrap mt-10 sm:justify-start justify-center w-[100%]'>
                    {listNFTs}
                </div>
            </div>            
        </ScrollVisibility>
    );
};

export default Hero;
