"use client";
import { useAccount } from 'wagmi'

const ConnectionChecker = ({
    callback,
}: any) => {
    const { isConnected } = useAccount();

    callback(isConnected)

    return (        
        <div></div>
    );
};

export default ConnectionChecker;
