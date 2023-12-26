import { PropsWithChildren } from 'react'

interface ComponentProps extends PropsWithChildren {}

export function ButtonContent(props: ComponentProps) {
  const { children } = props
  return children
}
