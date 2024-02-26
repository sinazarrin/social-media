import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { CssBaseline, Grid } from '@mui/material'

const Layout = () => {
  return (
    <Grid>
      <CssBaseline />
      <Header />
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </Grid>
  )
}

export default Layout