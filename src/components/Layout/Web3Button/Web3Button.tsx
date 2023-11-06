"use client";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const Web3Button = ({
    callback,
}: any) => {
    const { open } = useWeb3Modal();

    function UseButton() {
        open();
        console.log("hoeren")
        callback(false);
    }

    return (
        <button className='btn-obvious' onClick={() => UseButton()}> Open Connect Modal</button >
    );
};

export default Web3Button;
