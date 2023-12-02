"use client";
import Image from "next/image";
import { ca, abi, caBsc, abiBsc } from "@/scripts/legacy"; //getNFTBalance, getShares, getLifetimeRewards, getClaimableRewards, getMintCredit,
import { readContract } from '@wagmi/core'
import { formatter, formatterNoDec, OpenModal, CloseModal } from '@/scripts/home';
import { ScrollVisibility } from '@/components/ScrollVisibility'
import { HomeStatsModal } from '@/components/Home/HomeStatsModal';
import { HomeMintModal } from '@/components/Home/HomeMintModal';
import { HomeClaimModal } from '@/components/Home/HomeClaimModal';
import { useContractRead, readContracts, useContractReads } from 'wagmi'
import { useEffect, useState } from "react";

const Hero = ({
    address
}: any) => {
    const [nftBalances, setNftBalances] = useState([]);
    const { data: balanceData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'balanceOf', args: [address], watch: true });
    const { data: shareData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'getShares', args: [address], watch: true });    
    const { data: rewardsData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'getClaimableRewards', args: [address], watch: true });
    const { data: lifetimeData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'getLifetimeRewards', args: [address], watch: true });    
    const { data: lifetimeBscData = 0 } = useContractRead({ chainId: 56, address: caBsc, abi: abiBsc, functionName: 'getLifetimeRewards', args: [address], watch: true });    
    const { data: creditData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'mintCredit', args: [address], watch: true });    
    const shares = Number(shareData) / Math.pow(10, 2);
    const balance = Number(balanceData);
    const rewards = Number(rewardsData) / Math.pow(10, 6);
    const claimedRewards = (Number(lifetimeData) / Math.pow(10, 6)) + (Number(lifetimeBscData) / Math.pow(10, 18));    
    const mintCredit = Number(creditData) / Math.pow(10, 6);

    var width = window.innerWidth;
    var filename = "/images/arc_main.png";
    if (width < 1300) {
        filename = "/images/arc_mob.png";
    }

    useEffect(() => {
        async function tokenOfOwnerByIndex(id: number) {
            try {
                var returnVal = 0;

                const data: any = await readContract({ chainId: 137, address: ca, abi: abi, functionName: 'tokenOfOwnerByIndex', args: [address, id] })
                    .then((data: any) => {
                        returnVal = Number(data);
                    });

                return returnVal;
            }
            catch {
                return -1;
            }
        }

        async function fetchData() {
            var nftData: any = [];
            for (let i = 0; i < balance; i++) {
                var tokenId = Number(await tokenOfOwnerByIndex(i));
                if (tokenId == -1) { continue; }
                nftData.push(Number(tokenId));
            }

            console.log(nftData);
            setNftBalances(nftData);
        }

        
        if (nftBalances.length !== balance) {
            console.log("test");
            fetchData();
        }
    }, [balance, nftBalances.length, address])

    return (
        <div>
            <ScrollVisibility>
                <div className='flex flex-col w-100 justify-center items-center lg:pt-[2.5vh] 2xl:pb-[20vh] lg:pb-[5vh]'>
                    <h1 className="text-white text-center md:tracking-[0.1em] my-5 mt-4 cp" onClick={() => OpenModal("modal-myacc")}>
                        <span className='text-white-30 mr-[1rem]'>$</span>
                        <span className='text-white'>{formatterNoDec.format(Number(shares) + claimedRewards + mintCredit)}</span>
                        <span className='text-white-30 sm:inline hidden'>{formatter.format(Number(shares)).substring(formatter.format(Number(shares)).indexOf("."), formatter.format(Number(shares)).length)}</span>
                    </h1>
                    <h3 className='text-white ls-wide cp' onClick={() => OpenModal("modal-myacc")}>{balance} <span className='ml-[11px] text-white-30'>NFT(s)</span></h3>
                    <Image
                        className="w-100 h-100 object-fit-contain mt-10 pt-5 bright-animation"
                        src={filename}
                        width={1600}
                        height={1000}
                        alt="ARC ARK"
                    />
                    <div className='flex flex-row justify-evenly items-center 2xl:-mt-[5rem] xl:-mt-[3rem] sm:pt-5 pt-0 z-10'>
                        <div className='flex flex-row justify-evenly items-center xl:-mt-[5rem] lg:-mt-[3rem] -mt-[0rem]'>
                            <button className='xl:text-base text-sm btn-white mx-2 xl:px-4 sm:px-3 px-2 sm:py-2 py-1  flex flex-row items-center sm:mt-0 mt-[50px]' onClick={() => OpenModal("modal-claim")}>
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
                        <div className='flex flex-row justify-evenly items-center xl:-mt-[5rem] lg:-mt-[3rem] -mt-[0rem]'>
                            <button className='xl:text-base text-sm btn-white mx-2 xl:px-4 sm:px-3 px-2 sm:py-2 py-1  flex flex-row items-center sm:mt-0 mt-[50px]' onClick={() => OpenModal("modal-mint")}>
                                <span className='2xl:mt-1'>Mint NFT</span>
                                <Image
                                    className="w-100 h-100 object-fit-contain ml-2"
                                    src={"/images/mint.png"}
                                    width={25}
                                    height={25}
                                    alt="Mint NFT"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <HomeStatsModal id={"modal-myacc"} closeEvent={() => CloseModal("modal-myacc")} balance={balance} shares={shares} address={address} claimedRewards={claimedRewards} pendingRewards={Number(rewards)} nftsInWallet={nftBalances} credit={mintCredit} />
                <HomeMintModal id={"modal-mint"} closeEvent={() => CloseModal("modal-mint")} credit={mintCredit} address={address} />
                <HomeClaimModal id={"modal-claim"} closeEvent={() => CloseModal("modal-claim")} rewards={Number(rewards)} address={address} />
            </ScrollVisibility>
            <div className='rewards-box cp' onClick={() => OpenModal("modal-claim")}>
                <p className='text-black font-bold'>${formatter.format(Number(rewards))}</p>
            </div>
        </div>
    );
};

export default Hero;
