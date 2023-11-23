'use client';
import Image from "next/image";
import { formatterNoDec, formatter, openDropDown } from "@/scripts/home";
import { getUSDTBalance } from "@/scripts/general";
import { GetNFTNameByLevel, getPriceOfLevel } from "../../../scripts/legacy";
import { useState } from "react";


const ConsolidateModal = ({
    id,
    address,
    closeEvent,
    credit = 0,
    data,
    level
}: any) => {
    const initialValue:any = [];
    const [nftValue, setNftValue] = useState(0);
    //const [price, setPrice] = useState(0);
    const [selectedNFTs, setSelectedNfts] = useState(initialValue);    
    var expectedTier = "";
    var highestSelectedLevel = -1;
    var highestSelectedId = -1;
    var price = getPriceOfLevel(level);
    var usdtBalance = getUSDTBalance(address);

    function selectBlock(id: any, value = 0, tier = 0, level = 0) {
        var item = document.getElementById(`block-${id}`);
        var currentArray = selectedNFTs;
        var total = price - nftValue;

        if (item?.classList.contains("active")) {
            item?.classList.remove("active");
            currentArray.splice(currentArray.indexOf(id), 1);
            setNftValue(nftValue - value);
            total += value;
        } else {
            item?.classList.add("active");
            console.log(item?.classList);
            if (!currentArray.includes(id)) {
                currentArray.push(id);
                setNftValue(nftValue + value);
                total -= value;
            }
        }

        highestSelectedLevel = level;
        highestSelectedId = id;

        var consoleBtn = document.getElementById("btn-consolidate") as HTMLButtonElement;
                        
        if (currentArray.length >= 2 && total >= 0) {
            consoleBtn.disabled = false;
        } else {
            consoleBtn.disabled = true;
        }        

        setSelectedNfts(currentArray);
    }

    const NftBlock = ({
        id,
        value,
        tier,
        level
    }: any) => {
        const styles = {
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(/images/${GetNFTNameByLevel(level).toLowerCase()}.jpg)`,
            backgroundSize: "contain",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat"
        }

        var active = "";

        if (selectedNFTs.includes(id)) { active = 'active'; }

        return (
            <div id={`block-${id}`} className={`consolidate-box flex flex-col items-center justify-center md:mx-[0.625rem] mx-1 md:p-5 p-5 px-4 cp ${active}`} style={styles} onClick={() => selectBlock(id, value, tier, level)}>
                <p className='md:text-base text-sm text-white-80'>#{id}</p>
                <p className='md:text-base text-sm text-white-80'>{GetNFTNameByLevel(level)}</p>
                <p className='md:text-base text-sm text-white-80 font-semibold'>Tier {tier}</p>
            </div>
        )
    }


    if (data.length > 0) {
        var listNFTs = <div></div>
    }
        
    var total = price - (nftValue);
    var usedCredit = 0;

    if (total > 0) {
        if (total < credit) {
            usedCredit = total;
        } else {
            usedCredit = credit;
        }
    }

    var totalColor = "text-white";
    if (total < 0) {
        totalColor = "text-danger font-semibold";
    }

    function ClosePage() {
        closeEvent();
        setSelectedNfts([]);
        setNftValue(0);        
    }

    return (
        <div className='modal-overlay' id={id + "overlay"}>
            <div className="modal" id={id}>
                <div className='flex flex-row justify-between lg:items-start items-center w-100 h-[7.5%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <h4 className='text-white'>Consolidate NFTs</h4>
                    <button className='text-white font-semibold text-2xl x-btn' onClick={() => ClosePage()}>X</button>
                </div>
                <div className='flex flex-col h-[92.5%] w-[100%] lg:px-[50px] px-[25px] lg:pt-[35px] pt-[0px] overflow-y-auto'>
                    <div className='flex flex-col h-[100%]'>
                        <div className='flex flex-col items-start xl:justify-between justify-start h-[100%]'>
                            <div className='flex flex-wrap md:mt-5 mt-4 md:max-h-[210px] max-h-[180px] mb-3 overflow-y-auto selection-box xl:mb-0 mb-1 xl:mt-0 mt-5 console-row'>
                                <NftBlock id={1} level={5} tier={1} value={4000} />
                                <NftBlock id={2} level={4} tier={2} value={1000} />
                                <NftBlock id={3} level={6} tier={3} value={10000} />
                                <NftBlock id={4} level={3} tier={4} value={500} />
                                <NftBlock id={5} level={2} tier={5} value={250} />
                                <NftBlock id={6} level={1} tier={6} value={100} />
                                <NftBlock id={7} level={4} tier={2} value={1000} />
                                <NftBlock id={8} level={4} tier={2} value={1000} />
                                <NftBlock id={9} level={4} tier={2} value={1000} />
                                <NftBlock id={10} level={4} tier={2} value={1000} />
                                <NftBlock id={11} level={3} tier={4} value={500} />
                                <NftBlock id={12} level={2} tier={5} value={250} />
                                <NftBlock id={13} level={1} tier={6} value={100} />
                                <NftBlock id={14} level={4} tier={2} value={1000} />
                                <NftBlock id={15} level={4} tier={2} value={1000} />
                                <NftBlock id={16} level={4} tier={2} value={1000} />
                                <NftBlock id={17} level={4} tier={2} value={1000} />
                            </div>
                            <div className='flex flex-col w-[100%]'>
                                <div className='flex flex-row justify-between items-center  md:mt-4 mt-2'>
                                    <div className='flex flex-row items-center'>
                                        <p className='md:text-lg md:text-base text-sm text-white-60 lg:ls-widest ls-wide'>MINT CREDIT</p>
                                    </div>
                                    <p className='md:text-lg md:text-base text-sm text-white'>${formatterNoDec.format(credit)}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center  md:mt-4 mt-2'>
                                    <div className='flex flex-row items-center'>
                                        <p className='md:text-lg md:text-base text-sm text-white-60 lg:ls-widest ls-wide'>MY USDT</p>
                                    </div>
                                    <p className='md:text-lg md:text-base text-sm text-white'>${formatterNoDec.format(usdtBalance)}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center  md:mt-4 mt-2 md:mb-4 mb-2'>
                                    <div className='flex flex-row items-center'>
                                        <p className='md:text-lg md:text-base text-sm text-white-60 lg:ls-widest ls-wide'>MINT PRICE</p>
                                    </div>
                                    <p className='md:text-lg md:text-base text-sm text-white'>${formatterNoDec.format(price)}</p>
                                </div>
                                <hr />
                                <div className='flex flex-row justify-between items-center  md:mt-4 mt-2'>
                                    <div className='flex flex-row items-center'>
                                        <p className='md:text-lg md:text-base text-sm text-white-60 lg:ls-widest ls-wide'>USED CREDIT</p>
                                    </div>
                                    <p className='md:text-lg md:text-base text-sm text-white'>${formatterNoDec.format(usedCredit)}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center md:mt-4 mt-2'>
                                    <div className='flex flex-row items-center'>
                                        <p className='md:text-lg md:text-base text-sm text-white-60 lg:ls-widest ls-wide'>CONSOLIDATION</p>
                                    </div>
                                    <p className='md:text-lg md:text-base text-sm text-white'>${formatterNoDec.format(nftValue)}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center  md:mt-4 mt-2 md:mb-4 mb-2'>
                                    <div className='flex flex-row items-center'>
                                        <p className='md:text-lg md:text-base text-sm text-white-60 lg:ls-widest ls-wide'>SUBTOTAL</p>
                                    </div>
                                    <p className='md:text-lg md:text-base text-sm text-white'>${formatterNoDec.format(nftValue + usedCredit)}</p>
                                </div>
                                <hr />
                                <div className='flex flex-row justify-between items-center  md:mt-4 mt-2'>
                                    <div className='flex flex-row items-center'>
                                        <p className='md:text-lg md:text-base text-sm text-white-60 lg:ls-widest ls-wide'>TO RECEIVE</p>
                                    </div>
                                    <p className='md:text-lg md:text-base text-sm text-white'>{GetNFTNameByLevel(level).toUpperCase()} {expectedTier.toUpperCase()}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center md:mt-4 mt-2 md:pb-5'>
                                    <div className='flex flex-row items-center'>
                                        <p className='md:text-lg md:text-base text-sm text-white-60 lg:ls-widest ls-wide'>TO PAY</p>
                                    </div>
                                    <p className={`md:text-lg md:text-base text-sm ${totalColor}`}>${formatterNoDec.format(total - usedCredit)}</p>
                                </div>
                            </div>
                            <div className='flex flex-row md:justify-end md:items-end md:mt-0 mt-5 w-[100%] mb-5'>
                                <button id="btn-consolidate" className='px-2 py-1 btn-purple-og w-[100%] font-semibold ls-wide' disabled={true}>Consolidate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ConsolidateModal;