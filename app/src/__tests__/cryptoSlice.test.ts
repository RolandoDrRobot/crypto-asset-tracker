import cryptoReducer, { setSelectedAssets } from '../redux/cryptoSlice'

describe('cryptoSlice', () => {
  it('should handle setting selected assets', () => {
    const initialState = {
      selectedAssets: [],
    }

    const action = setSelectedAssets(['bitcoin', 'ethereum'])
    const newState = cryptoReducer(initialState, action)

    expect(newState.selectedAssets).toEqual(['bitcoin', 'ethereum'])
  })
})
