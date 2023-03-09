import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import campaignReducer from '../features/campaign/campaignSlice'

const logger = createLogger()

const store = configureStore({
  reducer: {
    campaign: campaignReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
