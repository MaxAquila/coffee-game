import { useEffect, useLayoutEffect } from 'react'

/**Hook to define the Effect hook to use. */
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect
