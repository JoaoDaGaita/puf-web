import * as React from 'react'
import { useState, useEffect } from 'react'
import { Theme } from '~/components'

//import { SignUp } from '../pages/SignUp'
import { Login } from './Login'

const Dashboard = ({ onLogout }) => {
  return (
    <div>
      Estou logado <button onClick={onLogout}>Sair</button>
    </div>
  )
}

export const App = () => {
  const [state, setState] = useState(() => {
    const data = window.localStorage.getItem('auth')
    return data && JSON.parse(data)
  })

  const logout = () => setState(false)

  useEffect(() => {
    window.localStorage.setItem('auth', state && JSON.stringify(state))
  }, [state])

  return (
    <Theme>
      {state?.user ? (
        <Dashboard onLogout={logout} />
      ) : (
        <Login onSuccess={setState} />
      )}
    </Theme>
  )
}
