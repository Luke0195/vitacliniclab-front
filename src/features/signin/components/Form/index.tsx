import * as S from '../../ui/styles'
import { ButtonRoot, InputRoot } from '@app/components/Form'
import { FiMail, FiLock } from 'react-icons/fi'
import { motion } from 'framer-motion'

export function Form() {
  return (
    <S.FormComponent>
      <form>
        <h2> Faça seu Login</h2>
        <motion.div
          initial={{ x: -30, opacity: 0.5 }}
          style={{ width: '100%' }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}>
          <InputRoot.InputWrapper>
            <InputRoot.InputLabel content="E-mail" />
            <InputRoot.InputField>
              <InputRoot.InputIcon
                icon={<FiMail size={20} color="#c8c8c8" />}
              />
              <InputRoot.Input
                type="email"
                name="email"
                placeholder="Entre com o seu email"
              />
            </InputRoot.InputField>
          </InputRoot.InputWrapper>
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0.3 }}
          style={{ width: '100%' }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}>
          <InputRoot.InputWrapper>
            <InputRoot.InputLabel content="Senha" />
            <InputRoot.InputField>
              <InputRoot.InputIcon
                icon={<FiLock size={20} color="#c8c8c8" />}
              />
              <InputRoot.Input
                type="email"
                name="email"
                placeholder="Entre com o seu email"
              />
            </InputRoot.InputField>
          </InputRoot.InputWrapper>
        </motion.div>
        <span> Esqueceu a senha ?</span>
        <motion.div
          style={{ width: '100%' }}
          initial={{ y: 30, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}>
          <ButtonRoot.ButtonWrapper color="#a500ff" disabled={true}>
            Entrar
          </ButtonRoot.ButtonWrapper>
        </motion.div>
      </form>
    </S.FormComponent>
  )
}
