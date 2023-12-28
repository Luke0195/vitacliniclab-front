import { PropsWithChildren } from '@app/shared/interfaces'
import * as S from './styles'

interface ComponentProps extends PropsWithChildren {
  haserror: boolean
}
export function InputField(props: ComponentProps) {
  const { children, haserror } = props
  return (
    <S.InputFieldComponent haserror={haserror}>
      {children}{' '}
    </S.InputFieldComponent>
  )
}
