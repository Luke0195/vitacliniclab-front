import { PropsWithChildren } from '@app/shared/interfaces'
import * as S from './styles'

export function InputField(props: PropsWithChildren) {
  const { children } = props
  return <S.InputFieldComponent> {children} </S.InputFieldComponent>
}
