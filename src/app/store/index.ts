import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './slices/characterSlice'
import planetsReducer from './slices/planetsSlice'
import starshipsReducer from './slices/starshipsSlice'
export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    planets:planetsReducer,
    starships:starshipsReducer,
    // planets, films, etc.
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
