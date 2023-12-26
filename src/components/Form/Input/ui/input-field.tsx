import { PropsWithChildren } from 'react'
import * as S from './styles'

interface InputFieldProps extends PropsWithChildren {}

export function InputField(props: InputFieldProps) {
  const { children } = props
  return <S.InputFieldComponent> {children} </S.InputFieldComponent>
}
