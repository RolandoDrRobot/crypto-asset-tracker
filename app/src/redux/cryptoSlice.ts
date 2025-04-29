import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CryptoState {
  selectedAssets: string[]
}

const initialState: CryptoState = {
  selectedAssets: [],
}

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setSelectedAssets(state, action: PayloadAction<string[]>) {
      state.selectedAssets = action.payload
    },
  },
})

export const { setSelectedAssets } = cryptoSlice.actions
export default cryptoSlice.reducer
