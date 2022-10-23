import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

export default function Root() {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  )
}
