import { styled, css } from '@app/libs/styled-components'

export const InputWrapperComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const InputLabelComponent = styled.label`
  color: #c8c8c8;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: #a4a6a5;
`
type InputWrapperProps = {
  haserror: boolean
}

export const InputFieldComponent = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #c8c8c8;
  height: 4.2rem;
  border-radius: 4px;
  background-color: #f8f8f8;
  gap: 0.4rem;
  padding: 0 0.8rem;
  margin: 0.8rem 0;

  &:focus-within {
    border: 1px solid #a500ff;
    svg {
      color: #a500ff !important;
    }
  }

  ${(props) =>
    props.haserror &&
    css`
      border-color: red !important;
    `}
`

export const InputComponent = styled.input`
  flex: 1;
  border: 0;
  height: 4.2rem;
  width: 100%;
  color: #a4a6a5;
`
