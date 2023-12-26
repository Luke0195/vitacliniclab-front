import { PropsWithChildren } from 'react'
import * as S from './styles'
interface ComponentProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    PropsWithChildren {
  color: string
}

export function ButtonWrapper(props: ComponentProps) {
  const { children, ...rest } = props
  return (
    <S.ButtonWrapperComponent {...rest}> {children}</S.ButtonWrapperComponent>
  )
}
