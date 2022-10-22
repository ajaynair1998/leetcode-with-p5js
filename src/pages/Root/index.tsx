import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import ColorTabs from '../../components/Tabs'

export default function Root() {
  return (
    <React.Fragment>
      <Navbar />
      <ColorTabs items={TABITEMS} />
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
