import { useDispatch } from 'react-redux'
import { setSelectedAsset } from '../redux/cryptoSlice'

const assets = [
  { id: 'bitcoin', name: 'Bitcoin (BTC)' },
  { id: 'ethereum', name: 'Ethereum (ETH)' },
  { id: 'solana', name: 'Solana (SOL)' },
]

export function CryptoSelector() {
  const dispatch = useDispatch()

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setSelectedAsset(e.target.value))
  }

  return (
    <div>
      <label className="text-lg font-medium">Select Crypto Asset:</label>
      <select onChange={handleChange} className="ml-4 p-2 rounded border">
        <option value="">Select...</option>
        {assets.map(asset => (
          <option key={asset.id} value={asset.id}>
            {asset.name}
          </option>
        ))}
      </select>
    </div>
  )
}
