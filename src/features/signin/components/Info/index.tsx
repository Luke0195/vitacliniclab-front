import * as S from '../../ui/styles'
import { motion } from 'framer-motion'

export function Info() {
  return (
    <S.InfoComponent>
      <motion.div
        initial={{ y: -30, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
        <p> O VitaLab é a melhor plataforma para clínicas e consultórios.</p>
      </motion.div>
      <motion.div
        initial={{ x: -30, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
        <p>
          {' '}
          Gerencie o prontuário dos seus pacientes de forma simples e prática
          através de uma plataforma intuitiva fácil de se usar.
        </p>
      </motion.div>
    </S.InfoComponent>
  )
}
