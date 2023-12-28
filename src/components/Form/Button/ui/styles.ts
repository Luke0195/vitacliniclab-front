import { styled } from '@app/libs/styled-components'

type ComponentProps = {
  color: string
}

export const ButtonWrapperComponent = styled.button<ComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.2rem;
  border-radius: 0.4rem;
  margin-top: 1.5rem;
  padding: 0;
  border: 0;
  background-color: ${(props) => props.color};

  &:disabled {
    background-color: #c8c8c8 !important;
  }
  &:disabled span {
    color: white !important;
    cursor: not-allowed;
    text-decoration: none;
    display: block;
    margin: 0;
  }
`
