import React from 'react'

import { Label } from '~/components/uikit/Label'
import { Input } from '~/components/uikit/Input'
import { Box } from '~/components/uikit/Box'

export const Field = ({ type, name, label, disabled, ...props }) => (
  <Box {...props} flexbox="column">
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} name={name} id={name} disabled={disabled} />
  </Box>
)
