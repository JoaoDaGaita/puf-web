import React from 'react'
import styled from 'styled-components'

import { th, margin } from '~/components/Theme/styled'
import { FidgetSpinner } from 'react-loader-spinner'

const StyledButton = styled('button')`
  background: ${th.color('white')};
  border: none;
  border-radius: 200px;
  color: ${th.color('black')};
  padding: ${th.space(2)}px ${th.space(6)}px;
  font-size: inherit;
  cursor: pointer;
  outline: none;

  ${({ disabled }) => disabled && 'opacity: 0.5;'}
  ${margin}
`

export const Button = ({ disabled, loading, children, ...props }) => (
  <StyledButton {...props} disabled={disabled || loading}>
    {loading ? (
      <FidgetSpinner
        visible={true}
        height="40"
        width="40"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={['#ff0000', '#00ff00', '#0000ff']}
        backgroundColor="black"
      />
    ) : (
      children
    )}
  </StyledButton>
)
