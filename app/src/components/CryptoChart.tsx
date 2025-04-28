import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useState } from 'react'
import { useCryptoData } from '../hooks/useCryptoData'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

export function CryptoChart() {
  const selectedAssets = useSelector((state: RootState) => state.crypto.selectedAssets)
  const [timeFrame, setTimeFrame] = useState<'7' | '30' | '365'>('7')

  const { data: data1, loading: loading1 } = useCryptoData(selectedAssets[0], timeFrame)
  const { data: data2, loading: loading2 } = useCryptoData(selectedAssets[1], timeFrame)

  if (selectedAssets.length === 0) return <div>Select at least one crypto asset to view data.</div>
  if (loading1 || (selectedAssets[1] && loading2)) return <div>Loading data...</div>

  // Fusionar los datos por fecha
  const mergedData = (data1 || []).map((item, index) => ({
    date: item.date,
    price1: item.price,
    price2: data2?.[index]?.price ?? null,
  }))

  return (
    <div className="w-full max-w-4xl h-96">
      <div className="mb-4">
        <label className="text-lg font-medium">Select Timeframe:</label>
        <select
          className="ml-4 p-2 rounded border"
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value as '7' | '30' | '365')}
        >
          <option value="7">Week</option>
          <option value="30">Month</option>
          <option value="365">Year</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mergedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="price1" stroke="#8884d8" strokeWidth={2} name={selectedAssets[0]} />
          {selectedAssets[1] && (
            <Line type="monotone" dataKey="price2" stroke="#82ca9d" strokeWidth={2} name={selectedAssets[1]} />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
