import { styled } from '@app/libs/styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`

export const InfoComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.6rem;
    text-align: center;
    padding: 0.4rem 0;
    color: #a4a6a5;
  }
`

export const FormComponent = styled.div`
  margin: 0.8rem 0;
  h2 {
    margin: 0.8rem 0;
    font-size: 2.3rem;
    font-weight: bold;
    color: #a500ff;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  }

  form {
    width: 40rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    display: block;
    margin-top: 0.8rem;
    font-size: 1.5rem;
    font-family: 'Poppins';
    color: #a500ff;
    cursor: pointer;
    transition: all 1s ease-out;

    &:hover {
      opacity: 0.6;
      text-decoration: underline;
    }
  }
`
