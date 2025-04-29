import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { CryptoSelector } from '../components/CryptoSelector'

jest.mock('../redux/cryptoSlice', () => ({
  setSelectedAssets: jest.fn(),
}))

const mockStore = configureStore([])

describe('CryptoSelector', () => {
  let store: ReturnType<typeof mockStore>

  beforeEach(() => {
    store = mockStore({})
    jest.clearAllMocks()
  })

  it('renders the crypto selector with all options', () => {
    render(
      <Provider store={store}>
        <CryptoSelector />
      </Provider>
    )

    expect(screen.getByText('Select Crypto Asset(s):')).toBeInTheDocument()
    expect(screen.getByText('Bitcoin (BTC)')).toBeInTheDocument()
    expect(screen.getByText('Ethereum (ETH)')).toBeInTheDocument()
    expect(screen.getByText('Solana (SOL)')).toBeInTheDocument()
  })

  it('renders the helper text for selecting multiple assets', () => {
    render(
      <Provider store={store}>
        <CryptoSelector />
      </Provider>
    )

    expect(
      screen.getByText('Hold Ctrl (Windows) or Cmd (Mac) to select two assets.')
    ).toBeInTheDocument()
  })
})
