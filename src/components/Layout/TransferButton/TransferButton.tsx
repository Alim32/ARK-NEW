"use client";
import Image from "next/image";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import { ca, abi } from "@/scripts/legacy";

const TransferButton = ({
    address,
    target,
    id,
    disabled
}: any) => {
    const { data, write } = useContractWrite({
        address: ca,
        abi: abi,
        functionName: 'transferFrom',
        args: [address, target, id],
        onMutate() {
            var item = document.getElementById("transfer-btn") as HTMLButtonElement;
            var item2 = document.getElementById("transfer-loader") as HTMLElement;
            item.style.display = "none";
            item2.style.display = "block";
        },
        onError() {
            var item = document.getElementById("transfer-btn") as HTMLButtonElement;
            var item2 = document.getElementById("transfer-loader") as HTMLElement;
            item.style.display = "block";
            item2.style.display = "none";
        }
    });

    const wait = useWaitForTransaction({
        hash: data?.hash,
        onSuccess() {
            var item = document.getElementById("transfer-btn") as HTMLButtonElement;
            var item2 = document.getElementById("transfer-loader") as HTMLElement;
            var item3 = document.getElementById("transfer-success") as HTMLElement;
            item.style.display = "none";
            item2.style.display = "none";
            item3.style.display = "block";

            setTimeout(function () {
                item.style.display = "block";
                item2.style.display = "none";
                item3.style.display = "none";
            }, 3000);
        }
    })

    return (
        <div className='flex flex-col w-[100%]'>
            <button id='transfer-btn' className='btn-purple-og px-3 py-1 mb-5 w-[100%] h-fit ls-wide font-semibold lg:text-base text-sm mt-5' disabled={disabled} onClick={() => write()}>TRANSFER</button>
            <div className='flex flex-col items-center w-100% hidden mb-10 mt-4' id='transfer-loader'>
                <div className="loader">
                    <div className="loaderBar"></div>
                </div>
                <p className='text-sm text-white-60 ls-wide text-center mt-3'>Awaiting Transaction...</p>
            </div>
            <div className='flex flex-col items-center justify-center w-100% hidden mb-10 mt-4' id='transfer-success'>
                <Image
                    src={"/images/checkmark.png"}
                    width={30}
                    height={30}
                    alt="checkmark"
                    className='mx-auto'
                />
                <p className='text-base text-white ls-wide text-center mt-3'>Transaction Succesful!</p>
            </div>
        </div>
    );
};

export default TransferButton;
