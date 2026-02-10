"use client"

import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, polygon } from '@reown/appkit/networks'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppKitNetwork } from '@reown/appkit/networks'

const queryClient = new QueryClient()

//Meu PROJECT ID, CASO QUEIRA FAZER TESTES, CRIE O SEU EM https://dashboard.reown.com
const projectId = '67beb8542a12087aaf1d1c2c300951d2'

const networks = [mainnet, polygon] as [AppKitNetwork, ...AppKitNetwork[]]

// 3. Criar o Adaptador Wagmi
const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

// 4. Inicializar o AppKit 
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  features: { 
    analytics: true,
    email: true, // Habilita login por email (opcional)
    socials: ['google', 'x', 'github'], // Habilita redes sociais (opcional)
  },
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': '#10B981', // Cor Esmeralda para o modal
    '--w3m-border-radius-master': '20px'
  }
})

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}