"use client";
import Image from "next/image";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import { ca, abi } from "@/scripts/legacy";

const MintButton = ({
    address,
    level = 1,
    disabled = false,
    disabletext
}: any) => {
    const { data, write } = useContractWrite({
        address: ca,
        abi: abi,
        functionName: 'mint',
        onMutate() {
            var item = document.getElementById(`mint-btn-${level}`) as HTMLButtonElement;
            var item2 = document.getElementById(`mint-loader-${level}`) as HTMLElement;
            item.style.display = "none";
            item2.style.display = "block";
        },
        onError(error) {
            console.log(error);
            var item = document.getElementById(`mint-btn-${level}`) as HTMLButtonElement;
            var item2 = document.getElementById(`mint-loader-${level}`) as HTMLElement;
            item.style.display = "block";
            item2.style.display = "none";
        },
        args: [level]
    });

    const wait = useWaitForTransaction({
        hash: data?.hash,
        onSuccess() {
            console.log("what");
            var item = document.getElementById(`mint-btn-${level}`) as HTMLButtonElement;
            var item2 = document.getElementById(`mint-loader-${level}`) as HTMLElement;
            var item3 = document.getElementById(`mint-success-${level}`) as HTMLElement;
            var item4 = document.getElementById(`aftermint-${level}`) as HTMLElement;
            item.style.display = "none";
            item2.style.display = "none";
            item3.style.display = "block";

            setTimeout(function () {
                item4.style.display = "flex";
                item3.style.display = "none";
            }, 3000);
        }
    })

    function ShowPurchase() {
        var item = document.getElementById(`mint-btn-${level}`) as HTMLButtonElement;
        var item2 = document.getElementById(`mint-loader-${level}`) as HTMLElement;
        var item3 = document.getElementById(`mint-success-${level}`) as HTMLElement;
        var item4 = document.getElementById(`aftermint-${level}`) as HTMLElement;
        item.style.display = "block";
        item2.style.display = "none";
        item3.style.display = "none";
        item4.style.display = "none";
    }

    return (
        <div className='flex flex-col w-[100%]'>
            <button id={`mint-btn-${level}`} className='btn-purple-og px-3 py-1 mb-5 w-[100%] h-fit ls-wide font-semibold lg:text-base text-sm mt-5' disabled={disabled} onClick={() => write()}>
                {disabled ? disabletext : "PURCHASE"}
            </button>
            <div className='flex flex-col items-center w-[100%] hidden mb-10 mt-4' id={`mint-loader-${level}`}>
                <div className="loader">
                    <div className="loaderBar"></div>
                </div>
                <p className='text-sm text-white-60 ls-wide text-center mt-3'>Awaiting Transaction...</p>
            </div>
            <div className='flex flex-col items-center justify-center w-100% hidden mb-10 mt-4' id={`mint-success-${level}`}>
                <Image
                    src={"/images/checkmark.png"}
                    width={30}
                    height={30}
                    alt="checkmark"
                    className='mx-auto'
                />
                <p className='text-base text-white ls-wide text-center mt-3'>Transaction Succesful!</p>
            </div>
            <div className='flex flex-row items-center w-[100%] hidden' id={`aftermint-${level}`}>
                <button id='' className='btn-purple-og px-3 py-1 mb-5 w-[100%] mr-2 h-fit ls-wide font-semibold lg:text-base text-sm mt-5' onClick={() => ShowPurchase()}>BUY MORE</button>
                <a id='' className='btn-white-2 px-3 py-1 mb-5 w-[100%] ml-2 h-fit ls-wide font-semibold lg:text-base text-sm mt-5 text-center' href="/nfts">MY NFTs</a>
            </div>
        </div>
    );
};

export default MintButton;
