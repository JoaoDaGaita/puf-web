import React from 'react'

import { th } from '~/components/Theme'

import { Label } from '~/components/uikit/Label'
import { Input } from '~/components/uikit/Input'
import { Box } from '~/components/uikit/Box'
import styled from 'styled-components'

const ErrorMessage = styled(Box)`
  color: ${th.color('red')};
  padding: ${th.space(1)}px ${th.space(3)}px;
  font-size: ${th.size(2)}px;
`

export const Field = ({ type, name, label, error, disabled, ...props }) => (
  <Box {...props} flexbox="column">
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} name={name} id={name} disabled={disabled} />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Box>
)
