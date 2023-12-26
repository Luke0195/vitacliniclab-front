import { PropsWithChildren } from '@app/shared/interfaces'
import * as S from './styles'

export function InputWrapper(props: PropsWithChildren) {
  const { children } = props
  return <S.InputWrapperComponent>{children}</S.InputWrapperComponent>
}
