import * as React from 'react'
import { useState } from 'react'
import axios from 'axios'

import { Field, Box, Button } from '~/components'

export const SignUp = () => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)

  const onChange = ev => {
    setValues(prev => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }))
  }

  const onSubmit = async ev => {
    ev.preventDefault()
    setLoading(true)
    try {
      await axios.post('http://localhost:9901/users', values)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box flex={1} flexbox="column" center>
      <Box style={{ width: 380 }}>
        <form onSubmit={onSubmit}>
          <Field
            type="text"
            name="name"
            label="Nome"
            mb={3}
            onChange={onChange}
            disable={loading}
          />
          <Field
            type="text"
            name="email"
            label="E-mail"
            mb={3}
            onChange={onChange}
            disable={loading}
          />
          <Field
            type="password"
            name="password"
            label="Senha"
            mb={3}
            onChange={onChange}
            disable={loading}
          />
          <Box flexbox center>
            <Button type="submit" disable={loading} loading={loading}>
              Registrar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
