import * as React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { Form } from './Form'
import { Box, font } from '~/components'

import { useAuth } from '~/components/modules'

const Title = styled('h2')`
  ${font}
`

const CenteredBox = ({ children, ...props }) => (
  <Box {...props} flex={1} flexbox="column" center>
    <Box style={{ width: 445 }}>{children}</Box>
  </Box>
)

export const Login = () => {
  const [, { login: setAuth }] = useAuth()

  const onSubmit = async values => {
    try {
      const res = await axios.get('http://localhost:9901/login', {
        auth: values,
      })

      setAuth(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box flex={1} flexbox>
      <CenteredBox bg="black"></CenteredBox>
      <CenteredBox>
        <Title textAlign="center">Login </Title>
        <Form onSubmit={onSubmit} />
      </CenteredBox>
    </Box>
  )
}
