import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface Planet {
  name: string
  url: string
}

interface PlanetsState {
  data: Planet[]
  count: number
  loading: boolean
  page: number
}

const initialState: PlanetsState = {
  data: [],
  count: 0,
  loading: false,
  page: 1,
}

export const fetchData = createAsyncThunk(
  'planets/fetchData',
  async (page: number, thunkAPI) => {
    try {
      const res = await axios.get(`/api/planets?page=${page}`)
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue((err as any)?.message || 'Unknown error')
    }
  }
)




const planetsSlice = createSlice({
  name: 'planets',
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

export const { setPage } = planetsSlice.actions
export default planetsSlice.reducer
