import React from 'react'
import { Container } from '@mui/material'
import PermanentDrawer from '../../components/Drawer'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../helpers'
import { setDrawerState } from '../../configs/Redux/Reducers/appStateReducer'

const Array = () => {
  const dispatch = useDispatch()
  const isDrawerOpen = useSelector((state: IStore) => state.applicationStateStore.data.drawerOpen)

  const handleCloseDrawer = () => {
    dispatch(setDrawerState(false))
  }
  return (
    <Container maxWidth={'xl'}>
      <PermanentDrawer open={isDrawerOpen} handleClose={handleCloseDrawer} items={ITEMS} />
    </Container>
  )
}
const ITEMS = [{ value: 'binarysearch', label: 'Binary Search' }]
export default Array
