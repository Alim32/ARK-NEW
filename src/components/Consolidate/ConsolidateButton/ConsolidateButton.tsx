"use client";
import Image from "next/image";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction, useContractRead } from 'wagmi'
import { ca, abi } from "@/scripts/legacy";
import { OpenModal, CloseModal } from '@/scripts/home';
import { HomeClaimModal } from "@/components/Home/HomeClaimModal";

const ConsolidateButton = ({
    address,
    selection,
    targetLevel,
    disable = true,
    callback,
    usdt = 0,
    price = 0
}: any) => {
    var insufficient = price > usdt;
    const { data: rewardsData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'getClaimableRewards', args: [address], watch: true });
    var rewards = Number(rewardsData) / Math.pow(10, 6);

    if (!disable && insufficient) {
        disable = insufficient;
    }

    const { data, write } = useContractWrite({
        address: ca,
        abi: abi,
        functionName: 'consolidateNFTs',
        args: [selection, targetLevel],
        onMutate() {
            var item = document.getElementById("btn-consolidate") as HTMLButtonElement;
            var item2 = document.getElementById("consolidate-loader") as HTMLElement;
            item.style.display = "none";
            item2.style.display = "block";
        },
        onError() {
            var item = document.getElementById("btn-consolidate") as HTMLButtonElement;
            var item2 = document.getElementById("consolidate-loader") as HTMLElement;
            item.style.display = "block";
            item2.style.display = "none";
        }
    });

    const wait = useWaitForTransaction({
        hash: data?.hash,
        onSuccess() {
            var item = document.getElementById("btn-consolidate") as HTMLButtonElement;
            var item2 = document.getElementById("consolidate-loader") as HTMLElement;
            var item3 = document.getElementById("consolidate-success") as HTMLElement;
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
        <div className='flex flex-col w-[100%] mt-3'>            {
                rewards > 0 ?
                    <button id='btn-openmodal' className='btn-purple-og w-[100%] ls-wide font-bold py-1' onClick={() => OpenModal('modal-claim')}>
                        CLAIM REWARDS
                    </button>            
                :
                    <button id='btn-consolidate' className='btn-purple-og w-[100%] ls-wide font-bold py-1' disabled={disable} onClick={() => write()}>
                        {insufficient ? "INSUFFICIENT USDT" : "CONSOLIDATE"}
                    </button>            
            }

            <div className='flex flex-col items-center w-100% hidden mb-10 mt-4' id='consolidate-loader'>
                <div className="loader">
                    <div className="loaderBar"></div>
                </div>
                <p className='text-sm text-white-60 ls-wide text-center mt-3'>Awaiting Transaction...</p>
            </div>
            <div className='flex flex-col items-center justify-center w-100% hidden mb-10 mt-4' id='consolidate-success'>
                <Image
                    src={"/images/checkmark.png"}
                    width={30}
                    height={30}
                    alt="checkmark"
                    className='mx-auto'
                />
                <p className='text-base text-white ls-wide text-center mt-3'>Transaction Succesful!</p>
            </div>
            <HomeClaimModal id={"modal-claim"} closeEvent={() => CloseModal("modal-claim")} rewards={Number(rewards)} address={address} />
        </div>
    );
};

export default ConsolidateButton;
