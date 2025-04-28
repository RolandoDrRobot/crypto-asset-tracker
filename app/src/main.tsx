import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { CryptoSelector } from './components/CryptoSelector'
import { CryptoChart } from './components/CryptoChart'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <div className="app flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Crypto Data Visualization</h1>
        <CryptoSelector />
        <CryptoChart />
      </div>
    </Provider>
  </StrictMode>,
)
