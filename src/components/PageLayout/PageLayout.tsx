'use client'
import React from 'react'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'
import { polygon } from 'wagmi/chains'

const { chains, publicClient } = configureChains(
  [ polygon ],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: 'https://rpc.ankr.com/polygon',
      }),
    }),
    publicProvider()
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'JuicyBet',
  projectId: 'e28d0f6d5016db276839604d38ffcff2',
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
