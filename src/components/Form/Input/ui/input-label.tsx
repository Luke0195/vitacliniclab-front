import * as S from './styles'
interface InputLabelProps {
  content: string
}

export function InputLabel(props: InputLabelProps) {
  const { content } = props
  return <S.InputLabelComponent>{content}</S.InputLabelComponent>
}
