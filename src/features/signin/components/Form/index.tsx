import * as S from '../../ui/styles'
import { ButtonRoot, InputRoot } from '@app/components/Form'
import { FiMail, FiLock } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { makeAnimation } from '@app/shared/animations'

export function Form() {
  return (
    <S.FormComponent>
      <form>
        <h2> Faça seu Login</h2>
        <motion.div
          {...makeAnimation(
            { x: -30, opacity: 0.5 },
            { x: 0, opacity: 1 },
            { duration: 2 },
          )}
          style={{ width: '100%' }}>
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
          {...makeAnimation(
            { x: 30, opacity: 0.3 },
            { x: 0, opacity: 1 },
            { duration: 2 },
          )}
          style={{ width: '100%' }}>
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
        <motion.div
          {...makeAnimation(
            { x: 0, opacity: 0.1 },
            { x: 0, opacity: 1 },
            { duration: 2 },
          )}>
          <span> Esqueceu a senha ?</span>
        </motion.div>
        <motion.div
          style={{ width: '100%' }}
          {...makeAnimation(
            { y: 30, opacity: 0.3 },
            { y: 0, opacity: 1 },
            { duration: 2 },
          )}>
          <ButtonRoot.ButtonWrapper color="#a500ff" disabled={true}>
            Entrar
          </ButtonRoot.ButtonWrapper>
        </motion.div>
      </form>
    </S.FormComponent>
  )
}
