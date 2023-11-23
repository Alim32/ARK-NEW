"use client";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import Image from "next/image";
import { ScrollVisibility } from '@/components/ScrollVisibility'
import { useSwitchNetwork } from 'wagmi';

const Web3Button = ({
    connected,
    chainid
}: any) => {
    const { open } = useWeb3Modal();
    const { switchNetwork } = useSwitchNetwork();

    function UseButton() {
        open();
    }

    var name = localStorage.getItem("profileName");

    if (connected && chainid !== 137) {
        return (
            <ScrollVisibility>
                <div className='container h-100 w-100 mx-auto pb-10'>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-white">Switch Chain</h2>
                        <p className="text-white my-3 text-lg text-center max-w-[400px]">Please Connect to Polygon to use the ArkFi app.</p>
                        <Image
                            className="w-100 h-100 object-fit-contain mt-10 pt-5 cp"
                            src={"/images/polygon.png"}
                            width={55}
                            height={55}
                            alt="ARK connect"
                            onClick={() => switchNetwork?.(137)}
                        />
                        <Image
                            className="w-100 h-100 object-fit-contain mt-10 pt-5"
                            src={"/images/arc_main.png"}
                            width={1600}
                            height={1000}
                            alt="ARC ARK"
                        />
                        <button className='btn-white px-5 md:text-xl text-base pt-1 pb-2 2xl:-mt-[150px] md:-mt-[100px] -mt-[10px] mb-[75px]' onClick={() => switchNetwork?.(137)}>Switch</button>
                    </div>
                </div>
            </ScrollVisibility>
        );
    } else {
        return (
            <ScrollVisibility>
                <div className='container h-100 w-100 mx-auto pb-10'>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-white">Welcome {name}</h2>
                        <p className="text-white my-3 text-lg text-center max-w-[400px]">In order to use the ArkFi app, you need to connect your wallet</p>
                        <Image
                            className="w-100 h-100 object-fit-contain mt-10 pt-5 cp"
                            src={"/images/pulse.gif"}
                            width={105}
                            height={105}
                            alt="ARK connect"
                            onClick={() => UseButton()}
                        />
                        <Image
                            className="w-100 h-100 object-fit-contain mt-10 pt-5"
                            src={"/images/arc_main.png"}
                            width={1600}
                            height={1000}
                            alt="ARC ARK"
                        />
                        <button className='btn-white px-5 md:text-xl text-base pt-1 pb-2 2xl:-mt-[150px] md:-mt-[100px] -mt-[10px] mb-[75px]' onClick={() => UseButton()}>Connect</button>
                    </div>
                </div>
            </ScrollVisibility>
        );
    }
};

export default Web3Button;
