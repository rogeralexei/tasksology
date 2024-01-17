import React from 'react'
import styled from 'styled-components'
import { colors } from '../colors';
import { textStyles } from '../typography'

// Variants
// green - red - black - white
const variantColors = {
  green: colors.success,
  red: colors.error,
  black: colors.black,
  white: colors.white,
  blue: colors.blue
};


export const Button=({variant, 
  children, 
  onClick, 
  marginTop,
  marginBottom,
  disabled,
  fullWidth
})=>{
  return (
    <StyledButton 
    variant={variant} 
    onClick={onClick}
    marginTop={marginTop}
    marginBottom={marginBottom}
    disabled={disabled}
    fullWidth={fullWidth}
    >{children}</StyledButton>
  )
}

const StyledButton=styled.button`
  ${textStyles.body.b3}
  padding: 12px 36px;
  border-radius: 8px;
  color: ${(props) => props.variant==="white"? colors.black : colors.white};
  background-color: ${(props) => variantColors[props.variant]};
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.25);
  border: none;
  margin-top: ${(props) => props.marginTop?`${props.marginTop}px`:0};
  margin-bottom: ${(props) => props.marginBottom?`${props.marginBottom}px`:0};
  ${(props) => props.fullWidth && "width: 100%;"} 

  &:hover{
    cursor: pointer;
  }
`