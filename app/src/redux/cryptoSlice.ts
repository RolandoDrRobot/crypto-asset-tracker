import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CryptoState {
  selectedAsset: string
}

const initialState: CryptoState = {
  selectedAsset: '',
}

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setSelectedAsset(state, action: PayloadAction<string>) {
      state.selectedAsset = action.payload
    },
  },
})

export const { setSelectedAsset } = cryptoSlice.actions
export default cryptoSlice.reducer
