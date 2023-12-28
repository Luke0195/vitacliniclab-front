import { styled } from '@app/libs/styled-components'

export const ButtonWrapperComponent = styled.button`
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

  &:disabled span {
    color: white !important;
    cursor: not-allowed;
    text-decoration: none;
    display: block;
    margin: 0;
  }
`
