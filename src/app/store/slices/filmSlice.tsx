import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface film {
  title: string
  url: string
}

interface filmsState{
  data: film[]
  count: number
  loading: boolean
  page: number
}

const initialState: filmsState= {
  data: [],
  count: 0,
  loading: false,
  page: 1,
}

export const fetchData = createAsyncThunk(
  'films/fetchData',
  async (page: number, thunkAPI) => {
    try {
      const res = await axios.get(`/api/films?page=${page}`)
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue((err as any)?.message || 'Unknown error')
    }
  }
)




const filmsSlice = createSlice({
  name: 'films',
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

export const { setPage } = filmsSlice.actions
export default filmsSlice.reducer
