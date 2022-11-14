import '@testing-library/jest-dom'
import axios from 'axios'

import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
//import { BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'

import { Theme } from '~/components/Theme'
import { AuthProvider } from '~/components/modules'

import { App } from './'

jest.mock('axios')

beforeEach(() => {
  window.localStorage.clear()
})

test('should show login form', () => {
  // ARRANGE
  render(
    <Theme>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Theme>
  )

  // ACT
  const emailInput = screen.getByLabelText('E-mail')
  const passwordInput = screen.getByLabelText('Senha')
  const submitBtn = screen.getByRole('button')

  // ASSERT
  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()

  expect(submitBtn).toBeInTheDocument()
  expect(submitBtn.textContent).toBe('Entrar')
})

test('should login user and redirect when submit form with correct credentials', async () => {
  // ARRANGE
  const credentials = {
    email: 'zam@zam.com',
    password: '123123',
  }

  const responseData = {
    user: {
      id: '1',
      name: 'Joao V',
      email: credentials.email,
    },
    token: '123',
  }

  axios.get.mockImplementation(() =>
    Promise.resolve({
      data: responseData,
    })
  )

  //const history = createMemoryHistory()

  render(
    <Theme>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Theme>
  )
  // ACT
  const emailInput = screen.getByLabelText('E-mail')
  await userEvent.type(emailInput, credentials.email)

  const passwordInput = screen.getByLabelText('Senha')
  await userEvent.type(passwordInput, credentials.password)

  const submitBtn = screen.getByRole('button')
  await userEvent.click(submitBtn)

  expect(submitBtn).toBeDisabled()

  // ASSERT
  await waitFor(() =>
    expect(axios.get).toHaveBeenCalledWith('http://localhost:9901/login', {
      auth: { password: credentials.password, username: credentials.email },
    })
  )
  expect(screen.getByText(responseData.user.name)).toBeInTheDocument()
})

test('should not redirect user when API returns', async () => {
  // ARRANGE
  const credentials = {
    email: 'errado@zam.com',
    password: '123123',
  }

  axios.get.mockImplementation(() =>
    Promise.reject({
      data: {},
    })
  )

  const history = createMemoryHistory()

  render(
    <Theme>
      <AuthProvider>
        <App history={history} />
      </AuthProvider>
    </Theme>
  )
  // ACT
  const emailInput = screen.getByLabelText('E-mail')
  await userEvent.type(emailInput, credentials.email)

  const passwordInput = screen.getByLabelText('Senha')
  await userEvent.type(passwordInput, credentials.password)

  const submitBtn = screen.getByRole('button')
  await userEvent.click(submitBtn)

  // ASSERT
  await waitFor(() =>
    expect(axios.get).toHaveBeenCalledWith('http://localhost:9901/login', {
      auth: { password: credentials.password, username: credentials.email },
    })
  )
  expect(submitBtn).toBeEnabled()
})
