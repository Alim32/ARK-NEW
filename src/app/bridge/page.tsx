"use client";
import { SquidWidget } from "@0xsquid/widget";

export default function App() {
    return (
        <div className='container h-[100%] w-[100%] mx-auto'>
            <h2 className="text-white">Cross-chain Bridge</h2>
            <p className="text-white-60">Bridge your assets across multiple chains for a low fee.</p>
            <hr className="h-[1px] w-[100%] my-5 mb-10" />
            <div className='h-[100%] w-fit mx-auto text-center flex flex-col justify-center items-center'>
                <SquidWidget config={{
                    companyName: "Squid Widget",
                    integratorId: "ARK Fi-swap-widget",
                    slippage: 1,                    
                    infiniteApproval: false,
                    apiUrl: "https://api.squidrouter.com",
                    style: {
                        neutralContent: "#ffffff4d",
                        baseContent: "#FFFFFF",
                        base100: "#03071C",
                        base200: "#2b284d",
                        base300: "#4c4c4c",
                        error: "#FF0000",
                        warning: "#FFFF00",
                        primary: "#3826FF",
                        secondary: "#3826FF",
                        secondaryContent: "#FFFF00",
                        secondaryFocus: "#3826FF",
                        neutral: "#03071C"
                    },
                    collectFees: {
                        integratorAddress: "0x70f4416A7ACe9e659C7aBDd63cb3Fd2B72382964",
                        fee: 99
                    }
                }} />
            </div>
        </div>
    );
}