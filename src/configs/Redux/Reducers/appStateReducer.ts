import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IApplicationState } from '../../../helpers'

export const AppStateDataSlice = createSlice({
  name: 'applicationData',
  initialState: {
    data: {
      drawerOpen: false,
    },
  },
  reducers: {
    setDrawerState: (state: IApplicationState, action: PayloadAction<boolean>) => {
      state.data.drawerOpen = action.payload
    },
  },
})

export const { setDrawerState } = AppStateDataSlice.actions
export default AppStateDataSlice.reducer
