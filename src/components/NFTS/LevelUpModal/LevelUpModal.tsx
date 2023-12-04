'use client';
import { ca, abi, GetNFTNameByLevel, GetBoostPercentageByLevelAndTier } from "@/scripts/legacy";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { caUSDT, abiUSDT } from "@/scripts/general";
import { openDropDown, closeDropDown, formatter, formatterNoDec } from "@/scripts/home";
import { LevelupButton } from "@/components/Layout/LevelupButton";
import { ApproveButton } from "@/components/Layout/ApproveButton";
import Image from "next/image";
import rightarrow from "@/images/icons/icon-arrow-right-outline.svg";


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

const LevelUpModal = ({
    id,
    address,
    selectedToken,
    closeEvent,
}: any) => {
    const [isValid, setIsValid] = useState(false);
    const { data: levelData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'levelOfNft', args: [selectedToken], watch: true });
    const level = Number(levelData);
    const defaultTarget = level + 1;
    const [levelTarget, setLevelTarget] = useState(defaultTarget);
    const { data: tierData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'mintTierOfNft', args: [selectedToken], watch: true });
    const { data: priceData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'getPriceForLevelUp', args: [selectedToken, levelTarget], watch: true });
    const { data: creditData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'mintCredit', args: [address], watch: true });
    const { data: usdtData = 0 } = useContractRead({ chainId: 137, address: caUSDT, abi: abiUSDT, functionName: 'balanceOf', args: [address], watch: true });
    const { data: approvalData = 0 } = useContractRead({ chainId: 137, address: caUSDT, abi: abiUSDT, functionName: 'allowance', args: [address, ca], watch: true });
    const tier = Number(tierData);
    const usdtBalance = Number(usdtData) / Math.pow(10, 6);    
    var approvalBalance = Number(approvalData) / Math.pow(10, 6);
    const credit = Number(creditData) / Math.pow(10, 6);
    const price = Number(priceData) / Math.pow(10,6);

    useEffect(() => {
        setLevelTarget(defaultTarget);
    }, [selectedToken, level, defaultTarget]);

    function CloseModal() {
        var input = document.getElementById("transfer-input") as HTMLInputElement;
        input.value = "";
        input.classList.remove("iserror");
        input.classList.remove("isvalid");
        setIsValid(false);
        closeEvent()
    }

    function setNewTarget(id: any) {
        closeDropDown("dropdown-mint");
        setLevelTarget(id);
    }

    if (selectedToken == -1) {
        return (<></>);
    }

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
            <div className="modal" id={id}>
                <div className='flex flex-row justify-between lg:items-start items-center w-100 h-[7.5%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <h4 className='text-white'>Level Up NFT </h4>
                    <button className='text-white font-semibold text-2xl x-btn' onClick={() => CloseModal()}>X</button>
                </div>
                <div className='flex flex-col h-[92.5%] w-[100%] lg:px-[50px] px-[25px] lg:pt-[35px] pt-[20px] overflow-y-auto'>
                    <button className='flex flex-row items-center justify-between dropdown-box md:px-5 px-4 md:py-3 py-1 h-fit cp w-[100%] md:mt-5 mt-4' onClick={() => openDropDown("dropdown-mint")}>
                        <Image src={`/images/${GetNFTNameByLevel(levelTarget).toLowerCase()}.png`} width={30} height={50} alt="nft logo" className='md:mr-5 mr-4 md:max-h-[50px] md:max-w-[30px] max-h-[35px] max-w-[20px]' id="mint-selection" />
                        <h4 className="text-white text-center mx-5 ls-wider  md:text-2xl text-base" id='mint-text'>{GetNFTNameByLevel(levelTarget).toUpperCase()}</h4>
                    </button>
                    <div id='dropdown-mint' className='dropdown w-[100%] dropdown-bg'>
                        {level <= 1 ? <DropItem clickEvent={() => setNewTarget(2)} text={"TIN"} image={"/images/tin.png"} /> : <></>}
                        {level <= 2 ? <DropItem clickEvent={() => setNewTarget(3)} text={"BRONZE"} image={"/images/bronze.png"} /> : <></>}
                        {level <= 3 ? <DropItem clickEvent={() => setNewTarget(4)} text={"SILVER"} image={"/images/silver.png"} /> : <></>}
                        {level <= 4 ? <DropItem clickEvent={() => setNewTarget(5)} text={"GOLD"} image={"/images/gold.png"} /> : <></>}
                        {level <= 5 ? <DropItem clickEvent={() => setNewTarget(6)} text={"PLATINUM"} image={"/images/platinum.png"} /> : <></>}
                        {level <= 6 ? <DropItem clickEvent={() => setNewTarget(7)} text={"IRIDIUM"} image={"/images/iridium.png"} /> : <></>}
                        {level <= 7 ? <DropItem clickEvent={() => setNewTarget(8)} text={"DIAMOND"} image={"/images/diamond.png"} /> : <></>}
                    </div>
                    <hr className='mt-5' />
                    <div className='flex flex-row justify-between mt-5'>
                        <p className='text-white-60 sm:text-lg text-base'>Selected NFT</p>
                        <p className='text-white sm:text-lg text-base'>{GetNFTNameByLevel(level)} #{selectedToken}</p>
                    </div>
                    <div className='flex flex-row justify-between mt-5'>
                        <p className='text-white-60 sm:text-lg text-base'>Tier of NFT</p>
                        <p className='text-white sm:text-lg text-base'>Tier {tier}</p>
                    </div>
                    <div className='flex flex-row justify-between mt-5'>
                        <p className='text-white-60 sm:text-lg text-base'>Target</p>
                        <p className='text-white sm:text-lg text-base flex flex-row items-center'>
                            {GetNFTNameByLevel(level)}
                            <Image src={rightarrow} width={25} height={25} className='invert-50' alt="arrow" />
                            {GetNFTNameByLevel(levelTarget)}</p>
                    </div>
                    <div className='flex flex-row justify-between mt-5'>
                        <p className='text-white-60 sm:text-lg text-base'>Target Boost</p>
                        <p className='text-white sm:text-lg text-base flex flex-row items-center'>
                            <span>{GetBoostPercentageByLevelAndTier(level, tier) + "%"}</span>
                            <Image src={rightarrow} width={25} height={25} className='invert-50' alt="arrow" />
                            <span>{GetBoostPercentageByLevelAndTier(levelTarget, tier) + "%"}</span>
                        </p>
                    </div>
                    <div className='flex flex-row justify-between mt-5'>
                        <p className='text-white-60 sm:text-lg text-base'>Approved USDT</p>
                        <p className='text-white sm:text-lg text-base'>${formatter.format(approvalBalance)}</p>
                    </div>
                    <hr className='mt-5' />
                    <div className='flex flex-row justify-between mt-5'>
                        <p className='text-white-60 sm:text-lg text-base'>Price</p>
                        <p className='text-white sm:text-lg text-base flex flex-row items-center'>
                            ${formatterNoDec.format(price)}
                        </p>
                    </div>
                    <div className='flex flex-row justify-between mt-5'>
                        <p className='text-white-60 sm:text-lg text-base'>Used Credit</p>
                        <p className='text-danger sm:text-lg text-base flex flex-row items-center'>
                            -${formatter.format(usedCredit)}
                        </p>
                    </div>
                    <div className='flex flex-row justify-between mt-5'>
                        <p className='text-white-60 sm:text-lg text-base'>Total to Pay</p>
                        <p className='text-white sm:text-lg text-base flex flex-row items-center'>
                            ${formatter.format(price - usedCredit)}
                        </p>
                    </div>
                    <div className='flex flex-row h-[100%] md:justify-end md:items-end md:mt-0 mt-5'>
                        {
                            (price - usedCredit) <= approvalBalance ?
                                <LevelupButton level={levelTarget} address={address} disabled={price - usedCredit > usdtBalance} uid={selectedToken} disabletext="INSUFFICIENT USDT" />
                                :
                                <ApproveButton address={address} amount={price - usedCredit} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );

};

export default LevelUpModal;