import { render, waitFor } from '@testing-library/react'
import { useCryptoData } from '../hooks/useCryptoData'
import { fetchCryptoData } from '../services/cryptoService'
import React from 'react'

jest.mock('../services/cryptoService')

function TestComponent({ assetId, days }: { assetId: string; days: string }) {
  const { data, loading } = useCryptoData(assetId, days)
  return (
    <div>
      <div data-testid="loading">{loading ? 'true' : 'false'}</div>
      <div data-testid="data">{JSON.stringify(data)}</div>
    </div>
  )
}

describe('useCryptoData', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
  })

  it('should return initial state', () => {
    const { getByTestId } = render(<TestComponent assetId="" days="7" />)
    expect(getByTestId('loading').textContent).toBe('false')
    expect(getByTestId('data').textContent).toBe('[]')
  })

  it('should fetch data and update state', async () => {
    const mockData = [{ date: '2023-01-01', price: 50000 }]
    ;(fetchCryptoData as jest.Mock).mockResolvedValue(mockData)

    const { getByTestId } = render(<TestComponent assetId="bitcoin" days="7" />)

    expect(getByTestId('loading').textContent).toBe('true')

    await waitFor(() => {
      expect(getByTestId('loading').textContent).toBe('false')
      expect(getByTestId('data').textContent).toBe(JSON.stringify(mockData))
    })

    expect(fetchCryptoData).toHaveBeenCalledWith('bitcoin', '7')
  })

  it('should use cached data if available', () => {
    const cachedData = [{ date: '2023-01-01', price: 50000 }]
    localStorage.setItem('crypto_bitcoin_7', JSON.stringify(cachedData))

    const { getByTestId } = render(<TestComponent assetId="bitcoin" days="7" />)

    expect(getByTestId('loading').textContent).toBe('false')
    expect(getByTestId('data').textContent).toBe(JSON.stringify(cachedData))
    expect(fetchCryptoData).not.toHaveBeenCalled()
  })

  it('should not fetch data if assetId is empty', () => {
    const { getByTestId } = render(<TestComponent assetId="" days="7" />)

    expect(getByTestId('loading').textContent).toBe('false')
    expect(getByTestId('data').textContent).toBe('[]')
    expect(fetchCryptoData).not.toHaveBeenCalled()
  })
})
