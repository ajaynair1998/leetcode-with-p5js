import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import ColorTabs from '../../components/Tabs'
import { setDrawerState } from '../../configs/Redux/Reducers/appStateReducer'

const Home = () => {
  const dispatch = useDispatch()
  const handleClickTab = (value: string) => {
    dispatch(setDrawerState(true))
  }
  return (
    <React.Fragment>
      <ColorTabs items={TABITEMS} handleClickTab={handleClickTab} />
      <Outlet />
    </React.Fragment>
  )
}
const TABITEMS = [
  {
    value: 'array',
    label: 'Array',
    action: () => console.log('pressed array'),
  },
  {
    value: 'stack',
    label: 'Stack',
    action: () => console.log('pressed stack'),
  },
]

export default Home
