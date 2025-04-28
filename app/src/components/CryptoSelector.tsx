import { useDispatch } from 'react-redux'
import { setSelectedAssets } from '../redux/cryptoSlice'

const assets = [
  { id: 'bitcoin', name: 'Bitcoin (BTC)' },
  { id: 'ethereum', name: 'Ethereum (ETH)' },
  { id: 'solana', name: 'Solana (SOL)' },
]

export function CryptoSelector() {
  const dispatch = useDispatch()

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value)
    dispatch(setSelectedAssets(selectedOptions))
  }

  return (
    <div>
      <label className="text-lg font-medium">Select Crypto Asset(s):</label>
      <select onChange={handleChange} className="ml-4 p-2 rounded border" multiple>
        {assets.map(asset => (
          <option key={asset.id} value={asset.id}>
            {asset.name}
          </option>
        ))}
      </select>
      <p className="text-sm text-gray-500 mt-2">Hold Ctrl (Windows) or Cmd (Mac) to select two assets.</p>
    </div>
  )
}
