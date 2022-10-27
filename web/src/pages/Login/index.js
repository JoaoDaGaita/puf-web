import * as React from 'react'
import styled from 'styled-components'

import { Form } from './Form'
import { Box, font } from '~/components'

const Title = styled('h2')`
  ${font}
`

const CenteredBox = ({ children, ...props }) => (
  <Box {...props} flex={1} flexbox="column" center>
    <Box style={{ width: 445 }}>{children}</Box>
  </Box>
)

export const Login = () => {
  return (
    <Box flex={1} flexbox>
      <CenteredBox bg="black"></CenteredBox>
      <CenteredBox>
        <Title textAlign="center">Login </Title>
        <Form />
      </CenteredBox>
    </Box>
  )
}
