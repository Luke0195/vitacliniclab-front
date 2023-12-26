import { styled } from '@app/libs/styled-components'

type ButtonProps = {
  color: string
}

export const ButtonWrapperComponent = styled.button<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.2rem;
  border-radius: 0.4rem;
  margin: 1.6rem 0;
  border: 0;
  background-color: ${(props) => props.color || '#ccc'};

  &:disabled {
    color: #fff;
    background-color: #c8c8c8;
  }
`
