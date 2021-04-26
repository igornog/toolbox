import { useState, useEffect } from 'react'

const useStateHook = (arg) => {
  const [ state, setState ] = useState(arg)

  useEffect(() => {
    setState(prevState => ({ ...prevState, ...arg }))
  }, [arg])

  return [ state, setState]
}

export default useStateHook