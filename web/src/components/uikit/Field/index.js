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
export const Field = ({
  type,
  name,
  label,
  placeholder,
  value,
  error,
  disabled,
  onChange,
  onBlur,
  ...props
}) => (
  <Box {...props} flexbox="column">
    <Label htmlFor={name}>{label}</Label>
    <Input
      type={type}
      name={name}
      id={name}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      hasError={!!error}
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Box>
)
