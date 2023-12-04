"use client";
import Image from "next/image";
import { ca, abi, GetNFTNameByLevel } from "@/scripts/legacy";
import { readContract } from '@wagmi/core'
import { formatter, formatterNoDec, setNewNFT, openDropDown } from '@/scripts/home';
import { caUSDT, abiUSDT } from '@/scripts/general';
import { ScrollVisibility } from '@/components/ScrollVisibility'
import { useEffect, useState } from "react";
import { readContracts, useContractRead } from "wagmi";
import { ConsolidateButton } from '@/components/Consolidate/ConsolidateButton';
import { ApproveButton } from "@/components/Layout/ApproveButton";

const DropItem = ({
    image,
    text,
    clickEvent
}: any) => {
    return (
        <button className='dropdown-item' onClick={clickEvent}>
            <Image
                src={image}
                width={30}
                height={50}
                alt="nft logo"
                className='mr-5'
            />
            <h4 className="text-white text-center mx-5 ls-wider">{text}</h4>
            <span></span>
        </button>
    )
}

const Hero = ({
    address
}: any) => {
    const initialValue: any = [];
    const initTierData: any = {};
    const [nftBalances, setNftBalances] = useState([]);
    const [disabledtext, setDisabledText] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [nftData, setData] = useState([]);
    const [tierSelectData, setTierSelectData] = useState(initTierData);
    const [nftValue, setNftValue] = useState(0);
    const [dataLength, setDataLength] = useState(0);
    const [selectedNFTs, setSelectedNfts] = useState(initialValue);
    const [level, setLevel] = useState(6);
    const { data: creditData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'mintCredit', args: [address], watch: true });
    const { data: balanceData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'balanceOf', args: [address], watch: true });
    const { data: priceData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'nftPriceOfLevel', args: [level], watch: true });
    const { data: usdtData = 0 } = useContractRead({ chainId: 137, address: caUSDT, abi: abiUSDT, functionName: 'balanceOf', args: [address], watch: true });
    const { data: approvalData = 0 } = useContractRead({ chainId: 137, address: caUSDT, abi: abiUSDT, functionName: 'allowance', args: [address, ca], watch: true });
    const { data: tierData = 0 } = useContractRead({ chainId: 137, address: ca, abi: abi, functionName: 'getCurrentTier', watch: true });    
    const currentTier = Number(tierData);
    const [selectedTier, setSelectedTier] = useState(currentTier);
    const credit = Number(creditData) / Math.pow(10, 6);
    const balance = Number(balanceData);
    const price = Number(priceData) / Math.pow(10, 6);  
    var usdtBalance = Number(usdtData) / Math.pow(10, 6);
    var approvalBalance = Number(approvalData) / Math.pow(10, 6);

    useEffect(() => {
        async function tokenOfOwnerByIndex(id: number) {
            var returnVal = 0;
            try {
                const data: any = await readContract({
                    chainId: 137,
                    address: ca,
                    abi: abi,
                    functionName: 'tokenOfOwnerByIndex',
                    args: [address, id]
                }).then((data: any) => {
                    returnVal = Number(data);
                });

                return returnVal;
            }
            catch {                
                return -1;
            }
        }

        async function fetchData() {
            var nftData: any = [];
            for (let i = 0; i < balance; i++) {
                var tokenId = Number(await tokenOfOwnerByIndex(i));
                if (tokenId == -1) { continue; }
                nftData.push(Number(tokenId));
            }

            setNftBalances(nftData);
        }

        if (nftBalances.length !== balance) {
            fetchData();
            ResetSelection();
        }
    }, [balance, nftBalances.length, address]);

    useEffect(() => {
        var _data: any = {};

        async function getNFTInfos(id: number) {
            var returnVal = {
                shares: 0,
                level: 0,
                tier: 0,
            }

            const multiData: any = await readContracts({
                contracts: [
                    {
                        address: ca,
                        abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "arkWallet", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "status", "type": "bool" }], "name": "ArkWalletSet", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "oldLevel", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newLevel", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "priceOfLevelUp", "type": "uint256" }], "name": "NftLevelledUp", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "level", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "NftMinted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardsToBeAdded", "type": "uint256" }], "name": "RewardsAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "investor", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "claimableNow", "type": "uint256" }], "name": "RewardsClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardsToBeAdded", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rewardsPerShareToday", "type": "uint256" }], "name": "RewardsDistributed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "ExcludeNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "ReviveNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "penalty", "type": "uint256" }, { "internalType": "uint256", "name": "decay", "type": "uint256" }], "name": "SetBoostValuesOfLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "supply", "type": "uint256" }], "name": "SetMaxSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "timeInSeconds", "type": "uint256" }], "name": "SetRewardsCooldown", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "boost", "type": "uint256" }], "name": "SetTierBoost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "endsAt", "type": "uint256" }], "name": "SetTierEnding", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "passed", "type": "uint256" }], "name": "SetTierPasser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "USDT", "outputs": [{ "internalType": "contract IBEP20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "addMintCredit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "addMintCreditFree", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "usdtAmount", "type": "uint256" }], "name": "addToRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "boostDecayOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "boostPenalyOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "circMintCredits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claimRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "claimRewardsFor", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "claimedRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "consolidateNFTs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "levels", "type": "uint256" }, { "internalType": "uint256", "name": "share", "type": "uint256" }], "name": "createNewLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "dailyRewardPercent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "distributeRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "distributeRewardsManuallyCEO", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "excluded", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getClaimableRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentTier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getLifetimeRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getPriceForLevelUp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isArk", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastDistribution", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "levelOfNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "levelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "mintCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "mintTierOfNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mintToWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mintToWalletPaid", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftPriceOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "openingHour", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pricePaidForId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenToRescue", "type": "address" }], "name": "rescueAnyToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "resetDistributionTimer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardsPool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "arkWallet", "type": "address" }, { "internalType": "bool", "name": "status", "type": "bool" }], "name": "setArkWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "uri", "type": "string" }], "name": "setBaseUri", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "ext", "type": "string" }], "name": "setFileExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "percent", "type": "uint256" }], "name": "setRewardPercentagePerDay", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "shares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "sharesOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tierEnd", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tiersPassed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalContributions", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalMintCredits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRewardsPerShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
                        functionName: 'pricePaidForId',
                        args: [id],
                        chainId: 137,
                    },
                    {
                        address: ca,
                        abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "arkWallet", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "status", "type": "bool" }], "name": "ArkWalletSet", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "oldLevel", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newLevel", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "priceOfLevelUp", "type": "uint256" }], "name": "NftLevelledUp", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "level", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "NftMinted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardsToBeAdded", "type": "uint256" }], "name": "RewardsAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "investor", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "claimableNow", "type": "uint256" }], "name": "RewardsClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardsToBeAdded", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rewardsPerShareToday", "type": "uint256" }], "name": "RewardsDistributed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "ExcludeNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "ReviveNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "penalty", "type": "uint256" }, { "internalType": "uint256", "name": "decay", "type": "uint256" }], "name": "SetBoostValuesOfLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "supply", "type": "uint256" }], "name": "SetMaxSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "timeInSeconds", "type": "uint256" }], "name": "SetRewardsCooldown", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "boost", "type": "uint256" }], "name": "SetTierBoost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "endsAt", "type": "uint256" }], "name": "SetTierEnding", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "passed", "type": "uint256" }], "name": "SetTierPasser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "USDT", "outputs": [{ "internalType": "contract IBEP20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "addMintCredit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "addMintCreditFree", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "usdtAmount", "type": "uint256" }], "name": "addToRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "boostDecayOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "boostPenalyOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "circMintCredits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claimRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "claimRewardsFor", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "claimedRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "consolidateNFTs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "levels", "type": "uint256" }, { "internalType": "uint256", "name": "share", "type": "uint256" }], "name": "createNewLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "dailyRewardPercent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "distributeRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "distributeRewardsManuallyCEO", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "excluded", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getClaimableRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentTier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getLifetimeRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getPriceForLevelUp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isArk", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastDistribution", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "levelOfNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "levelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "mintCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "mintTierOfNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mintToWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mintToWalletPaid", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftPriceOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "openingHour", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pricePaidForId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenToRescue", "type": "address" }], "name": "rescueAnyToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "resetDistributionTimer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardsPool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "arkWallet", "type": "address" }, { "internalType": "bool", "name": "status", "type": "bool" }], "name": "setArkWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "uri", "type": "string" }], "name": "setBaseUri", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "ext", "type": "string" }], "name": "setFileExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "percent", "type": "uint256" }], "name": "setRewardPercentagePerDay", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "shares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "sharesOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tierEnd", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tiersPassed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalContributions", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalMintCredits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRewardsPerShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
                        functionName: 'levelOfNft',
                        args: [id],
                        chainId: 137,
                    },
                    {
                        address: ca,
                        abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "arkWallet", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "status", "type": "bool" }], "name": "ArkWalletSet", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "oldLevel", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newLevel", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "priceOfLevelUp", "type": "uint256" }], "name": "NftLevelledUp", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "level", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "NftMinted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardsToBeAdded", "type": "uint256" }], "name": "RewardsAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "investor", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "claimableNow", "type": "uint256" }], "name": "RewardsClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardsToBeAdded", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rewardsPerShareToday", "type": "uint256" }], "name": "RewardsDistributed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "ExcludeNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "ReviveNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "penalty", "type": "uint256" }, { "internalType": "uint256", "name": "decay", "type": "uint256" }], "name": "SetBoostValuesOfLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "supply", "type": "uint256" }], "name": "SetMaxSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "timeInSeconds", "type": "uint256" }], "name": "SetRewardsCooldown", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "boost", "type": "uint256" }], "name": "SetTierBoost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "endsAt", "type": "uint256" }], "name": "SetTierEnding", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "passed", "type": "uint256" }], "name": "SetTierPasser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "USDT", "outputs": [{ "internalType": "contract IBEP20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "addMintCredit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "addMintCreditFree", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "usdtAmount", "type": "uint256" }], "name": "addToRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "boostDecayOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "boostPenalyOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "circMintCredits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claimRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "claimRewardsFor", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "claimedRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "consolidateNFTs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "levels", "type": "uint256" }, { "internalType": "uint256", "name": "share", "type": "uint256" }], "name": "createNewLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "dailyRewardPercent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "distributeRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "distributeRewardsManuallyCEO", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "excluded", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getClaimableRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentTier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getLifetimeRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getPriceForLevelUp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isArk", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastDistribution", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "levelOfNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "levelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "mintCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "mintTierOfNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mintToWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mintToWalletPaid", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftPriceOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "openingHour", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pricePaidForId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenToRescue", "type": "address" }], "name": "rescueAnyToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "resetDistributionTimer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardsPool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "arkWallet", "type": "address" }, { "internalType": "bool", "name": "status", "type": "bool" }], "name": "setArkWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "uri", "type": "string" }], "name": "setBaseUri", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "ext", "type": "string" }], "name": "setFileExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "percent", "type": "uint256" }], "name": "setRewardPercentagePerDay", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "shares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "sharesOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tierEnd", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tiersPassed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalContributions", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalMintCredits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRewardsPerShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
                        functionName: 'mintTierOfNft',
                        args: [id],
                        chainId: 137,
                    },
                ]
            }).then((data: any) => {
                returnVal.shares = Number(data[0].result) / Math.pow(10, 6);
                returnVal.level = Number(data[1].result);
                returnVal.tier = Number(data[2].result);
            });

            return returnVal;
        }

        async function fetchData() {
            var _data: any = [];
            for (let i in nftBalances) {
                var nftId = Number(nftBalances[i]);
                var nftInfo = await getNFTInfos(nftId);

                var nft = {
                    id: nftId,
                    level: nftInfo.level,
                    value: nftInfo.shares,
                    tier: nftInfo.tier,
                    amount: 1
                };


                _data.push(nft);
            }

            setDataLength(nftBalances.length);
            setData(_data);
        }
        if (nftBalances.length !== dataLength) {
            fetchData();
            ResetSelection();
        }
    }, [nftBalances, nftBalances.length, dataLength]);

    function changeShares(amount = 0, id = 1) {
        setNewNFT(id);
        setLevel(id);
    }

    var expectedTier = "";
    var highestSelectedLevel = -1;
    var highestSelectedId = -1;

    function ResetSelection() {
        setSelectedNfts([]);
        setNftValue(0);
        var agreeBox = document.getElementById("checkAgree") as HTMLInputElement;
        agreeBox.checked = false;
        setData([]);
        setTierSelectData({});
    }

    function selectBlock(id: any, value = 0, tier = 0, level = 0) {
        var item = document.getElementById(`block-${id}`);
        var currentArray = selectedNFTs;
        var total = price - nftValue;
        var selectedTierData = tierSelectData;

        if (item?.classList.contains("active")) {
            item?.classList.remove("active");
            currentArray.splice(currentArray.indexOf(id), 1);
            setNftValue(nftValue - value);
            total += value;
            delete selectedTierData[id];
        } else {
            item?.classList.add("active");
            if (!currentArray.includes(id)) {
                currentArray.push(id);
                setNftValue(nftValue + value);
                total -= value;

                selectedTierData[id] = {
                    tier: tier,
                    level: level
                }
            }
        }

        setTierSelectData(selectedTierData);

        var selectedTier = 0;
        var highestLevel = 0;
        for (let t in tierSelectData) {
            var _tier = tierSelectData[t];

            if (highestLevel < _tier.level) {
                highestLevel = _tier.level;
                selectedTier = _tier.tier;
            } else {
                if (_tier < selectedTier && highestLevel == _tier.level) {
                    selectedTier = _tier.tier;
                }
            }
        }

        selectedTier = selectedTier <= 0 ? currentTier : selectedTier;

        setSelectedTier(selectedTier);

        var agreeBox = document.getElementById("checkAgree") as HTMLInputElement;
        var consoleBtn = document.getElementById("btn-consolidate") as HTMLButtonElement;

        if (currentArray.length >= 2 && total >= 0 && agreeBox.checked) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

        setSelectedNfts(currentArray);
    }

    function EnableButton() {
        var consoleBtn = document.getElementById("btn-consolidate") as HTMLButtonElement;
        var agreeBox = document.getElementById("checkAgree") as HTMLInputElement;
        var _total = price - nftValue;
        if (agreeBox.checked && selectedNFTs.length >= 2 && _total >= 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    const NftBlock = ({
        id,
        value,
        tier,
        level
    }: any) => {
        const styles = {
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(/images/${GetNFTNameByLevel(level).toLowerCase()}.png)`,
            backgroundSize: "contain",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat"
        }

        //if (window.innerWidth < 1000) {
        //    styles.background = "black";
        //}

        var active = "";

        if (selectedNFTs.includes(id)) { active = 'active'; }

        return (
            <div id={`block-${id}`} className={`consolidate-box flex flex-col items-center justify-center md:mx-[0.625rem] mx-1 md:p-5 p-5 px-4 cp ${active}`} style={styles} onClick={() => selectBlock(id, value, tier, level)}>
                <p className='2xl:text-lg md:text-base text-sm text-white-80'>#{id}</p>
                <p className='2xl:text-lg md:text-base text-sm text-white-80'>{GetNFTNameByLevel(level)}</p>
                <p className='2xl:text-lg md:text-base text-sm text-white-80 font-semibold'>Tier {tier}</p>
            </div>
        )
    }

    var listNFTs;

    if (nftData.length > 0) {
        listNFTs = nftData.map((nfts) =>
            <NftBlock key={nfts!["id"]} id={nfts!["id"]} value={nfts!["value"]} level={nfts!["level"]} tier={nfts!["tier"]} />
        );
    } else {
        if (balance <= 0) {
            listNFTs =
                <div className='mx-auto'>
                    <div className='flex flex-row justify-center items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-row items-center'>
                            <p className='md:text-xl text-lg text-white ls-wide lg:ml-10'>NO NFTs FOUND.</p>
                        </div>
                        <p className='md:text-lg text-base text-white-60'></p>
                    </div>
                </div>
        } else {
            listNFTs =
                <div className='mx-auto'>
                    <div className='flex flex-row justify-center items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-col items-center'>
                            <Image alt="ARK connect" loading="lazy" width="45" height="45" decoding="async" data-nimg="1" className="object-fit-contain mb-5 bg-transparent mx-auto" src="/video/loader.gif" />
                            <p className='text-base text-white-60 ls-wide'>LOADING</p>
                        </div>
                        <p className='md:text-lg text-base text-white-60'></p>
                    </div>
                </div>
        }
    }

    var total = price - (nftValue);
    var usedCredit = 0;
    var test = false;
    
    if (total > 0) {
        if (total < credit) {
            usedCredit = total;
        } else {
            usedCredit = credit;
        }
    }
    
    return (
        <ScrollVisibility>
            <div className='flex flex-col w-100 justify-start items-start 2xl:pb-[20vh] lg:pb-[5vh] pb-[100px]'>
                <h2 className="text-white text-center md:tracking-[0.1em]  md:mx-0 mx-3">
                    Consolidate NFTs
                </h2>
                <p className='text-white-60 mb-5 md:mx-0 mx-3'>Select the NFTs you&apos;d like to combine to mint a higher level NFT.</p>
                <hr className='h-[2px] bg-white-25 w-[100%]' />
                <div className='flex md:flex-row flex-col md:mt-5 w-[100%] items-start'>
                    <div className='flex flex-wrap md:items-start items-center text-center justify-start md:w-[50%] w-[100%] p-5'>
                        {listNFTs}
                    </div>
                    <div className='divider h-[100%] min-h-[550px] mt-5 mx-5 md:block hidden'></div>
                    <hr className='w-[100%] md:hidden block' />
                    <div className='flex flex-col md:w-[50%] p-5'>
                        <button className='flex flex-row items-center justify-between dropdown-box px-5 py-3 cp w-[100%]' onClick={() => openDropDown("dropdown-1")}>
                            <Image
                                src={"/images/platinum.png"}
                                width={30}
                                height={50}
                                alt="nft logo"
                                className='mr-5'
                                id="selected-nft"
                            />
                            <h4 className="text-white text-center mx-5 ls-wider" id='nft-text'>PLATINUM</h4>
                        </button>
                        <div id='dropdown-1' className='dropdown w-[100%]'>
                            <DropItem clickEvent={() => changeShares(100, 1)} text={"COPPER"} image={"/images/copper.png"} />
                            <DropItem clickEvent={() => changeShares(250, 2)} text={"TIN"} image={"/images/tin.png"} />
                            <DropItem clickEvent={() => changeShares(500, 3)} text={"BRONZE"} image={"/images/bronze.png"} />
                            <DropItem clickEvent={() => changeShares(1000, 4)} text={"SILVER"} image={"/images/silver.png"} />
                            <DropItem clickEvent={() => changeShares(4000, 5)} text={"GOLD"} image={"/images/gold.png"} />
                            <DropItem clickEvent={() => changeShares(10000, 6)} text={"PLATINUM"} image={"/images/platinum.png"} />
                            <DropItem clickEvent={() => changeShares(50000, 7)} text={"IRIDIUM"} image={"/images/iridium.png"} />
                            <DropItem clickEvent={() => changeShares(100000, 8)} text={"DIAMOND"} image={"/images/diamond.png"} />
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4'>
                            <h5 className='text-white-60'>Mint Credit:</h5>
                            <h5 className='text-white'>${formatter.format(credit)}</h5>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4'>
                            <h5 className='text-white-60'>My USDT:</h5>
                            <h5 className='text-white'>${formatter.format(usdtBalance)}</h5>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4'>
                            <h5 className='text-white-60'>Consolidation Value:</h5>
                            <h5 className='text-activated'>${formatterNoDec.format(nftValue)}</h5>
                        </div>
                        <hr className='my-5' />
                        <div className='flex flex-row justify-between items-center'>
                            <h5 className='text-white-60'>Price:</h5>
                            <h5 className='text-white'>${formatterNoDec.format(price)}</h5>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4'>
                            <h5 className='text-white-60'>Used Credit:</h5>
                            <h5 className='text-danger'>-${formatter.format(usedCredit)}</h5>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4'>
                            <h5 className='text-white-60'>Consolidation:</h5>
                            <h5 className='text-danger'>-${formatterNoDec.format(nftValue)}</h5>
                        </div>
                        <hr className='my-5' />
                        <div className='flex flex-row justify-between items-center'>
                            <h5 className='text-white-60'>To Receive:</h5>
                            <h5 className='text-white'>{GetNFTNameByLevel(level)} Tier {selectedTier}</h5>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4'>
                            <h5 className='text-white-60'>Approved USDT:</h5>
                            <h5 className='text-white'>${formatter.format(approvalBalance)}</h5>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-4'>
                            <h5 className='text-white-60'>To Pay:</h5>
                            <h5 className='text-white'>${formatter.format(price - usedCredit - nftValue)}</h5>
                        </div>
                        
                        <div className='flex flex-row items-center justify-center mt-[100px] w-[100%]'>
                            <input id='checkAgree' type='checkbox' className='checkbox-1' onChange={EnableButton} />
                            <p className='text-white-60 text-center ml-5'>I understand NFTs cannot be recovered after consolidation.</p>
                        </div>                        
                        {
                            (price - usedCredit - nftValue) <= approvalBalance ?
                                <ConsolidateButton address={address} selection={selectedNFTs} targetLevel={level} disable={disabled} usdt={usdtBalance} price={price - usedCredit - nftValue} />
                                :
                                <ApproveButton address={address} amount={(price - usedCredit - nftValue)} />
                        }                        
                    </div>
                </div>
            </div>
        </ScrollVisibility>
    );
};

export default Hero;