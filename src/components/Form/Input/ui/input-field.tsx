import { PropsWithChildren } from '@app/shared/interfaces'
import * as S from './styles'

interface ComponentProps extends PropsWithChildren {
  hasError: boolean
}
export function InputField(props: ComponentProps) {
  const { children, hasError } = props
  return (
    <S.InputFieldComponent hasError={hasError}>
      {children}{' '}
    </S.InputFieldComponent>
  )
}
