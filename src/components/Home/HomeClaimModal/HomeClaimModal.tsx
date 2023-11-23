'use client';
import Image from "next/image";
import { formatter} from "@/scripts/home";
import { ClaimButton } from "@/components/Layout/ClaimButton";

const HomeClaimModal = ({
    id,
    closeEvent,
    rewards = 0,
    address
}: any) => {


    return (
        <div className='modal-overlay' id={id + "overlay"}>
            <div className="modal" id={id}>
                <div className='flex flex-row justify-between lg:items-start items-center w-100 h-[7.5%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <h4 className='text-white'>Claim Rewards</h4>
                    <button className='text-white font-semibold text-2xl x-btn' onClick={closeEvent}>X</button>
                </div>
                <div className='flex flex-col h-[92.5%] w-[100%] lg:px-[50px] px-[25px] lg:pt-[35px] pt-[20px] overflow-y-auto'>
                    <div className='flex flex-col h-[100%]'>
                        <div className='flex flex-col items-center justify-between h-[100%]'>
                            <span></span>
                            <div className='flex flex-row items-end justify-center mb-10'>
                                <Image
                                    src="/icons/usdt.png"
                                    alt="USDT"
                                    width={50}
                                    height={50}
                                    className='mr-5 mb-3'
                                />
                                <div className='flex flex-col items-center justify-start mx-5'>
                                    <h5 className='text-white-30'>Available Rewards</h5>
                                    <h1 className='text-white'>${formatter.format(rewards)}</h1>                                    
                                </div>
                                <Image
                                    src="/icons/usdt.png"
                                    alt="USDT"
                                    width={50}
                                    height={50}
                                    className='ml-5 mb-3'
                                />
                            </div>
                            <div className='flex flex-row md:justify-end md:items-end md:mt-0 mt-5 w-[100%]'>
                                <ClaimButton address={address} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeClaimModal;