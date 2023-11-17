"use client";
import Image from "next/image";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import { ca, abi } from "@/scripts/legacy";

const ClaimButton = ({
    address
}: any) => {
    const { config } = usePrepareContractWrite({
        address: ca,
        abi: abi,
        functionName: 'claimRewards'
    });

    const contractWrite = useContractWrite(config);

    const wait = useWaitForTransaction({
        hash: contractWrite.data?.hash
    })

    return (
        <div className='flex flex-row justify-evenly items-center xl:-mt-[5rem] lg:-mt-[3rem] -mt-[0rem]'>
            <button className='xl:text-base text-sm btn-white mx-2 xl:px-4 sm:px-3 px-2 sm:py-2 py-1  flex flex-row items-center sm:mt-0 mt-[50px]' onClick={contractWrite.write}>
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
    );
};

export default ClaimButton;
