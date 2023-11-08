"use client";
import Image from 'next/image';
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ScrollVisibility } from '@/components/ScrollVisibility'
import { Web3Button } from '@/components/Layout/Web3Button';
import { Hero } from '@/components/Home/Hero';
import { Calculator } from '@/components/Home/Calculator';
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
                <ScrollVisibility>
                    <div className='container h-100 w-100 mx-auto'>
                        <Hero address={address} openmodal={() => OpenModal("modal-myacc")} />
                        <Calculator />
                        <Modal id={"modal-myacc"} title="Diamond NFT" closeEvent={() => CloseModal("modal-myacc")} video={"/video/nft_platinum.mp4"} />
                    </div>
                </ScrollVisibility>
                :
                <Web3Button />
            }
        </div>
    );
};

export default Main;
