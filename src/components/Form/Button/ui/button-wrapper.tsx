import { PropsWithChildren } from '@app/shared/interfaces'
import * as S from './styles'
interface ComponentProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    PropsWithChildren {}

export function ButtonWrapper(props: ComponentProps) {
  const { children, ...rest } = props
  return (
    <S.ButtonWrapperComponent {...rest}> {children}</S.ButtonWrapperComponent>
  )
}
