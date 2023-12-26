import React from 'react'
import * as S from './styles'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export function Input(props: InputProps) {
  return <S.InputComponent {...props} />
}
