import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import appStateReducer from './Reducers/appStateReducer'

export default configureStore({
  reducer: {
    applicationStateStore: appStateReducer,
  },
  //   use the below one for loggin current state too
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }).concat(logger),
})
