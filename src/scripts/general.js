import { useContractRead, readContracts, useContractReads } from 'wagmi'

export const caUSDT = "0xc2132d05d31c914a87c6611c10748aeb04b58e8f";
export const abiUSDT = [{ "inputs": [{ "internalType": "address", "name": "_proxyTo", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "_new", "type": "address" }, { "indexed": false, "internalType": "address", "name": "_old", "type": "address" }], "name": "ProxyOwnerUpdate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_new", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_old", "type": "address" }], "name": "ProxyUpdated", "type": "event" }, { "stateMutability": "payable", "type": "fallback" }, { "inputs": [], "name": "implementation", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "proxyOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "proxyType", "outputs": [{ "internalType": "uint256", "name": "proxyTypeId", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferProxyOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_newProxyTo", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "updateAndCall", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_newProxyTo", "type": "address" }], "name": "updateImplementation", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

export function getUSDTBalance(address) {
    try {
        const { data, isError, isLoading } = useContractRead({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: 'balanceOf',
            args: [address],
            watch: true
        })

        return Number(data) / Math.pow(10, 6);
    }
    catch (error) {
        console.log(error)
        return 0;
    }
}