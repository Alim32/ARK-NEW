"use client";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const Web3Button = ({
    callback,
}: any) => {
    const { open } = useWeb3Modal();

    function UseButton() {             
        open();     
        callback(true);
    }

    return (
        <div className='container h-100 w-100 mx-auto'>
            <div className="flex flex-col"> 
                <h1 className="text-white">Welcome</h1>
                <button className='btn-obvious' onClick={() => UseButton()}> Open Connect Modal</button>
            </div>

        </div>
    );
};

export default Web3Button;
