import { useMetaMask } from '../hooks/useMetamask'

export function MetaMaskConnector() {
  const { account, connectWallet, error } = useMetaMask()

  return (
    <div className="metamask-connector">
      {account ? (
        <p className="text-green-600">Connected: {account}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Connect MetaMask
        </button>
      )}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  )
}
