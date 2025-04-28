import axios from 'axios'

export async function fetchCryptoData(assetId: string, days: string) {
  const url = `https://api.coingecko.com/api/v3/coins/${assetId}/market_chart?vs_currency=usd&days=${days}`
  const response = await axios.get(url)

  const prices = response.data.prices

  return prices.map(([timestamp, price]: [number, number]) => ({
    date: new Date(timestamp).toLocaleDateString(),
    price,
  }))
}
