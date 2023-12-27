type InitialProps = {
  [key: string]: number
  opacity: number
}

type AnimationProps = InitialProps

type TransitionProps = {
  duration: number
}

type AnimationResult = {
  initial: InitialProps
  animate: AnimationProps
  transition: TransitionProps
}

export const makeAnimation = (
  initial: InitialProps,
  animate: AnimationProps,
  transition: TransitionProps,
): AnimationResult => {
  return {
    initial,
    animate,
    transition,
  }
}
