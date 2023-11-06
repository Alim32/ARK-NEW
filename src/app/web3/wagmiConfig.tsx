import { createWeb3Modal, defaultWagmiConfig, useWeb3Modal } from '@web3modal/wagmi/react'
import { polygon, bsc, mainnet } from 'wagmi/chains';

// 1. Get projectId
const projectId = '85105765a0ea5fc7fe8263dace38cea9'

// 2. Create wagmiConfig
const w3meta = {
    name: 'Web3Modal',
    description: 'Web3Modal ARK',
    url: 'https://web3modal.com',
    icons: ['']
}

const chains = [mainnet, polygon, bsc]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: w3meta })

// 3. Create modal
createWeb3Modal({
    wagmiConfig, projectId, chains,
    themeMode: "dark",
    themeVariables: {
        '--w3m-font-family': 'Montserrat, sans-serif',
        '--w3m-accent': '#756aec',
    }
})


export default  wagmiConfig;