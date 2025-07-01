import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface Starship {
  name: string
  url: string
}

interface StarshipState {
  data: Starship[]
  count: number
  loading: boolean
  page: number
}

const initialState: StarshipState = {
  data: [],
  count: 0,
  loading: false,
  page: 1,
}

export const fetchData = createAsyncThunk(
  'starships/fetchData',
  async (page: number, thunkAPI) => {
    try {
      const res = await axios.get(`/api/starships/?page=${page}`)
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue((err as any)?.message || 'Unknown error')
    }
  }
)




const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.results
        state.count = action.payload.count
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { setPage } = starshipsSlice.actions
export default starshipsSlice.reducer
