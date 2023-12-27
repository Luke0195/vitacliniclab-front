import { yup } from '@app/libs'

export const schema = () => {
  return yup.object({
    email: yup
      .string()
      .email('Informe um e-mail válido!')
      .required('O campo email é obrigatório!'),
    password: yup
      .string()
      .required('O campo senha é obrigatório')
      .min(5, 'O mínimo de 5 caracteres!'),
  })
}
