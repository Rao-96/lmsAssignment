import { Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <Typography
    component="h2"
    variant="h5"
    color="primary"
    gutterBottom
    sx={{ fontWeight: "bold" }}
  >
   Learning management System
  </Typography>
  )
}

export default Header