import { useEffect } from "react"
import { useAnimate } from "framer-motion"

export const useFloatingAnimation = (duration = 3, delay = 0) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(scope.current, { y: [0, -10, 0] }, { duration, delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" })
  }, [scope, animate, duration, delay])
 
  return scope
}

