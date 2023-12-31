'use client';

import Image from "next/image";
import { ca } from "@/scripts/legacy";
import { formatterNoDec } from "../../../scripts/home";
import { GetNFTNameByLevel } from "../../../scripts/legacy";
import { useEffect, useState } from "react";
import { readContracts, readContract } from '@wagmi/core'

const HomeStatsModal = ({
    id,
    closeEvent,
    pendingRewards = 0,
    claimedRewards = 0,
    credit = 0,
    balance = 0,
    shares = 0,
    nftsInWallet
}: any) => {
    const [nftData, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);
    var totalWorth = 0;

    useEffect(() => {
        var _data: any = {};
        async function getNFTInfos(id: number) {
            var returnVal = {
                shares: 0,
                level: 0
            }

            const multiData: any = await readContracts({
                contracts: [
                    {
                        address: ca,
                        abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "arkWallet", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "status", "type": "bool" }], "name": "ArkWalletSet", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "oldLevel", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newLevel", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "priceOfLevelUp", "type": "uint256" }], "name": "NftLevelledUp", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "level", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "NftMinted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardsToBeAdded", "type": "uint256" }], "name": "RewardsAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "investor", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "claimableNow", "type": "uint256" }], "name": "RewardsClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardsToBeAdded", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rewardsPerShareToday", "type": "uint256" }], "name": "RewardsDistributed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "ExcludeNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "ReviveNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "penalty", "type": "uint256" }, { "internalType": "uint256", "name": "decay", "type": "uint256" }], "name": "SetBoostValuesOfLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "supply", "type": "uint256" }], "name": "SetMaxSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "timeInSeconds", "type": "uint256" }], "name": "SetRewardsCooldown", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "boost", "type": "uint256" }], "name": "SetTierBoost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "endsAt", "type": "uint256" }], "name": "SetTierEnding", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "passed", "type": "uint256" }], "name": "SetTierPasser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "USDT", "outputs": [{ "internalType": "contract IBEP20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "addMintCredit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "addMintCreditFree", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "usdtAmount", "type": "uint256" }], "name": "addToRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "boostDecayOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "boostPenalyOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "circMintCredits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claimRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "claimRewardsFor", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "claimedRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "consolidateNFTs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "levels", "type": "uint256" }, { "internalType": "uint256", "name": "share", "type": "uint256" }], "name": "createNewLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "dailyRewardPercent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "distributeRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "distributeRewardsManuallyCEO", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "excluded", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getClaimableRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentTier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getLifetimeRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getPriceForLevelUp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isArk", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastDistribution", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "levelOfNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "levelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "mintCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "mintTierOfNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mintToWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mintToWalletPaid", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftPriceOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "openingHour", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pricePaidForId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenToRescue", "type": "address" }], "name": "rescueAnyToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "resetDistributionTimer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardsPool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "arkWallet", "type": "address" }, { "internalType": "bool", "name": "status", "type": "bool" }], "name": "setArkWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "uri", "type": "string" }], "name": "setBaseUri", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "ext", "type": "string" }], "name": "setFileExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "percent", "type": "uint256" }], "name": "setRewardPercentagePerDay", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "shares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "sharesOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tierEnd", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tiersPassed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalContributions", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalMintCredits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRewardsPerShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
                        functionName: 'shares',
                        args: [id],
                        chainId: 137,
                    },
                    {
                        address: ca,
                        abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "arkWallet", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "status", "type": "bool" }], "name": "ArkWalletSet", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "oldLevel", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newLevel", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "priceOfLevelUp", "type": "uint256" }], "name": "NftLevelledUp", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "level", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "NftMinted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardsToBeAdded", "type": "uint256" }], "name": "RewardsAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "investor", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "claimableNow", "type": "uint256" }], "name": "RewardsClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardsToBeAdded", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rewardsPerShareToday", "type": "uint256" }], "name": "RewardsDistributed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "ExcludeNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "ReviveNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "penalty", "type": "uint256" }, { "internalType": "uint256", "name": "decay", "type": "uint256" }], "name": "SetBoostValuesOfLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "supply", "type": "uint256" }], "name": "SetMaxSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "timeInSeconds", "type": "uint256" }], "name": "SetRewardsCooldown", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "boost", "type": "uint256" }], "name": "SetTierBoost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "endsAt", "type": "uint256" }], "name": "SetTierEnding", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "passed", "type": "uint256" }], "name": "SetTierPasser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "USDT", "outputs": [{ "internalType": "contract IBEP20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "addMintCredit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "addMintCreditFree", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "usdtAmount", "type": "uint256" }], "name": "addToRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "boostDecayOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "boostPenalyOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "circMintCredits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claimRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "claimRewardsFor", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "claimedRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "consolidateNFTs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "levels", "type": "uint256" }, { "internalType": "uint256", "name": "share", "type": "uint256" }], "name": "createNewLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "dailyRewardPercent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "distributeRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "distributeRewardsManuallyCEO", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "excluded", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getClaimableRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentTier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getLifetimeRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getPriceForLevelUp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isArk", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastDistribution", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "levelOfNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "levelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "mintCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "mintTierOfNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mintToWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mintToWalletPaid", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftPriceOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "openingHour", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pricePaidForId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenToRescue", "type": "address" }], "name": "rescueAnyToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "resetDistributionTimer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardsPool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "arkWallet", "type": "address" }, { "internalType": "bool", "name": "status", "type": "bool" }], "name": "setArkWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "uri", "type": "string" }], "name": "setBaseUri", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "ext", "type": "string" }], "name": "setFileExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "percent", "type": "uint256" }], "name": "setRewardPercentagePerDay", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "shares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "sharesOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tierEnd", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tiersPassed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalContributions", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalMintCredits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRewardsPerShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
                        functionName: 'levelOfNft',
                        args: [id],
                        chainId: 137,
                    }
                ]
            }).then((data: any) => {
                returnVal.shares = Number(data[0].result) / Math.pow(10, 2);
                returnVal.level = Number(data[1].result);
            });

            return returnVal;
        }

        async function fetchData() {
            var _data: any = {};
            for (let i in nftsInWallet) {
                var nftId = Number(nftsInWallet[i]);
                var nftInfo = await getNFTInfos(nftId);

                var nft = {
                    id: nftId,
                    level: nftInfo.level,
                    value: nftInfo.shares,
                    amount: 1
                };


                if (_data[nftInfo.level] === undefined) {
                    _data[nftInfo.level] = nft;
                } else {
                    _data![nftInfo.level].value += nft.value
                    _data![nftInfo.level].amount++;
                }

            }
            var dataArray: any = [];

            for (let i in _data) {
                dataArray.push(_data[i]);
            }

            setDataLength(nftsInWallet.length);
            setData(dataArray);
        }
        
        if (nftsInWallet.length !== dataLength) {
            console.log("test");
            fetchData();
        }
    }, [nftsInWallet, dataLength])

    totalWorth += claimedRewards;
    totalWorth += shares;
    totalWorth += credit;

    var listNFTs = null;

    if (nftData.length > 0) {
        listNFTs = nftData.map((nfts) =>
            <div key={nfts!["id"]}>
                <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4'>
                    <div className='flex flex-row items-center'>
                        <Image
                            src={`/images/${GetNFTNameByLevel(nfts!["level"]).toLowerCase()}.png`}
                            width={30}
                            height={50}
                            alt="nft logo"
                            className='md:mr-5 mr-4 md:max-h-[50px] max-h-[30px] md:max-w-[30px] max-w-[20px]'
                        />
                        <p className='md:text-lg md:text-base text-sm text-white ls-wide lg:ml-10'>{nfts!["amount"]} {GetNFTNameByLevel(nfts!["level"]).toUpperCase()}{nfts!["amount"] > 1 ? "S" : ""}</p>
                    </div>
                    <p className='md:text-lg md:text-base text-sm text-white-60'>${formatterNoDec.format(nfts!["value"])}</p>
                </div>
                <hr />
            </div>
        );
    } else {
        if (balance <= 0) {
            var extraHtml = <></>
            if (claimedRewards > 0) {
                extraHtml =
                    <div>
                        <hr />
                        <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4'>
                            <div className='flex flex-row items-center'>
                                <Image
                                    src={"/icons/tab_vault.png"}
                                    width={30}
                                    height={50}
                                    alt="nft logo"
                                    className='md:mr-5 mr-4 md:max-h-[50px] max-h-[30px] md:max-w-[30px] max-w-[20px]'
                                />
                                <p className='md:text-lg md:text-base text-sm text-white lg:ls-widest ls-wide lg:ml-10'>CLAIMED REWARDS</p>
                            </div>
                            <p className='md:text-lg md:text-base text-sm text-white-60'>${formatterNoDec.format(claimedRewards - pendingRewards)}</p>
                        </div>
                        <hr />
                        <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4 pb-5'>
                            <div className='flex flex-row items-center'>
                                <Image
                                    src={"/icons/ark_a.svg"}
                                    width={30}
                                    height={50}
                                    alt="nft logo"
                                    className='md:mr-5 mr-4 md:max-h-[50px] max-h-[30px] md:max-w-[30px] max-w-[20px]'
                                />
                                <p className='md:text-lg md:text-base text-sm text-white lg:ls-widest ls-wide lg:ml-10'>TOTAL WORTH</p>
                            </div>
                            <p className='md:text-lg md:text-base text-sm text-white-60'>${formatterNoDec.format(totalWorth)}</p>
                        </div>
                    </div>;
            }
            return (
                <div className='modal-overlay' id={id + "overlay"}>
                    <div className="modal" id={id}>
                        <div className='flex flex-row justify-between lg:items-start items-center w-100 h-[7.5%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                            <h4 className='text-white'>My Account</h4>
                            <button className='text-white font-semibold text-2xl x-btn' onClick={closeEvent}>X</button>
                        </div>
                        <div className='flex flex-col h-[92.5%] w-[100%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                            <hr />
                            <div className='flex flex-row justify-center items-center 2xl:my-5  sm:my-3 my-4'>                            
                                <div className='flex flex-row items-center'>
                                    <p className={`md:text-lg md:text-base text-sm text-white ls-wide lg:ml-10 ${claimedRewards <= 0 ? "mt-10" : "my-5"}`}>NO NFTs FOUND.</p>
                                </div>                                
                                <p className='md:text-lg md:text-base text-sm text-white-60'></p>
                            </div>
                            {extraHtml}
                        </div>
                    </div>
                </div>);
        } else {
            listNFTs =
                <div>
                    <div className='flex flex-row justify-center items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-col items-center'>
                            <Image alt="ARK connect" loading="lazy" width="35" height="35" decoding="async" data-nimg="1" className="object-fit-contain mb-5 bg-transparent mx-auto" src="/video/loader.gif" />
                            <p className='text-sm text-white-60 ls-wide'>LOADING</p>
                        </div>
                        <p className='md:text-lg md:text-base text-sm text-white-60'></p>
                    </div>
                    <hr />
                </div>
        }
    }

    return (
        <div className='modal-overlay' id={id + "overlay"}>
            <div className="modal" id={id}>
                <div className='flex flex-row justify-between lg:items-start items-center w-100 h-[7.5%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <h4 className='text-white'>My Account</h4>
                    <button className='text-white font-semibold text-2xl x-btn' onClick={closeEvent}>X</button>
                </div>
                <div className='flex flex-col h-[92.5%] w-[100%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <hr />
                    {listNFTs}
                    <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-row items-center'>
                            <Image
                                src={"/icons/spark_lottery.png"}
                                width={30}
                                height={50}
                                alt="nft logo"
                                className='md:mr-5 mr-4 md:max-h-[50px] max-h-[30px] md:max-w-[30px] max-w-[20px]'
                            />
                            <p className='md:text-lg md:text-base text-sm text-white lg:ls-widest ls-wide lg:ml-10'>MINT CREDIT</p>
                        </div>
                        <p className='md:text-lg md:text-base text-sm text-white-60'>${formatterNoDec.format(credit)}</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-row items-center'>
                            <Image
                                src={"/icons/tab_foundation.png"}
                                width={30}
                                height={50}
                                alt="nft logo"
                                className='md:mr-5 mr-4 md:max-h-[50px] max-h-[30px] md:max-w-[30px] max-w-[20px] contract-200'
                            />
                            <p className='md:text-lg md:text-base text-sm text-white lg:ls-widest ls-wide lg:ml-10'>PENDING REWARDS</p>
                        </div>
                        <p className='md:text-lg md:text-base text-sm text-white-60'>${formatterNoDec.format(pendingRewards)}</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4'>
                        <div className='flex flex-row items-center'>
                            <Image
                                src={"/icons/tab_vault.png"}
                                width={30}
                                height={50}
                                alt="nft logo"
                                className='md:mr-5 mr-4 md:max-h-[50px] max-h-[30px] md:max-w-[30px] max-w-[20px]'
                            />
                            <p className='md:text-lg md:text-base text-sm text-white lg:ls-widest ls-wide lg:ml-10'>CLAIMED REWARDS</p>
                        </div>
                        <p className='md:text-lg md:text-base text-sm text-white-60'>${formatterNoDec.format(claimedRewards - pendingRewards)}</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4 pb-5'>
                        <div className='flex flex-row items-center'>
                            <Image
                                src={"/icons/ark_a.svg"}
                                width={30}
                                height={50}
                                alt="nft logo"
                                className='md:mr-5 mr-4 md:max-h-[50px] max-h-[30px] md:max-w-[30px] max-w-[20px]'
                            />
                            <p className='md:text-lg md:text-base text-sm text-white lg:ls-widest ls-wide lg:ml-10'>ACCOUNT VALUE</p>
                        </div>
                        <p className='md:text-lg md:text-base text-sm text-white-60'>${formatterNoDec.format(totalWorth)}</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default HomeStatsModal;