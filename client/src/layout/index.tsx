import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Container } from './styled'

const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </Container>
  )
}

export default Layout