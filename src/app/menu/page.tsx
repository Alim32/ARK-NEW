import Image from 'next/image';
export default function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="flex lg:flex-row flex-col justify-center items-center">
                    <div className="flex flex-col main-menu-1 lg:block hidden">
                        <h1 className="text-white">Menu</h1>
                        <p className="mt-3 text-white-60 w-75 pr-5 mr-4">
                            Manage your Dapp, Learn about ARK, Stay up to date
                        </p>
                    </div>
                    <div id="main-menu-content" className="flex flex-col md:w-[52.5%] w-[100%] md:pl-[100px] px-4 pb-10">
                        <h2 className="text-white mb-4 pb-3">Features</h2>
                        {/*<div className="flex flex-row mb-0 cp">*/}
                        {/*    <img className="main-menu-icon" src="/images/MENU/spark_lottery.png" />*/}
                        {/*    <div className="flex flex-col px-5 pr-0">*/}
                        {/*        <h4 className="text-white mb-0">Spark Lottery</h4>*/}
                        {/*        <p className="text-white-60 mb-0">00:02:52, Current prizes, New winner</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<hr className="w-[50%]" />*/}
                        <div className="flex flex-row mb-0 cp">
                            <img className="main-menu-icon p-[2px] mt-2" src="/images/MENU/NFT icon.png" />
                            <div className="flex flex-col px-5 pr-0">
                                <h4 className="text-white mb-0">NFTS</h4>
                                <p className="text-white-60 mb-0">Manage your collection of NFTs</p>
                            </div>
                        </div>
                        <hr className="md:w-[50%] w-[100%] my-5" />
                        <div className="flex flex-row mb-0 cp">
                            <img className="main-menu-icon mbb-l mt-2" src="/images/MENU/media.png" />
                            <div className="flex flex-col px-5 pr-0">
                                <h4 className="text-white mb-0">Media</h4>
                                <p className="text-white-60 mb-0">Podcasts, Videos, and more!</p>
                            </div>
                        </div>
                        <hr className="md:w-[50%] w-[100%] my-5" />
                        <h2 className="text-white mt-5 mb-4 pb-3">Basics</h2>
                        <div className="flex flex-row mb-0 cp">
                            <img className="main-menu-icon mbb-l mt-2 min-w-[40px]" src="/images/MENU/ic_person.svg" />
                            <div className="flex flex-col px-5 pr-0">
                                <h4 className="text-white mb-0">Profile</h4>
                                <p className="text-white-60 mb-0">Data, Wallet, profile Picture</p>
                            </div>
                        </div>
                        <hr className="md:w-[50%] w-[100%] my-5" />
                        <div className="flex flex-row mb-0 cp">
                            <img className="main-menu-icon mbb-l mt-2" src="/images/MENU/settings.png" />
                            <div className="flex flex-col px-5 pr-0">
                                <h4 className="text-white mb-0">Settings</h4>
                                <p className="text-white-60 mb-0">Notifications, Security, Preferences</p>
                            </div>
                        </div>
                        <hr className="md:w-[50%] w-[100%] my-5" />
                        <div className="flex flex-row mb-0 cp mb-[75px]">
                            <img className="main-menu-icon mbb-l mt-2" src="/images/MENU/favicon.png" />
                            <div className="flex flex-col px-5 pr-0">
                                <h4 className="text-white mb-0">About ARK</h4>
                                <p className="text-white-60 mb-0">Whitepaper, Contracts, Company</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
