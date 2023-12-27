import * as S from './styles'
import { FiAlertCircle } from 'react-icons/fi'
interface ComponentProps {
  message?: string
}

export function FieldError(props: ComponentProps) {
  const { message } = props
  if (!message) return null

  return (
    <S.Container>
      <span>
        {' '}
        {message} <FiAlertCircle size={14} color="#dc3545" />{' '}
      </span>
    </S.Container>
  )
}
