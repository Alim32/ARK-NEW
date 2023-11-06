"use client";
import wagmiConfig from "@/app/web3/wagmiConfig";
import { WagmiConfig } from 'wagmi'
import { Main } from '@/components/Home/Main';


export default function Home() {
    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <Main />            
            </WagmiConfig>
        </>
    );
}