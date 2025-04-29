import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { CryptoChart } from '../components/CryptoChart'
import { useCryptoData } from '../hooks/useCryptoData'
import React from 'react'

jest.mock('../hooks/useCryptoData')

jest.mock('recharts', () => {
  const OriginalRecharts = jest.requireActual('recharts')
  return {
    ...OriginalRecharts,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  }
})

const mockStore = configureStore([])

describe('CryptoChart', () => {
  beforeEach(() => {
    (useCryptoData as jest.Mock).mockReturnValue({ data: [], loading: false })
  })

  it('renders message when no assets are selected', () => {
    const store = mockStore({ crypto: { selectedAssets: [] } })
    render(
      <Provider store={store}>
        <CryptoChart />
      </Provider>
    )
    expect(screen.getByText('Select at least one crypto asset to view data.')).toBeInTheDocument()
  })

  it('renders loading message when data is being fetched', () => {
    const store = mockStore({ crypto: { selectedAssets: ['BTC'] } })
    ;(useCryptoData as jest.Mock).mockReturnValue({ data: null, loading: true })

    render(
      <Provider store={store}>
        <CryptoChart />
      </Provider>
    )
    expect(screen.getByText('Loading data...')).toBeInTheDocument()
  })

  it('updates timeframe when dropdown is changed', () => {
    const store = mockStore({ crypto: { selectedAssets: ['BTC'] } })
    ;(useCryptoData as jest.Mock).mockReturnValue({ data: [], loading: false })

    render(
      <Provider store={store}>
        <CryptoChart />
      </Provider>
    )

    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: '30' } })
    expect((select as HTMLSelectElement).value).toBe('30')
  })
})
