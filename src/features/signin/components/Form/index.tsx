import * as S from '../../ui/styles'
import { ButtonRoot, InputRoot } from '@app/components/Form'
import { FiMail, FiLock } from 'react-icons/fi'

export function Form() {
  return (
    <S.FormComponent>
      <form>
        <h2> Faça seu Login</h2>
        <InputRoot.InputWrapper>
          <InputRoot.InputLabel content="E-mail" />
          <InputRoot.InputField>
            <InputRoot.InputIcon icon={<FiMail size={20} color="#c8c8c8" />} />
            <InputRoot.Input
              type="email"
              name="email"
              placeholder="Entre com o seu email"
            />
          </InputRoot.InputField>
        </InputRoot.InputWrapper>
        <InputRoot.InputWrapper>
          <InputRoot.InputLabel content="Senha" />
          <InputRoot.InputField>
            <InputRoot.InputIcon icon={<FiLock size={20} color="#c8c8c8" />} />
            <InputRoot.Input
              type="email"
              name="email"
              placeholder="Entre com o seu email"
            />
          </InputRoot.InputField>
        </InputRoot.InputWrapper>
        <span> Esqueceu a senha ?</span>
        <ButtonRoot.ButtonWrapper color="#a500ff" disabled={true}>
          Entrar
        </ButtonRoot.ButtonWrapper>
      </form>
    </S.FormComponent>
  )
}
