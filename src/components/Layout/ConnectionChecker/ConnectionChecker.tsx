"use client";
import { useAccount } from 'wagmi'

const ConnectionChecker = ({
    callback,
}: any) => {    
    const connected = localStorage.getItem("wagmi.connected");

    if (connected) {
        const { isConnected } = useAccount();

        if (isConnected) {
            callback(false)
        }
    }

    return (        
        <div></div>
    );
};

export default ConnectionChecker;
