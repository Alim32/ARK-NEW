"use client";
import Image from 'next/image';
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Web3Button } from '@/components/Layout/Web3Button';
import { Hero } from '@/components/NFTS/Hero';
import { InjectedConnector } from "wagmi/connectors/injected";
import React, { useState, useEffect } from 'react';

const Main = ({
    id
}: any) => {
    const [hasMounted, setHasMounted] = useState(false);
    const { address, isConnected = false, status } = useAccount();
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
            {IsConnected
                ?
                <div className='container h-100 w-100 mx-auto'>
                    <Hero address={address} />              
                </div>
                :
                <Web3Button />
            }
        </div>
    );
};

export default Main;
