import * as S from '../../ui/styles'
import { motion } from 'framer-motion'
import { makeAnimation } from '@app/shared/animations'

export function Info() {
  return (
    <S.InfoComponent>
      <motion.div
        {...makeAnimation(
          { y: -30, opacity: 0.5 },
          { y: 0, opacity: 1 },
          { duration: 1 },
        )}>
        <p> O VitaLab é a melhor plataforma para clínicas e consultórios.</p>
      </motion.div>
      <motion.div
        {...makeAnimation(
          { y: -30, opacity: 0.5 },
          { y: 0, opacity: 1 },
          { duration: 1 },
        )}>
        <p>
          {' '}
          Gerencie o prontuário dos seus pacientes de forma simples e prática
          através de uma plataforma intuitiva fácil de se usar.
        </p>
      </motion.div>
    </S.InfoComponent>
  )
}
