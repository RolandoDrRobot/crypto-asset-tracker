import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useCryptoData } from '../hooks/useCryptoData'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

export function CryptoChart() {
  const selectedAsset = useSelector((state: RootState) => state.crypto.selectedAsset)
  const { data, loading } = useCryptoData(selectedAsset)

  if (!selectedAsset) return <div>Select a crypto asset to view data.</div>
  if (loading) return <div>Loading data...</div>

  return (
    <div className="w-full max-w-4xl h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
