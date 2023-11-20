'use client';
import Image from "next/image";
import { formatterNoDec, openDropDown } from "@/scripts/home";
import { getUSDTBalance } from "@/scripts/general";
import { setMintNFT } from "@/scripts/home";

const DropItem = ({
    image,
    text,
    clickEvent
}: any) => {
    return (
        <button className='dropdown-item' onClick={clickEvent}>
            <Image
                src={image}
                width={30}
                height={50}
                alt="nft logo"
                className='mr-5'
            />
            <h4 className="text-white text-center mx-5 ls-wider">{text}</h4>
            <span></span>
        </button>
    )
}

const HomeMintModal = ({
    id,
    closeEvent,
    credit = 0,
    address
}: any) => {
    var usdtBalance = getUSDTBalance(address);

    return (
        <div className='modal-overlay' id={id + "overlay"}>
            <div className="modal" id={id}>
                <div className='flex flex-row justify-between lg:items-start items-center w-100 h-[7.5%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <h4 className='text-white'>Mint NFT</h4>
                    <button className='text-white font-semibold text-2xl x-btn' onClick={closeEvent}>X</button>
                </div>
                <div className='flex flex-col h-[92.5%] w-[100%] lg:px-[50px] px-[25px] lg:pt-[35px] pt-[20px] overflow-y-auto'>
                    <button className='flex flex-row items-center justify-between dropdown-box md:px-5 px-4 md:py-3 py-1 cp w-[100%] md:mt-5 mt-4' onClick={() => openDropDown("dropdown-mint")}>
                        <Image
                            src={"/images/platinum.png"}
                            width={30}
                            height={50}
                            alt="nft logo"
                            className='md:mr-5 mr-4 md:max-h-[50px] md:max-w-[30px] max-h-[35px] max-w-[20px]'
                            id="mint-selection"
                        />
                        <h4 className="text-white text-center mx-5 ls-wider  md:text-lg text-base" id='mint-text'>PLATINUM</h4>
                    </button>
                    <div id='dropdown-mint' className='dropdown w-[100%]'>
                        <DropItem clickEvent={() => setMintNFT(1)} text={"COPPER"} image={"/images/copper.png"} />
                        <DropItem clickEvent={() => setMintNFT(2)} text={"TIN"} image={"/images/tin.png"} />
                        <DropItem clickEvent={() => setMintNFT(3)} text={"BRONZE"} image={"/images/bronze.png"} />
                        <DropItem clickEvent={() => setMintNFT(4)} text={"SILVER"} image={"/images/silver.png"} />
                        <DropItem clickEvent={() => setMintNFT(5)} text={"GOLD"} image={"/images/gold.png"} />
                        <DropItem clickEvent={() => setMintNFT(6)} text={"PLATINUM"} image={"/images/platinum.png"} />
                        <DropItem clickEvent={() => setMintNFT(7)} text={"DIAMOND"} image={"/images/platinum.png"} />
                    </div>
                    <div className='flex flex-row justify-between items-center mt-10'>
                        <h4 className='text-white-30'>My Balance</h4>
                        <h4 className='text-white flex flex-row items-center'>
                            $12,345
                            <Image
                                alt="usdt"
                                src="/icons/usdt.png"
                                width={28}
                                height={28}
                                className='ml-3'
                            />
                        </h4>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-5'>
                        <h4 className='text-white-30'>Mint Credit</h4>
                        <h4 className='text-white flex flex-row items-center'>
                            $67.28
                            <Image
                                alt="usdt"
                                src="/icons/usdt.png"
                                width={28}
                                height={28}
                                className='ml-3'
                            />
                        </h4>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-5'>
                        <h4 className='text-white-30'>Boost</h4>
                        <h4 className='text-white flex flex-row items-center'>
                            0%
                            <Image
                                alt="usdt"
                                src="/icons/fast.png"
                                width={30}
                                height={30}
                                className='ml-3 contrast-200'
                            />
                        </h4>
                    </div>
                    <hr className='mt-5' />
                    <div className='flex flex-row justify-between items-center mt-5'>
                        <h4 className='text-white-30'>Price</h4>
                        <h4 className='text-white flex flex-row items-center'>
                            $100
                            <Image
                                alt="usdt"
                                src="/icons/usdt.png"
                                width={28}
                                height={28}
                                className='ml-3'
                            />
                        </h4>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-5'>
                        <h4 className='text-white-30'>Credit</h4>
                        <h4 className='text-white flex flex-row items-center'>
                            -$67.28
                            <Image
                                alt="usdt"
                                src="/icons/usdt.png"
                                width={28}
                                height={28}
                                className='ml-3'
                            />
                        </h4>
                    </div>
                    <hr className='mt-5' />
                    <div className='flex flex-row justify-between items-center mt-5'>
                        <h4 className='text-white-30'>Total</h4>
                        <h4 className='text-white flex flex-row items-center'>
                            $37.72
                            <Image
                                alt="usdt"
                                src="/icons/usdt.png"
                                width={28}
                                height={28}
                                className='ml-3'
                            />
                        </h4>
                    </div>
                    <div className='flex flex-row h-[100%] md:justify-end md:items-end md:mt-0 mt-10'>
                        <button className='btn-purple-og px-3 py-1 mb-5 w-[100%] h-fit ls-wide font-semibold lg:text-lg text-base'>PURCHASE</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeMintModal;