"use client";
import { ScrollVisibility } from '@/components/ScrollVisibility'
import { formatterNoDec, ScrollToNft, OpenModal, CloseModal, SelectTab } from '@/scripts/home';
import { Modal } from '@/components/Layout/Modal';
import { ca, abi } from "@/scripts/legacy";
import { caUSDT, abiUSDT } from '@/scripts/general';
import { useContractRead } from 'wagmi';

const NFTBlock = ({
    id,
    title,
    video,
    price,
    shares,
    boostscore,
    sharescore,
}: any) => {
    return (
        <div id={id} className='overflow-hidden flex flex-row justinpfy-evenly xl:h-[650px] h-[610px]'>
            <div className='flex flex-col'>
                <video autoPlay={true} muted={true} loop={true} playsInline={true} className="2xl:max-w-[380px] xl:max-w-[300px] lg:max-w-[300px] max-w-[285px] mx-auto">
                    <source src={video} type="video/mp4" />
                </video>
                <div className='flex flex-row xl:justify-evenly justify-start xl:-mt-[90px] -mt-[70px] w-100'>
                    <div className='flex flex-col xl:items-center items-start xl:px-0 px-5 lg:pl-0 pl-[90px]'>
                        <p className="flex flex-row xl:text-white/60 text-white xl:font-base font-bold text-lg text-center mb-5 xl:tracking-[0.5em]">
                            {title}
                            <span className='text-base font-normal text-white-30 ml-3 xl:hidden flex'>${price}</span>
                        </p>
                        <p className='text-white-60 xl:hidden block mb-5 md:max-w-[450px] max-w-[75vw] xl:mr-0 -mr-[200px]'>Earn daily rewards for a passive income. Realize your winnings or reinvest.</p>
                        <button className='btn-white px-3 pb-[1px] font-bold text-base w-fit xl:mx-auto z-10' onClick={() => OpenModal(id + "modal")}>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center -ml-[100px] lg:mb-0 mb-[200px]'>
                <div className='flex flex-col rotate-90'>
                    <div className='flex flex-row items-center mb-[8.5px]'>
                        <progress className='rotate-180 h-[5px] w-[200px]' value={boostscore} max="100"></progress>
                        <p className='rotate-180 text-white-30 ml-3'>Boost</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <progress className='rotate-180 h-[5px] w-[200px]' value={sharescore} max="100"></progress>
                        <p className='rotate-180 text-white-30 ml-3'>Shares</p>
                    </div>
                </div>
                <div className='info-box flex flex-col items-center justify-center mt-[125px] w-[95px] mx-auto  xl:flex hidden'>
                    <p className='text-lg text-white'>{price}</p>
                    <p className='text-lg text-white-30 mb-0'>USDT</p>
                </div>
                <div className='info-box flex flex-col items-center justify-center mt-3 w-[95px] mx-auto  xl:flex hidden'>
                    <p className='text-lg text-white'>Shares</p>
                    <p className='text-lg text-white-30 mb-0'>{shares}</p>
                </div>
            </div>
        </div>
    );
};

const NFTTab = ({
    id,
    name,
    price,
    active = "",
    text
}: any) => {
    return (
        <div id={'nfttab' + id} className={'flex flex-col 2xl:mt-[25px] mt-[20px] legacy cursor-pointer xl:block hidden ' + active} onClick={() => ScrollToItem(id)}>
            <h4 className='text-white-60 flex flex-row items-center'>{name} <span className='text-base text-white-30 ml-3'>${formatterNoDec.format(price)}</span></h4>
            <p className='text-white-30 2xl:max-w-[575px] 2xl:pr-[5rem] max-w-[400px] block'>
                {text}
            </p>
        </div>
    );
};

function isElementInViewport(el: any) {
    if (el !== null && el !== undefined) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    else {
        return false;
    }
}

function handleScroll() {
    for (let i = 1; i < 9; i++) {
        if (isElementInViewport(document.getElementById(`nft${i}`))) {
            SelectTab(i);
            break;
        }
    }
}

function ScrollToItem(id: any) {
    window.removeEventListener("scroll", handleScroll);
    ScrollToNft(id);
    setTimeout(function () { window.addEventListener("scroll", handleScroll); }, 1000);
}

