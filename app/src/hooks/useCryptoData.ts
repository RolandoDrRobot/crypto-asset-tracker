import { useEffect, useState } from 'react'
import { fetchCryptoData } from '../services/cryptoService'

interface DataPoint {
  date: string
  price: number
}

export function useCryptoData(assetId: string) {
  const [data, setData] = useState<DataPoint[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!assetId) return

    async function loadData() {
      setLoading(true)

      const cached = localStorage.getItem(`crypto_${assetId}`)
      if (cached) {
        setData(JSON.parse(cached))
        setLoading(false)
        return
      }

      const fetchedData = await fetchCryptoData(assetId)
      setData(fetchedData)
      localStorage.setItem(`crypto_${assetId}`, JSON.stringify(fetchedData))
      setLoading(false)
    }

    loadData()
  }, [assetId])

  return { data, loading }
}
