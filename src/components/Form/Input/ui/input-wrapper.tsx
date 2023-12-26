import { PropsWithChildren } from 'react'
import * as S from './styles'
export interface ComponentProps extends PropsWithChildren {}

export function InputWrapper(props: ComponentProps) {
  const { children } = props
  return <S.InputWrapperComponent>{children}</S.InputWrapperComponent>
}
