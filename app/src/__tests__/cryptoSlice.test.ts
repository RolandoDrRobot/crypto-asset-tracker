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

  it('should handle setting an empty array of selected assets', () => {
    const initialState = {
      selectedAssets: ['bitcoin', 'ethereum'],
    }

    const action = setSelectedAssets([])
    const newState = cryptoReducer(initialState, action)

    expect(newState.selectedAssets).toEqual([])
  })

  it('should replace existing selected assets with new ones', () => {
    const initialState = {
      selectedAssets: ['bitcoin'],
    }

    const action = setSelectedAssets(['ethereum', 'solana'])
    const newState = cryptoReducer(initialState, action)

    expect(newState.selectedAssets).toEqual(['ethereum', 'solana'])
  })

  it('should not mutate the original state', () => {
    const initialState = {
      selectedAssets: ['bitcoin'],
    }

    const action = setSelectedAssets(['ethereum'])
    const newState = cryptoReducer(initialState, action)

    expect(newState).not.toBe(initialState)
    expect(initialState.selectedAssets).toEqual(['bitcoin'])
  })
})
