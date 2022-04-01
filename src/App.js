import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { increaseCounter } from './actions/counterActions'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(increaseCounter())
  }, [])
  return <div>Hello World</div>
}

export default App
