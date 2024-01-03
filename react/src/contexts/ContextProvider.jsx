import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {}
})

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: "Dharma Putra",
    email: "dharma22ti@mahasiswa.pcr.ac.id",
    role: "Kaprodi"
  })
  const [userToken, setUserToken] = useState('1234')

  return (
    <StateContext.Provider value={{
      currentUser,
      setCurrentUser,
      userToken,
      setUserToken
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
