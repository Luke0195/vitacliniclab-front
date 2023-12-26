import * as S from '../../ui/styles'
import { FiMail, FiLock } from 'react-icons/fi'
export function Form() {
  return (
    <S.FormComponent>
      <form>
        <h2> Faça seu Login</h2>
        <div>
          <label> Email</label>
          <div>
            <FiMail size={20} color="#c8c8c8" />
            <input
              type="email"
              name="email"
              placeholder="Entre com o seu email"
            />
          </div>
        </div>
        <div>
          <label> Senha </label>
          <div>
            <FiLock size={20} color="#c8c8c8" />
            <input
              type="email"
              name="email"
              placeholder="Entre com o seu email"
            />
          </div>
        </div>
        <span> Esqueceu a senha ?</span>
        <button> Entrar </button>
      </form>
    </S.FormComponent>
  )
}
