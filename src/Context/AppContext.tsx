import React from 'react'

interface AppContextProps {
    children: React.ReactNode
}




const AppContextProvider = ({children} : AppContextProps) => {
  return (
    <div>AppContext</div>
  )
}

// export default AppContext