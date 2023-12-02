'use client';
import Image from "next/image";
import { formatter, formatterNoDec } from "@/scripts/home";
import { MintButton } from "@/components/Layout/MintButton";
import { ca, abi, GetBoostPercentageByLevelAndTier } from "@/scripts/legacy";
import { useContractRead } from "wagmi";

const Modal = ({
    id,
    title,
    closeEvent,
    video,  
    level,
    usdtBal = 0,
    credit = 0,
    address,
    tier
}: any) => {
    const { data: priceData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'nftPriceOfLevel', args: [level], watch: true });
    const price = Number(priceData) / Math.pow(10, 6);
    var boost = GetBoostPercentageByLevelAndTier(level, tier);
      
    var usedCredit = 0;

    if (price > 0) {
        if (price < credit) {
            usedCredit = price;
        } else {
            usedCredit = credit;
        }
    }

    return (
        <div className='modal-overlay' id={id + "overlay"}>
            <div className="modal-nft" id={id}>
                <div className='flex flex-col lg:h-[100%] h-[88.5%] w-[100%] justify-between'>
                    <div className='flex flex-row justify-between lg:items-start items-center w-100 lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                        <h4 className='text-white'>{title}</h4>
                        <button className='text-white font-semibold text-2xl x-btn' onClick={closeEvent}>X</button>
                    </div>
                    <div className='flex lg:flex-row flex-col lg:justify-between justify-start'>
                        <div className='flex flex-col lg:pl-[50px] lg:pr-3 px-3 lg:order-1 order-2'>
                            <p className="text-white-60 lg:mb-10 sm:mb-5 mt-2 lg:mt-0 lg:text-base sm:text-base text-sm">I am ready to share and educate. I want a piece of the future of Ark Fi</p>
                            <div className='flex flex-row justify-between items-center sm:mt-6 mt-5'>
                                <p className='text-white-30 lg:text-xl sm:text-lg text-base'>Price</p>
                                <p className='text-white flex flex-row items-center lg:text-xl sm:text-lg text-base'>
                                    ${formatterNoDec.format(price)}
                                    {/*<Image*/}
                                    {/*    alt="usdt"*/}
                                    {/*    src="/icons/usdt.png"*/}
                                    {/*    width={28}*/}
                                    {/*    height={28}*/}
                                    {/*    className='ml-3'*/}
                                    {/*/>*/}
                                </p>
                            </div>
                            <div className='flex flex-row justify-between items-center lg:mt-5 sm:mt-4 mt-2'>
                                <p className='text-white-30 lg:text-xl text-base sm:text-lg'>My Balance</p>
                                <p className='text-white flex flex-row items-center sm:text-lg lg:text-xl text-base'>
                                    ${formatter.format(usdtBal)}
                                    {/*<Image*/}
                                    {/*    alt="usdt"*/}
                                    {/*    src="/icons/usdt.png"*/}
                                    {/*    width={28}*/}
                                    {/*    height={28}*/}
                                    {/*    className='ml-3'*/}
                                    {/*/>*/}
                                </p>
                            </div>
                            <div className='flex flex-row justify-between items-center lg:mt-5 sm:mt-4 mt-2'>
                                <p className='text-white-30 lg:text-xl text-base sm:text-lg'>Mint Credit</p>
                                <p className='text-white flex flex-row items-center lg:text-xl text-base sm:text-lg'>
                                    ${formatter.format(credit)}
                                    {/*<Image*/}
                                    {/*    alt="usdt"*/}
                                    {/*    src="/icons/usdt.png"*/}
                                    {/*    width={28}*/}
                                    {/*    height={28}*/}
                                    {/*    className='ml-3'*/}
                                    {/*/>*/}
                                </p>
                            </div>
                            <hr className='lg:my-4 my-2' />
                            <div className='flex flex-row justify-between items-center'>
                                <p className='text-white-30 lg:text-xl text-base sm:text-lg'>Total Cost</p>
                                <p className='text-white flex flex-row items-center lg:text-xl text-base sm:text-lg'>
                                    ${formatterNoDec.format(price - usedCredit)}
                                    {/*<Image*/}
                                    {/*    alt="usdt"*/}
                                    {/*    src="/icons/usdt.png"*/}
                                    {/*    width={28}*/}
                                    {/*    height={28}*/}
                                    {/*    className='ml-3'*/}
                                    {/*/>*/}
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row lg:order-2 order-1 lg:justify-start justify-evenly'>
                            <video autoPlay={true} muted={true} loop={true} playsInline={true} className={"lg:max-h-[475px] max-h-[40vh] max-w-[350px] mbb-l mx-auto lg:mb-0 -mb-[3rem] -mt-[3rem] "}>
                                <source src={video} type="video/mp4" />
                            </video>
                            <div className='flex flex-col rotate-90 h-[0px] mt-[200px] -mx-[50px] lg:flex hidden'>
                                <div className='flex flex-row items-center mb-[8.5px]'>
                                    <progress className='rotate-180 h-[5px] lg:w-[150px] w-[100px]' value={100} max="100"></progress>
                                    <p className='rotate-180 text-white-30 text-sm ml-3'>Boost</p>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <progress className='rotate-180 h-[5px] lg:w-[150px] w-[100px]' value={100} max="100"></progress>
                                    <p className='rotate-180 text-white-30 text-sm ml-3'>Shares</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    { level > 3 ?
                        <div className='flex flex-col mx-[40px]'>
                            <div className='flex flex-row justify-center items-center my-0 lg:mt-0 mt-8'>
                                <Image src='https://bank.arkfi.io/img/fast.png' alt='boost' width={30} height={30} className='contrast-200 mx-2 lg:max-w-[30px] lg:max-w-[25px]  lg:max-h-[30px] lg:max-h-[25px]' />
                                <p className='text-center text-white font-semibold lg:text-lg sm:text-base text-sm'>{boost} % Boost</p>
                                <Image src='https://bank.arkfi.io/img/fast.png' alt='boost' width={30} height={30} className='contrast-200 mx-2 lg:max-w-[30px] lg:max-w-[25px] lg:max-h-[30px] lg:max-h-[25px]' />
                            </div>
                            <p className='text-center text-activated lg:text-lg lg:mt-2 lg:block sm:text-base  text-sm'>${formatterNoDec.format(price * (boost / 100))} Benefit</p>
                        </div>
                        : <></>
                    }
                    <div className='mx-[40px]'>
                        <MintButton address={address} level={level} disabled={(price - usedCredit) > usdtBal} disabletext={"INSUFFICIENT USDT"} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Modal;