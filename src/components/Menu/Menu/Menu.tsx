"use client";
import Image from "next/image";
import { ScrollVisibility } from "@/components/ScrollVisibility";
import { useState } from "react";
import iconArrowLeft from "@/images/icons/icon-arrow-left-outline.svg"
import iconDisconnect from "@/images/icons/icon-unconnected-outline.svg"
import { formatter } from "@/scripts/home";
import { useDisconnect, useBalance } from "wagmi";

const Menu = ({
    address
}: any) => {
    const [mode, setMode] = useState(0);
    const { disconnect } = useDisconnect();
    const { data } = useBalance({ address: address });
    var balance = Number(data?.value) / Math.pow(10, 18);

    switch (mode) {
        default:
        case 0:
            return (
                <ScrollVisibility>
                    <div className="container-fluid">
                        <div className="flex lg:flex-row flex-col justify-center items-start">
                            <div className="flex flex-col main-menu-1 lg:block hidden mt-[25vh]">
                                <h1 className="text-white">Menu</h1>
                                <p className="mt-3 text-white-60 w-75 pr-5 mr-4">
                                    Manage your Dapp, Learn about ARK, Stay up to date
                                </p>
                            </div>
                            <div id="main-menu-content" className="flex flex-col md:w-[52.5%] w-[100%] md:pl-[100px] px-4 pb-10">
                                <h2 className="text-white mb-4 pb-3">Features</h2>
                                {/*<div className="flex flex-row mb-0 cp">*/}
                                {/*    <Image className="main-menu-icon" src="/images/MENU/spark_lottery.png" />*/}
                                {/*    <div className="flex flex-col px-5 pr-0">*/}
                                {/*        <h4 className="text-white mb-0">Spark Lottery</h4>*/}
                                {/*        <p className="text-white-60 mb-0">00:02:52, Current prizes, New winner</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<hr className="w-[50%]" />*/}
                                <a className="flex flex-row mb-0 cp" href='/nfts'>
                                    <Image className="main-menu-icon p-[2px] mt-2" src="/images/MENU/NFT icon.png" alt='nft' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Manage NFTs</h4>
                                        <p className="text-white-60 mb-0">Inspect, transfer or level up your NFTs.</p>
                                    </div>
                                </a>
                                <hr className="md:w-[50%] w-[100%] my-5" />
                                <a className="flex flex-row mb-0 cp" href='/consolidate'>
                                    <Image className="main-menu-icon p-[2px] mt-2" src="/images/MENU/consolidate.png" alt='consolidate' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Consolidate NFTs</h4>
                                        <p className="text-white-60 mb-0">Combine multiple lower NFTs into a higher level.</p>
                                    </div>
                                </a>

                                <hr className="md:w-[50%] w-[100%] my-5" />
                                <a className="flex flex-row mb-0 cp" href='https://old.arkfi.io' target="_blank">
                                    <Image className="main-menu-icon p-[2px] mt-2" src="/icons/tab_foundation.png" alt='gifting' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Old Dapp</h4>
                                        <p className="text-white-60 mb-0">You can take a look at the old dApp here.</p>
                                    </div>
                                </a>

                                <hr className="md:w-[50%] w-[100%] my-5" />
                                <div className="flex flex-row mb-0 cp" onClick={() => setMode(4)}>
                                    <Image className="main-menu-icon mbb-l mt-2" src="/images/MENU/media.png" alt='media' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Media</h4>
                                        <p className="text-white-60 mb-0">Podcasts, Videos, and more!</p>
                                    </div>
                                </div>
                                {
                                    address == "0x7b4D158A9682c61072C0D3E991885f0f828509ba" ?
                                        <div>
                                            <hr className="md:w-[50%] w-[100%] my-5" />
                                            <h2 className="text-white mt-5 mb-4 pb-3">CEO</h2>
                                            <div className="flex flex-row mb-0 cp">
                                                <Image className="main-menu-icon mbb-l mt-2 min-w-[40px]" src="/images/MENU/ic_code.svg" alt='profile' width={50} height={50} />
                                                <div className="flex flex-col px-5 pr-0">
                                                    <h4 className="text-white mb-0">Item 1</h4>
                                                    <p className="text-white-60 mb-0">Lorem Ipsum Dolar</p>
                                                </div>
                                            </div>
                                            <hr className="md:w-[50%] w-[100%] my-5" />
                                            <div className="flex flex-row mb-0 cp">
                                                <Image className="main-menu-icon mbb-l mt-2" src="/images/MENU/ic_whitepaper.svg" alt='settings' width={50} height={50} />
                                                <div className="flex flex-col px-5 pr-0">
                                                    <h4 className="text-white mb-0">Item 2</h4>
                                                    <p className="text-white-60 mb-0">Lorem Ipsum Dolar</p>
                                                </div>
                                            </div>
                                            <hr className="md:w-[50%] w-[100%] my-5" />
                                            <div className="flex flex-row mb-0 cp">
                                                <Image className="main-menu-icon mbb-l mt-2" src="/images/MENU/ic_news.svg" alt='about' width={50} height={50} />
                                                <div className="flex flex-col px-5 pr-0">
                                                    <h4 className="text-white mb-0">Item 3</h4>
                                                    <p className="text-white-60 mb-0">Lorem Ipsum Dolar</p>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <></>
                                }

                                <hr className="md:w-[50%] w-[100%] my-5" />
                                <h2 className="text-white mt-5 mb-4 pb-3">Basics</h2>
                                <div className="flex flex-row mb-0 cp" onClick={() => setMode(2)}>
                                    <Image className="main-menu-icon mbb-l mt-2 min-w-[40px]" src="/images/MENU/ic_person.svg" alt='profile' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Profile</h4>
                                        <p className="text-white-60 mb-0">Data, Wallet, profile Picture</p>
                                    </div>
                                </div>
                                <hr className="md:w-[50%] w-[100%] my-5" />
                                <div className="flex flex-row mb-0 cp" onClick={() => setMode(3)}>
                                    <Image className="main-menu-icon mbb-l mt-2" src="/images/MENU/settings.png" alt='settings' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Settings</h4>
                                        <p className="text-white-60 mb-0">Notifications, Security, Preferences</p>
                                    </div>
                                </div>
                                <hr className="md:w-[50%] w-[100%] my-5" />
                                <div className="flex flex-row mb-0 cp mb-[75px]" onClick={() => setMode(1)}>
                                    <Image className="main-menu-icon mbb-l mt-2" src="/images/MENU/favicon.png" alt='about' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">About ARK</h4>
                                        <p className="text-white-60 mb-0">Whitepaper, Contracts, Company</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollVisibility>
            );
        case 1:
            return (
                <ScrollVisibility>
                    <div className="container-fluid">
                        <div className="flex lg:flex-row flex-col justify-center items-start">
                            <div className="flex flex-col main-menu-1 lg:block hidden mt-[25vh]">
                                <h1 className="text-white">Menu</h1>
                                <p className="mt-3 text-white-60 w-75 pr-5 mr-4">
                                    Manage your Dapp, Learn about ARK, Stay up to date
                                </p>
                            </div>
                            <div id="main-menu-content" className="flex flex-col md:w-[52.5%] w-[100%] md:pl-[100px] px-4 pb-10">
                                <button className='mb-5 flex flex-row items-center' onClick={() => setMode(0)}>
                                    <Image
                                        src={iconArrowLeft}
                                        width={35}
                                        height={35}
                                        alt="icon-arrow-left"
                                        className='invert'
                                    />
                                    <p className='text-white-30 text-lg ml-5'>Go Back</p>
                                </button>
                                <h2 className="text-white mb-4 pb-3">About ARK</h2>
                                <a className="flex flex-row mb-0 cp" href='https://docs.arkfi.io/ark-fi-white-paper/' target="_blank">
                                    <Image className="main-menu-icon p-[2px] mt-2" src="/images/MENU/ic_whitepaper.svg" alt='whitepaper' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Whitepaper</h4>
                                        <p className="text-white-60 mb-0">Inspect, transfer or level up your NFTs.</p>
                                    </div>
                                </a>
                                <hr className="md:w-[50%] w-[100%] my-5" />
                                <a className="flex flex-row mb-0 cp" href='https://docs.arkfi.io/ark-fi-white-paper/legacy-nfts' target="_blank">
                                    <Image className="main-menu-icon p-[2px] mt-2" src="/images/MENU/ic_code.svg" alt='consolidate' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Contracts</h4>
                                        <p className="text-white-60 mb-0">Combine multiple lower NFTs into a higher level.</p>
                                    </div>
                                </a>
                                <hr className="md:w-[50%] w-[100%] my-5" />
                                <a className="flex flex-row mb-0 cp" href='https://arkfi.io' target="_blank">
                                    <Image className="main-menu-icon p-[2px] mt-2" src="/images/MENU/favicon.png" alt='consolidate' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Company</h4>
                                        <p className="text-white-60 mb-0">Find out more about the ARK business.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollVisibility>
            );
        case 2:
            return (
                <ScrollVisibility>
                    <div className="container-fluid">
                        <div className="flex lg:flex-row flex-col justify-center items-start">
                            <div className="flex flex-col main-menu-1 lg:block hidden mt-[25vh]">
                                <h1 className="text-white">Menu</h1>
                                <p className="mt-3 text-white-60 w-75 pr-5 mr-4">
                                    Manage your Dapp, Learn about ARK, Stay up to date
                                </p>
                            </div>
                            <div id="main-menu-content" className="flex flex-col md:w-[52.5%] w-[100%] md:pl-[100px] px-4 pb-10">
                                <button className='mb-5 flex flex-row items-center' onClick={() => setMode(0)}>
                                    <Image
                                        src={iconArrowLeft}
                                        width={35}
                                        height={35}
                                        alt="icon-arrow-left"
                                        className='invert'
                                    />
                                    <p className='text-white-30 text-lg ml-5'>Go Back</p>
                                </button>
                                <h2 className="text-white mb-4 pb-3">Profile</h2>
                                <div className="flex flex-row mb-0">
                                    <Image className="main-menu-icon p-[2px] mt-2" src="/images/MENU/ic_person.svg" alt='consolidate' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Connected Wallet</h4>
                                        <p className="text-white-60 mb-0 break-all">{address}</p>
                                    </div>
                                </div>
                                <hr className="md:w-[50%] w-[100%] my-5" />
                                <div className="flex flex-row mb-0">
                                    <Image className="main-menu-icon p-[2px] mt-2" src={"/images/polygon.png"} alt='consolidate' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Balance</h4>
                                        <p className="text-white-60 mb-0">{formatter.format(balance)} MATIC</p>
                                    </div>
                                </div>
                                <hr className="md:w-[50%] w-[100%] my-5" />
                                <a className="flex flex-row mb-0 cp" onClick={() => disconnect()}>
                                    <Image className="main-menu-icon p-[2px] mt-2" src={iconDisconnect} alt='consolidate' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Disconnect</h4>
                                        <p className="text-white-60 mb-0">Disconnect your wallet from this dApp.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollVisibility>
            );
        case 3:
            return (
                <ScrollVisibility>
                    <div className="container-fluid">
                        <div className="flex lg:flex-row flex-col justify-center items-start">
                            <div className="flex flex-col main-menu-1 lg:block hidden mt-[25vh]">
                                <h1 className="text-white">Menu</h1>
                                <p className="mt-3 text-white-60 w-75 pr-5 mr-4">
                                    Manage your Dapp, Learn about ARK, Stay up to date
                                </p>
                            </div>
                            <div id="main-menu-content" className="flex flex-col md:w-[52.5%] w-[100%] md:pl-[100px] px-4 pb-10">
                                <button className='mb-5 flex flex-row items-center' onClick={() => setMode(0)}>
                                    <Image
                                        src={iconArrowLeft}
                                        width={35}
                                        height={35}
                                        alt="icon-arrow-left"
                                        className='invert'
                                    />
                                    <p className='text-white-30 text-lg ml-5'>Go Back</p>
                                </button>
                                <h2 className="text-white mb-4 pb-3">Settings</h2>
                                <div className="flex flex-row mb-0">
                                    <Image className="main-menu-icon p-[2px] mt-2" src="/images/MENU/ic_code.svg" alt='consolidate' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Coming Soon</h4>
                                        <p className="text-white-60 mb-0 break-all">There are currently no settings.</p>
                                    </div>
                                </div>
                                <hr className="md:w-[50%] w-[100%] my-5" />

                            </div>
                        </div>
                    </div>
                </ScrollVisibility>
            );
        case 4:
            return (
                <ScrollVisibility>
                    <div className="container-fluid">
                        <div className="flex lg:flex-row flex-col justify-center items-start">
                            <div className="flex flex-col main-menu-1 lg:block hidden mt-[25vh]">
                                <h1 className="text-white">Menu</h1>
                                <p className="mt-3 text-white-60 w-75 pr-5 mr-4">
                                    Manage your Dapp, Learn about ARK, Stay up to date
                                </p>
                            </div>
                            <div id="main-menu-content" className="flex flex-col md:w-[52.5%] w-[100%] md:pl-[100px] px-4 pb-10">
                                <button className='mb-5 flex flex-row items-center' onClick={() => setMode(0)}>
                                    <Image
                                        src={iconArrowLeft}
                                        width={35}
                                        height={35}
                                        alt="icon-arrow-left"
                                        className='invert'
                                    />
                                    <p className='text-white-30 text-lg ml-5'>Go Back</p>
                                </button>
                                <h2 className="text-white mb-4 pb-3">Media</h2>
                                <a className="flex flex-row items-center mb-0 cp" href='https://twitter.com/arkfiinvest' target="_blank">
                                    <Image className="main-menu-icon p-[2px] mt-2 h-[37.5px]" src="/images/twitter-x.png" alt='consolidate' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Twitter / X</h4>
                                        <p className="text-white-60 mb-0 break-all">Check and follow our X for the latest news.</p>
                                    </div>
                                </a>
                                <hr className="md:w-[50%] w-[100%] my-5" />
                                <a className="flex flex-row items-center mb-0 cp" href='https://medium.com/ark-fi' target="_blank">
                                    <Image className="main-menu-icon p-[2px] mt-2" src="/images/medium.png" alt='consolidate' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Medium</h4>
                                        <p className="text-white-60 mb-0 break-all">Check our latest articles and content.</p>
                                    </div>
                                </a>
                                <hr className="md:w-[50%] w-[100%] my-5" />
                                <a className="flex flex-row items-center mb-0 cp" href='https://www.youtube.com/@ARK_Fi/videos' target="_blank">
                                    <Image className="main-menu-icon p-[2px] mt-2" src="/icons/ic_podcast.svg" alt='consolidate' width={50} height={50} />
                                    <div className="flex flex-col px-5 pr-0">
                                        <h4 className="text-white mb-0">Podcasts</h4>
                                        <p className="text-white-60 mb-0 break-all">Check our latest podcasts on Youtube.</p>
                                    </div>
                                </a>
                                <hr className="md:w-[50%] w-[100%] my-5" />
                                {/*<a className="twitter-timeline" href="https://twitter.com/arkfiinvest?ref_src=twsrc%5Etfw" data-theme="dark">Tweets by arkfiinvest</a>*/}
                                {/*<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
                            </div>
                        </div>
                    </div>
                </ScrollVisibility>
            );
    }
};

export default Menu;
