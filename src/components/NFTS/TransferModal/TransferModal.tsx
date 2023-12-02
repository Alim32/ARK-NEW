'use client';
import { ca, abi, GetNFTNameByLevel, GetBoostPercentageByLevelAndTier } from "@/scripts/legacy";
import { useState } from "react";
import { useContractRead } from "wagmi";
import { utils } from "web3";
import { TransferButton } from "@/components/Layout/TransferButton";


const TransferModal = ({
    id,
    address,
    selectedToken,
    closeEvent,
}: any) => {
    const [isValid, setIsValid] = useState(false);
    const [transferTarget, setTransferTarget] = useState("");
    const { data: levelData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'levelOfNft', args: [selectedToken], watch: true });
    const level = Number(levelData);
    const { data: tierData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'mintTierOfNft', args: [selectedToken], watch: true });
    const tier = Number(tierData);
    function handleInput() {
        var input = document.getElementById("transfer-input") as HTMLInputElement;

        if (utils.isAddress(input.value)) {
            setIsValid(true);
            input.classList.add("isvalid");
            input.classList.remove("iserror");
            setTransferTarget(input.value);            
        } else {
            if (isValid) {
                setIsValid(false);
            }
            input.classList.remove("isvalid");

            if (input.value.length > 0) {
                input.classList.add("iserror");
            } else {
                input.classList.remove("iserror");
            }

            if (transferTarget !== "") {
                setTransferTarget("");
            }
        }
    }

    function CloseModal() {
        var input = document.getElementById("transfer-input") as HTMLInputElement;
        input.value = "";
        input.classList.remove("iserror");
        input.classList.remove("isvalid");
        setIsValid(false);
        setTransferTarget("");
        closeEvent()
    }

    if (selectedToken == -1) {
        return (<></>);
    }

    return (
        <div className='modal-overlay' id={id + "overlay"}>
            <div className="modal" id={id}>
                <div className='flex flex-row justify-between lg:items-start items-center w-100 h-[7.5%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <h4 className='text-white'>Transfer NFT </h4>
                    <button className='text-white font-semibold text-2xl x-btn' onClick={() => CloseModal()}>X</button>
                </div>
                <div className='flex flex-col h-[92.5%] w-[100%] lg:px-[50px] px-[25px] lg:pt-[35px] pt-[20px] overflow-y-auto'>
                    <hr className='mt-5' />
                    <div className='flex flex-row justify-between mt-5'>
                        <p className='text-white-60 sm:text-lg text-base'>NFT to Transfer:</p>
                        <p className='text-white sm:text-lg text-base'>{GetNFTNameByLevel(level)} #{selectedToken}</p>
                    </div>
                    <div className='flex flex-row justify-between mt-5'>
                        <p className='text-white-60 sm:text-lg text-base'>Tier of NFT:</p>
                        <p className='text-white sm:text-lg text-base'>Tier {tier}</p>
                    </div>
                    <div className='flex flex-row justify-between mt-5'>
                        <p className='text-white-60 sm:text-lg text-base'>Boost of NFT:</p>
                        <p className='text-white sm:text-lg text-base'>{GetBoostPercentageByLevelAndTier(level, tier)}%</p>
                    </div>
                    <hr className='mt-5' />
                    <div className='flex flex-col mt-10'>
                        <p className='text-white-60 text-lg'>Transfer to:</p>
                        <input className='form-control-2 mt-2 text-lg' placeholder='0x0000....00000' onChange={handleInput} id='transfer-input' />
                    </div>
                    <div className='flex flex-row h-[100%] md:justify-end md:items-end md:mt-0 mt-5'>
                        <div className='flex flex-col w-[100%]'>
                            <p className='text-danger text-center font-semibold'>Warning: ARK cannot retrieve NFTs sent to the wrong wallet.</p>                            
                            <TransferButton address={address} target={transferTarget} id={selectedToken} disabled={!isValid} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default TransferModal;