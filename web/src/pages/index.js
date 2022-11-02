import * as React from 'react'
import { useAuth } from '~/components/modules'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { SignUp } from '../pages/SignUp'
import { Login } from './Login'
import { Dashboard } from './Dashboard'

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />

    <Route path="/signup" element={<SignUp />}></Route>
  </Routes>
)

const LoggedInRoutes = () => (
  <Routes>
    <Route path="/" exact element={<Dashboard />} />
  </Routes>
)

export const App = () => {
  const [auth] = useAuth()

  return <Router>{auth?.user ? <LoggedInRoutes /> : <AuthRoutes />}</Router>
}
