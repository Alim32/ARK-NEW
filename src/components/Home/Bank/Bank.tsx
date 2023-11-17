"use client";
import { ScrollVisibility } from '@/components/ScrollVisibility'


const Bank = ({
}: any) => {
    return (
        <ScrollVisibility>
            <div className='xl:p-5 mb-[150px] mbb-l'>                
                <div className='flex lg:flex-row flex-col w-100 justify-evenly items-center'>
                    <div className="flex flex-col justify-center items-center w-[100%] px-5">
                        <video autoPlay={true} muted={true} loop={true} playsInline={true} className="max-w-[325px] max-h-[325px]">
                            <source src={"/video/coins2.mp4"} type="video/mp4" />
                        </video>
                        <h4 className="text-white">Ramp</h4>   
                        <p className='text-white-60 text-center max-w-[400px] mt-5'>Jump into crypto using your favorite payment method. Be up and running in DeFi in seconds. </p>    
                        <a className='btn-purple-og py-1 px-3 mt-10 w-[250px] text-center font-semibold' href="https://bank.arkfi.io" target="_blank">Try it now</a>
                    </div>
                    <div className="divider lg:block hidden h-[550px]"></div>
                    <div className="flex flex-col justify-center items-center w-[100%] px-5 lg:mt-0 mt-[75px]">
                        <video autoPlay={true} muted={true} loop={true} playsInline={true} className="max-w-[325px]  max-h-[325px]">
                            <source src={"/video/cards.mp4"} type="video/mp4" />
                        </video>
                        <h4 className="text-white">Cards</h4>                        
                        <p className='text-white-60 text-center max-w-[400px] mt-5'>Anonymous, low fees, and accepted everywhere.  You can even use them with Apple Pay and Google Pay. </p>
                        <a className='btn-purple-og py-1 px-3 mt-10 w-[250px] text-center font-semibold' href="https://bank.arkfi.io/cards" target="_blank">Get yours now</a>
                    </div>
                </div>
            </div>
        </ScrollVisibility>
    );
};

export default Bank;
