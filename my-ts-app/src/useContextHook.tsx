import React from 'react'
import ComponentC from './ComponentC'

const UserContext = React.createContext(0)
function useContextHook() {
  return (
    <div className="useContextH">
    </div>
  )
}

export default useContextHook
