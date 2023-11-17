"use client";
import Image from "next/image";
import { getNFTBalance, getShares, getLifetimeRewards, getClaimableRewards, getMintCredit, ca, abi } from "@/scripts/legacy";
import { readContract } from '@wagmi/core'
import { formatter, formatterNoDec, OpenModal, CloseModal } from '@/scripts/home';
import { ScrollVisibility } from '@/components/ScrollVisibility'
import { HomeStatsModal } from '@/components/Home/HomeStatsModal';
import { MintButton } from "@/components/Layout/MintButton";
import { ClaimButton } from "@/components/Layout/ClaimButton";
import { useEffect, useState } from "react";


const NftBlock = ({
    id,
    value,
    boost,
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
                <p className='text-white mt-4 font-semibold px-5 sm:text-base text-sm'>Legacy #{id}</p>
                <div className='flex flex-row md:px-5 px-4 items-start justify-between mt-4'>
                    <p className='text-white-30 mt-2 sm:text-base text-sm font-semibold mr-3'>Type:</p>
                    <p className='text-white-60 mt-2 sm:text-base text-sm font-semibold ml-3'>{type.substring(0, 1).toUpperCase() + type.substring(1, type.length)}</p>
                </div>
                <div className='flex flex-row md:px-5 px-4 items-start justify-between'>
                    <p className='text-white-30 mt-2 sm:text-base text-sm font-semibold mr-3'>Value:</p>
                    <p className='text-white-60 mt-2 sm:text-base text-sm font-semibold ml-3'>${formatter.format(value)}</p>
                </div>
                <div className='flex flex-row md:px-5 px-4 items-start justify-between'>
                    <p className='text-white-30 mt-2 sm:text-base text-sm font-semibold mr-3'>Boost:</p>
                    <p className='text-white-60 mt-2 sm:text-base text-sm font-semibold ml-3'>Tier {boost}</p>
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
    var shares = getShares(address);
    var balance = getNFTBalance(address);
    var rewards = getClaimableRewards(address);
    var claimedRewards = getLifetimeRewards(address);
    var mintCredit = getMintCredit(address);
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
    }, [balance])

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
                <div className='flex flex-wrap mt-10 sm:justify-start justify-center'>
                    <NftBlock id="1" value={1000} boost={1} type="silver" />
                    <NftBlock id="69" value={10000} boost={1} type="platinum" />
                    <NftBlock id="420" value={250} boost={2} type="tin" />
                    <NftBlock id="1337" value={500} boost={3} type="bronze" />
                    <NftBlock id="2345" value={4000} boost={6} type="gold" />                    
                    <NftBlock id="6969" value={10000} boost={1} type="platinum" />
                    <NftBlock id="4201" value={10000} boost={1} type="platinum" />
                    <NftBlock id="9998" value={10000} boost={1} type="platinum" />
                    <NftBlock id="9999" value={100} boost={6} type="copper" />
                </div>
            </div>
            <HomeStatsModal id={"modal-myacc"} closeEvent={() => CloseModal("modal-myacc")} balance={balance} address={address} claimedRewards={claimedRewards} pendingRewards={rewards} nftsInWallet={nftBalances} credit={mintCredit} />
        </ScrollVisibility>
    );
};

export default Hero;
