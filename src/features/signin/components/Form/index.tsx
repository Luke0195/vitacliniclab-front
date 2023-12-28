import { useForm, Controller } from '@app/libs/react-hook-form'
import { yupResolver } from '@app/libs/yup'
import { AuthenticationParams } from '@app/entities/authentication/model'
import { schema } from '../../'
import * as S from '../../ui/styles'
import { ButtonRoot, InputRoot, FieldError } from '@app/components/Form'
import { makeAnimation } from '@app/shared/animations'

import { FiMail, FiLock } from 'react-icons/fi'
import { motion } from 'framer-motion'

export function Form() {
  const {
    handleSubmit,
    control,
    formState: {
      isValid,
      errors: { email, password },
    },
  } = useForm<AuthenticationParams>({
    mode: 'onBlur',
    resolver: yupResolver(schema()),
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: AuthenticationParams) => {
    console.log(data)
  }

  console.log(isValid)
  return (
    <S.FormComponent>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <InputRoot.InputField
              haserror={email && email.message ? true : false}>
              <InputRoot.InputIcon
                icon={
                  <FiMail
                    size={20}
                    color={`${email && email.message ? 'red' : '#c8c8c8'}`}
                  />
                }
              />
              <Controller
                name="email"
                control={control}
                render={({ field, ref }) => (
                  <InputRoot.Input
                    type="email"
                    placeholder="Entre com o seu email"
                    {...field}
                    ref={ref}
                  />
                )}
              />
            </InputRoot.InputField>
          </InputRoot.InputWrapper>
        </motion.div>

        {email && <FieldError message={email.message} />}

        <motion.div
          {...makeAnimation(
            { x: 30, opacity: 0.3 },
            { x: 0, opacity: 1 },
            { duration: 2 },
          )}
          style={{ width: '100%' }}>
          <InputRoot.InputWrapper>
            <InputRoot.InputLabel content="Senha" />
            <InputRoot.InputField
              haserror={
                password && password.message?.toString() ? true : false
              }>
              <InputRoot.InputIcon
                icon={
                  <FiLock
                    size={20}
                    color={`${
                      password && password.message ? 'red' : '#c8c8c8'
                    }`}
                  />
                }
              />
              <Controller
                name="password"
                control={control}
                render={({ field, ref }) => (
                  <InputRoot.Input
                    type="password"
                    autoComplete="off"
                    placeholder="Entre com sua senha"
                    {...field}
                    ref={ref}
                  />
                )}
              />
            </InputRoot.InputField>
          </InputRoot.InputWrapper>
        </motion.div>

        {password && <FieldError message={password.message} />}

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
          <ButtonRoot.ButtonWrapper color="#a500ff" disabled={!isValid}>
            <S.TextLabel> Entrar</S.TextLabel>
          </ButtonRoot.ButtonWrapper>
        </motion.div>
      </form>
    </S.FormComponent>
  )
}
