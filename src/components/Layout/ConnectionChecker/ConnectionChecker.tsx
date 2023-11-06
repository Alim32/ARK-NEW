"use client";
import { useAccount } from 'wagmi'

const ConnectionChecker = ({
    callback,
    reset
}: any) => {
    var connected = false;

    if (typeof window !== 'undefined') {
        var wagmicon = localStorage.getItem("wagmi.connected");
        if (wagmicon !== null) {
            connected = wagmicon === "true";
        }
    }

    if (connected) {
        const { isConnected } = useAccount();
        callback(isConnected)
        reset(false);
    } else {
        callback(false);
        reset(false);
    }

    return (
        <div></div>
    );
};

export default ConnectionChecker;
