"use client";
import Image from 'next/image';
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Web3Button } from '@/components/Layout/Web3Button';
import { Hero } from '@/components/Home/Hero';
import { Calculator } from '@/components/Home/Calculator';
import { Statistics } from '@/components/Home/Statistics';
import { InjectedConnector } from "wagmi/connectors/injected";
import React, { useState, useEffect } from 'react';
import { OpenModal, CloseModal } from '@/scripts/test.js';
import { Modal } from '@/components/Layout/Modal';

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
                    <Hero address={address} openmodal={() => OpenModal("modal-myacc")} />
                    <Calculator />
                    <Statistics />
                    <Modal id={"modal-myacc"} title="Diamond NFT" closeEvent={() => CloseModal("modal-myacc")} video={"/video/nft_platinum.mp4"} />
                </div>
                :
                <Web3Button />
            }
        </div>
    );
};

export default Main;
