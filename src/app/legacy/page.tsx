"use client";
import wagmiConfig from "@/app/web3/wagmiConfig";
import { WagmiConfig } from 'wagmi'
import { useState } from 'react';
import { Main } from '@/components/Legacy/Main';


export default function Home() {
    const [IsConnected, setIsConnected] = useState(true);

    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <Main />
            </WagmiConfig>
        </>
    );
}
