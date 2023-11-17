import { useContractRead, readContracts, useContractReads } from 'wagmi'

export const ca = "0x374581111042E96e129D512FC39d023947f93a50";
export const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "arkWallet", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "status", "type": "bool" }], "name": "ArkWalletSet", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "oldLevel", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newLevel", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "priceOfLevelUp", "type": "uint256" }], "name": "NftLevelledUp", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "level", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "NftMinted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardsToBeAdded", "type": "uint256" }], "name": "RewardsAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "investor", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "claimableNow", "type": "uint256" }], "name": "RewardsClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardsToBeAdded", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rewardsPerShareToday", "type": "uint256" }], "name": "RewardsDistributed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "ExcludeNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "ReviveNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "penalty", "type": "uint256" }, { "internalType": "uint256", "name": "decay", "type": "uint256" }], "name": "SetBoostValuesOfLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "supply", "type": "uint256" }], "name": "SetMaxSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "timeInSeconds", "type": "uint256" }], "name": "SetRewardsCooldown", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "boost", "type": "uint256" }], "name": "SetTierBoost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "endsAt", "type": "uint256" }], "name": "SetTierEnding", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "passed", "type": "uint256" }], "name": "SetTierPasser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "USDT", "outputs": [{ "internalType": "contract IBEP20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "addMintCredit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "addMintCreditFree", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "usdtAmount", "type": "uint256" }], "name": "addToRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "boostDecayOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "boostPenalyOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "circMintCredits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claimRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "claimRewardsFor", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "claimedRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "consolidateNFTs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "levels", "type": "uint256" }, { "internalType": "uint256", "name": "share", "type": "uint256" }], "name": "createNewLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "dailyRewardPercent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "distributeRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "distributeRewardsManuallyCEO", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "excluded", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getClaimableRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentTier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getLifetimeRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getPriceForLevelUp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "investor", "type": "address" }], "name": "getShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isArk", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastDistribution", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "levelOfNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "levelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "mintCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "mintTierOfNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mintToWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "level", "type": "uint256" }], "name": "mintToWalletPaid", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftPriceOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "openingHour", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pricePaidForId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenToRescue", "type": "address" }], "name": "rescueAnyToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "resetDistributionTimer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardsPool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "arkWallet", "type": "address" }, { "internalType": "bool", "name": "status", "type": "bool" }], "name": "setArkWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "uri", "type": "string" }], "name": "setBaseUri", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "ext", "type": "string" }], "name": "setFileExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "percent", "type": "uint256" }], "name": "setRewardPercentagePerDay", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "shares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "sharesOfLevel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tierEnd", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tiersPassed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalContributions", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalMintCredits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRewardsPerShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

export function getClaimableRewards(address) {
    try {
        const { data, isError, isLoading } = useContractRead({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: 'getClaimableRewards',
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

export function getMintCredit(address) {
    try {
        const { data, isError, isLoading } = useContractRead({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: 'mintCredit',
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

export function getLifetimeRewards(address) {
    try {
        const { data, isError, isLoading } = useContractRead({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: 'getLifetimeRewards',
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

export function getNFTBalance(address) {
    try {
        const { data, isError, isLoading } = useContractRead({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: 'balanceOf',
            args: [address],
            watch: true
        })

        return Number(data);
    }
    catch (error) {
        console.log(error)
        return 0;
    }
}

export function getMaxSupply() {
    try {
        const { data, isError, isLoading } = useContractRead({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: 'maxSupply',
        })

        return Number(data) / Math.pow(10, 6);
    }
    catch (error) {
        console.log(error);
        return 0;
    }
}

export function getContributions() {
    try {
        const { data, isError, isLoading } = useContractRead({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: 'totalContributions',
        })

        return Number(data) / Math.pow(10, 6);
    }
    catch {
        return 0;
    }
}

export function getTotalShares() {
    try {
        const { data, isError, isLoading } = useContractRead({
            chainId: 56,
            address: '0x6733a95654fF739e6058247Dd7556BF9Ce2dEdf6',
            abi: abi,
            functionName: 'totalShares',
        })

        return Number(data) * 1000;
    }
    catch {
        return 0;
    }
}

export function getSharesOfNft(id) {
    try {
        const { data, isError, isLoading } = readContracts({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: 'shares',
            args: [id]
        })

        return Number(data) / Math.pow(10, 2);
    }
    catch (error) {
        console.log(error);
        return 0;
    }
}

export function getShares(address) {
    try {
        const { data, isError, isLoading } = useContractRead({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: 'getShares',
            args: [address],
            watch: true
        })

        return Number(data) / Math.pow(10, 2);
    }
    catch (error) {
        console.log(error);
        return 0;
    }
}

export function getNFTLevel(id) {
    try {
        const { data, isError, isLoading } = readContracts({
            chainId: 137,
            address: ca,
            abi: abi,
            functionName: 'levelOfNft',
            args: [id],
        })

        return Number(data);
    }
    catch (error) {
        console.log(error);
        return -1;
    }
}

export function getNFTData(address, balance, callback) {
    try {
        var nftData = [];

        for (let i = 0; i < balance; i++) {
            const { data, isError, isLoading } = useContractRead({
                chainId: 137,
                address: ca,
                abi: abi,
                functionName: 'tokenOfOwnerByIndex',
                args: [address, i],
                watch: true
            });
            nftData.push(Number(data));
        }

        return nftData;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}

export function ClaimRewards() {
    const config = usePrepareContractWrite({
        address: ca,
        abi: abi,
        functionName: 'claimRewards'
    });

    const contractWrite = useContractWrite(config.config);
    contractWrite.write();
}
export function GetNFTNameByLevel(level) {
    switch (level) {
        case 1:
            return "Copper";
        case 2:
            return "Tin";
        case 3:
            return "Bronze";
        case 4:
            return "Silver";
        case 5:
            return "Gold";
        case 6:
            return "Platinum";
        case 7:
            return "Iridium";
        case 8:
            return "Diamond";
        case 9:
            return "Unobtainium";
        default:
            return "Unknown";
    }
}

export function GetBoostPercentageByLevelAndTier(level, tier) {
    var boost = 25;
    var decayRate = 0;
    var decayAmount = 0;

    switch (level) {
        case 1:
        case 2:
        case 3:
            decayRate = 0;
            boost -= 25;
            break;
        case 4:
            decayRate = 1;
            boost -= 20;
            break;
        case 5:
            decayRate = 2;
            boost -= 15;
            break;
        case 6:
            decayRate = 3;
            boost -= 10;
            break;
        case 7:
            decayRate = 4;
            boost -= 5;
            break;
        case 8:
            decayRate = 5;
            boost -= 0;
            break;
    }       

    var tiersPassed = 0;
    switch (tier) {
        case 1:
            tiersPassed = 0;
            break;
        case 2:
            tiersPassed = 1;
            break;
        case 3:
            tiersPassed = 2;
            break;
        case 4:
            tiersPassed = 3;
            break;
        case 5:
            tiersPassed = 4;
            break;
        case 6:
            tiersPassed = 5;
            break;
    }

    decayAmount = tiersPassed * decayRate;

    return boost - decayAmount;
}