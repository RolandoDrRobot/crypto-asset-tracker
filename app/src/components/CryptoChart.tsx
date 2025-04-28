import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useState, useEffect } from 'react'
import { useCryptoData } from '../hooks/useCryptoData'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

export function CryptoChart() {
  const selectedAsset = useSelector((state: RootState) => state.crypto.selectedAsset)
  const [timeFrame, setTimeFrame] = useState<'7' | '30' | '365'>('7')
  const { data, loading } = useCryptoData(selectedAsset, timeFrame)

  const [comparisonData, setComparisonData] = useState<any>([])
  const { data: comparisonDataWeek } = useCryptoData(selectedAsset, '7')
  const { data: comparisonDataMonth } = useCryptoData(selectedAsset, '30')
  const { data: comparisonDataYear } = useCryptoData(selectedAsset, '365')

  useEffect(() => {
    if (comparisonDataWeek && comparisonDataMonth && comparisonDataYear) {
      setComparisonData({
        week: comparisonDataWeek,
        month: comparisonDataMonth,
        year: comparisonDataYear,
      })
    }
  }, [comparisonDataWeek, comparisonDataMonth, comparisonDataYear])

  if (!selectedAsset) return <div>Select a crypto asset to view data.</div>
  if (loading) return <div>Loading data...</div>

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
