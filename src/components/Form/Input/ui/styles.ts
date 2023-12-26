import { styled } from '@app/libs/styled-components'

export const InputWrapperComponent = styled.div`
  width: 100%;
  background-color: yellow;
  display: flex;
  flex-direction: column;
`

export const InputLabelComponent = styled.label``

export const InputFieldComponent = styled.div`
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
`

export const InputComponent = styled.input`
  flex: 1;
  border: 0;
  height: 4.2rem;
  width: 100%;
`
