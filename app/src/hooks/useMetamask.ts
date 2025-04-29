import { useState, useEffect } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

export function useMetaMask() {
  const [account, setAccount] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function checkMetaMask() {
      const provider: any = await detectEthereumProvider()
      if (provider) {
        const accounts = await provider.request({ method: 'eth_accounts' })
        if (accounts.length > 0) {
          setAccount(accounts[0])
        }
      } else {
        setError('MetaMask no está instalado.')
      }
    }
    checkMetaMask()
  }, [])

  async function connectWallet() {
    try {
      const provider: any = await detectEthereumProvider()
      if (provider) {
        const accounts = await provider.request({ method: 'eth_requestAccounts' })
        setAccount(accounts[0])
      } else {
        setError('MetaMask no está instalado.')
      }
    } catch (err: any) {
      setError(err.message)
    }
  }

  return { account, connectWallet, error }
}
