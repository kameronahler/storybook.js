import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
  padding: 1rem 2rem;

  &:active,
  &:focus {
    outline: unset;
  }

  ${props =>
    props.primary &&
    css`
      border-color: green;
      background-color: green;
      color: white;
    `}

  ${props =>
    props.empty &&
    css`
      border-color: transparent;
      background-color: transparent;
    `}
`

/**
 * Primary UI component for user interaction
 */
export const Button = ({ empty, onClick, primary, text, ...props }) => {
  return (
    <StyledButton primary={primary} empty={empty} type='button' {...props}>
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

Button.defaultProps = {
  onClick: undefined,
  primary: undefined,
  text: 'Button',
}
