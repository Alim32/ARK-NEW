"use client";
import Image from "next/image";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import { ca, abi } from "@/scripts/legacy";

const MintButton = ({
    address,
    level = 1
}: any) => {
    const { data, write } = useContractWrite({
        address: ca,
        abi: abi,
        functionName: 'mintToWallet',
        onMutate() {
            var item = document.getElementById("mint-btn") as HTMLButtonElement;
            var item2 = document.getElementById("mint-loader") as HTMLElement;            
            item.style.display = "none";
            item2.style.display = "block";
        },
        onError() {
            var item = document.getElementById("mint-btn") as HTMLButtonElement;
            var item2 = document.getElementById("mint-loader") as HTMLElement;
            item.style.display = "block";
            item2.style.display = "none";
        },
        args: [address, level]
    });

    const wait = useWaitForTransaction({
        hash: data?.hash
    })

    return (
        <div className='flex flex-col w-[100%]'>
            <button id='mint-btn' className='btn-purple-og px-3 py-1 mb-5 w-[100%] h-fit ls-wide font-semibold lg:text-base text-sm mt-5' onClick={() => write()}>PURCHASE</button>
            <div className='flex flex-col items-center w-100% hidden mb-10 mt-4' id='mint-loader'>
                <div className="loader">
                    <div className="loaderBar"></div>                    
                </div>
                <p className='text-sm text-white-60 ls-wide text-center mt-3'>Awaiting Transaction...</p>
            </div>
            
        </div>
    );
};

export default MintButton;
