"use client";
import Image from 'next/image';
import { useAccount, useConnect, useDisconnect, useChainId } from "wagmi";
import { Web3Button } from '@/components/Layout/Web3Button';
import { Hero } from '@/components/Consolidate/Hero';
import { InjectedConnector } from "wagmi/connectors/injected";
import React, { useState, useEffect } from 'react';

const Main = ({
    id
}: any) => {
    const [hasMounted, setHasMounted] = useState(false);
    const { address, isConnected = false, status } = useAccount();
    const chain = useChainId();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });

    var IsConnected = isConnected;

    if (status == "reconnecting") {
        IsConnected = false;
    }

    // Hooks
    useEffect(() => {
        setHasMounted(true);
    }, [])

    // Render
    if (!hasMounted) return <div></div>;

    return (
        <div>
            {IsConnected && chain == 137
                ?
                <div className='container h-100 w-100 mx-auto'>
                    <Hero address={address} />              
                </div>
                :
                <Web3Button connected={IsConnected} chainid={chain} />
            }
        </div>
    );
};

export default Main;
