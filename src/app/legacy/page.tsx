'use client';
import Image from 'next/image';
import { ScrollVisibility } from '@/components/ScrollVisibility';
import { ScrollToNft } from '@/scripts/test.js';

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
        <div id={id} className='overflow-hidden flex flex-row justify-evenly lg:h-[650px] h-[610px]'>
            <div className='flex flex-col'>
                <video autoPlay={true} muted={true} loop={true} playsInline={true} className="2xl:max-w-[380x] xl:max-w-[340px] lg:max-w-[320px] max-w-[285px] mx-auto">
                    <source src={video} type="video/mp4" />
                </video>
                <div className='flex flex-row lg:justify-evenly justify-start lg:-mt-[90px] -mt-[70px] w-100'>
                    <div className='flex flex-col lg:items-center items-start lg:px-0 px-5 pl-[100px]'>
                        <p className="flex flex-row lg:text-white/60 text-white lg:font-base font-bold text-lg text-center mb-5 lg:tracking-[0.5em]">
                            {title}
                            <span className='text-base font-normal text-white-30 ml-3 lg:hidden flex'>${price}</span>
                        </p>
                        <p className='text-white-60 lg:hidden block mb-5 max-w-[75vw] lg:mr-0 -mr-[200px]'>Earn daily rewards for a passive income. Realize your winnings or reinvest.</p>
                        <button className='btn-white px-3 pb-[1px] font-bold text-base w-fit lg:mx-auto z-10'>Learn More</button>
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
                <div className='info-box flex flex-col items-center justify-center mt-[125px] w-[95px] mx-auto  lg:flex hidden'>
                    <p className='text-lg text-white'>{price}</p>
                    <p className='text-lg text-white-30 mb-0'>USDT</p>
                </div>
                <div className='info-box flex flex-col items-center justify-center mt-3 w-[95px] mx-auto  lg:flex hidden'>
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
    active = ""
}: any) => {
    return (
        <div id={'nfttab' + id} className={'flex flex-col mt-[25px] legacy cursor-pointer lg:block hidden ' + active} onClick={() => ScrollToNft(id)}>
            <h4 className='text-white-60 flex flex-row items-center'>{name} <span className='text-base text-white-30 ml-3'>${price}</span></h4>
            <p className='text-white-30 max-w-[400px] block'>I am ready to share and educate.
                I want a piece of the future of Ark Fi
            </p>
        </div>
    );
};
export default function Home() {
    return (
        <>
            <div className='container h-100 w-100 mx-auto lg:px-0 px-3'>
                <div className="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center">
                    <div>
                        <div className='flex flex-col position lg:fixed relative'>
                            <h1 className="text-white my-5 mt-4">
                                Legacy NFT
                            </h1>
                            <p className='text-white-60 max-w-[450px] mb-[50px]'>Earn daily rewards for a passive income. Realize your winnings or reinvest.    </p>
                            <NFTTab id={1} price={50000} name={"Diamond"} active={"active"} />
                            <NFTTab id={2} price={10000} name={"Platinum"} />
                            <NFTTab id={3} price={4000} name={"Gold"} />
                            <NFTTab id={4} price={1000} name={"Silver"} />
                            <NFTTab id={5} price={500} name={"Bronze"} />
                            <NFTTab id={6} price={250} name={"Tin"} />
                            <NFTTab id={7} price={100} name={"Copper"} />
                        </div>
                    </div>
                    <ScrollVisibility>
                        <div className='flex flex-col justify-center items-start'>
                            <div className='overflow-hidden flex flex-col justify-center pb-[50px]'>
                                <NFTBlock id="nft1" sharescore={100} boostscore={100} title="DIAMOND" video="/video/nft_platinum.mp4" price="50,000" shares="0.84%" />
                                <NFTBlock id="nft2" sharescore={90} boostscore={95} title="PLATINUM" video="/video/nft_platinum.mp4" price="10,000" shares="0.17%" />
                                <NFTBlock id="nft3" sharescore={85} boostscore={90} title="GOLD" video="/video/nft_gold.mp4" price="4,000" shares="0.08%" />
                                <NFTBlock id="nft4" sharescore={75} boostscore={77} title="SILVER" video="/video/nft_silver_o.mp4" price="1,000" shares="0.02%" />
                                <NFTBlock id="nft5" sharescore={80} boostscore={70} title="BRONZE" video="/video/nft_bronze.mp4" price="500" shares="0.01%" />
                                <NFTBlock id="nft6" sharescore={75} boostscore={65} title="TIN" video="/video/nft_tin.mp4" price="250" shares="0.005%" />
                                <NFTBlock id="nft7" sharescore={65} boostscore={60} title="COPPER" video="/video/nft_copper.mp4" price="100" shares="0.0025%" />
                            </div>
                        </div>
                    </ScrollVisibility>
                </div>
            </div>
        </>
    );
}