const Legacy = ({
    id,
    address
}: any) => {
    const { data: tierData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'getCurrentTier', watch: true });
    const { data: creditData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'mintCredit', args: [address], watch: true });
    const { data: usdtData = 0 } = useContractRead({ chainId: 137, address: caUSDT, abi: abiUSDT, functionName: 'balanceOf', args: [address], watch: true });
    const currentTier = Number(tierData);
    const credit = Number(creditData) / Math.pow(10, 6);
    var usdtBalance = Number(usdtData) / Math.pow(10, 6);

    if (window.innerWidth >= 1280) {
        window.addEventListener("scroll", handleScroll);
    }


    return (
        <div>
            {
                <div className="flex xl:flex-row flex-col xl:justify-between justify-center xl:items-start items-center">
                    <div>
                        <div className='flex flex-col position xl:fixed relative'>
                            <h1 className="text-white my-5 mt-4">
                                Legacy NFT
                            </h1>
                            <p className='text-white-60 max-w-[450px] mb-[50px]'>Earn daily rewards for a passive income. Realize your winnings or reinvest.</p>
                            <NFTTab id={1} price={100000} name={"Diamond"} active={"active"} text={"The Diamond NFT, an elite digital asset offering unparalleled exclusivity and substantial potential returns. Secure your stake in the pinnacle of blockchain wealth, where rarity and value converge for strategic investment."} />
                            <NFTTab id={2} price={50000} name={"Iridium"} text={"nvest in the Iridium NFT, a high-value digital asset that combines sophistication with a solid potential for business yield. Join the ranks of savvy investors who recognize the unique balance of exclusivity and financial growth"} />
                            <NFTTab id={3} price={10000} name={"Platinum"} text={"The Platinum NFT, a strategic addition to your digital portfolio with enduring value. Positioned for consistent growth, this limited edition asset is designed to elevate your investment portfolio with a touch of prestige."} />
                            <NFTTab id={4} price={4000} name={"Gold"} text={"Unlock the potential of the Gold NFT, a strategic investment that blends artistic appeal with promising financial returns. Seize the opportunity to diversify your portfolio with a digital asset that signifies both wealth and growth."} />
                            <NFTTab id={5} price={1000} name={"Silver"} text={"Position yourself for success with the Silver NFT, a limited edition digital asset offering a balance of aesthetic appeal and investment potential. Capture the value of rarity and market demand in this accessible yet distinctive collection piece."} />
                            <NFTTab id={6} price={500} name={"Bronze"} text={"The Bronze NFT, a prudent investment choice that combines exclusivity with potential returns. Diversify your digital portfolio with this limited edition asset, strategically positioned for both short-term gains and long-term value."} />
                            <NFTTab id={7} price={250} name={"Tin"} text={"Explore the Tin NFT, an entry point into the world of exclusive digital assets with promising business yield. Limited in number, this collection piece offers a gateway to strategic investment, combining affordability with rarity."} />
                            <NFTTab id={8} price={100} name={"Copper"} text={"Enter the world of digital investments with the Copper NFT, a cost-effective yet exclusive asset. With a focus on both value and accessibility, this limited edition piece serves as a solid foundation for your evolving digital portfolio."} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start mbb-l'>
                        <div className='overflow-hidden flex flex-col justify-center pb-[50px]'>
                            <NFTBlock id="nft1" sharescore={100} boostscore={100} title="DIAMOND" video="/video/nft_diamond.mp4" price="100,000" shares="1.68%" />
                            <NFTBlock id="nft2" sharescore={100} boostscore={98} title="IRIDIUM" video="/video/nft_iridium.mp4" price="50,000" shares="0.84%" />
                            <NFTBlock id="nft3" sharescore={90} boostscore={95} title="PLATINUM" video="/video/nft_platinum.mp4" price="10,000" shares="0.17%" />
                            <NFTBlock id="nft4" sharescore={85} boostscore={90} title="GOLD" video="/video/nft_gold.mp4" price="4,000" shares="0.08%" />
                            <NFTBlock id="nft5" sharescore={75} boostscore={77} title="SILVER" video="/video/nft_silver_o.mp4" price="1,000" shares="0.02%" />
                            <NFTBlock id="nft6" sharescore={75} boostscore={70} title="BRONZE" video="/video/nft_bronze.mp4" price="500" shares="0.01%" />
                            <NFTBlock id="nft7" sharescore={70} boostscore={65} title="TIN" video="/video/nft_tin.mp4" price="250" shares="0.005%" />
                            <NFTBlock id="nft8" sharescore={65} boostscore={60} title="COPPER" video="/video/nft_copper.mp4" price="100" shares="0.0025%" />
                            <div id='nft9' className='pb-[20vh] xl:block hidden'></div>
                        </div>
                    </div>
                    <Modal address={address} credit={credit} usdtBal={usdtBalance} tier={currentTier} level={8} id={"nft1modal"} title="Diamond NFT" closeEvent={() => CloseModal("nft1modal")} video={"/video/nft_diamond.mp4"} />
                    <Modal address={address} credit={credit} usdtBal={usdtBalance} tier={currentTier} level={7} id={"nft2modal"} title="Iridium NFT" closeEvent={() => CloseModal("nft2modal")} video={"/video/nft_iridium.mp4"} />
                    <Modal address={address} credit={credit} usdtBal={usdtBalance} tier={currentTier} level={6} id={"nft3modal"} title="Platinum NFT" closeEvent={() => CloseModal("nft3modal")} video={"/video/nft_platinum.mp4"} />
                    <Modal address={address} credit={credit} usdtBal={usdtBalance} tier={currentTier} level={5} id={"nft4modal"} title="Gold NFT" closeEvent={() => CloseModal("nft4modal")} video={"/video/nft_gold.mp4"} />
                    <Modal address={address} credit={credit} usdtBal={usdtBalance} tier={currentTier} level={4} id={"nft5modal"} title="Silver NFT" closeEvent={() => CloseModal("nft5modal")} video={"/video/nft_silver_o.mp4"} />
                    <Modal address={address} credit={credit} usdtBal={usdtBalance} tier={currentTier} level={3} id={"nft6modal"} title="Bronze NFT" closeEvent={() => CloseModal("nft6modal")} video={"/video/nft_bronze.mp4"} />
                    <Modal address={address} credit={credit} usdtBal={usdtBalance} tier={currentTier} level={2} id={"nft7modal"} title="Tin NFT" closeEvent={() => CloseModal("nft7modal")} video={"/video/nft_tin.mp4"} />
                    <Modal address={address} credit={credit} usdtBal={usdtBalance} tier={currentTier} level={1} id={"nft8modal"} customcss="brightness-150" title="Copper NFT" closeEvent={() => CloseModal("nft8modal")} video={"/video/nft_copper.mp4"} />
                </div>
            }
        </div>
    );
};

export default Legacy;
