import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => { },
  setUserToken: () => { }
})

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: "Dharma Putra",
    email: "dharma22ti@mahasiswa.pcr.ac.id",
    role: "Kaprodi"
  })
  const [userToken, setUserToken] = useState('123')

  // const [currentUser, setCurrentUser] = useState({});
  // const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');

  // const setUserToken = (token) => {
  //   if (token) {
  //     localStorage.setItem('TOKEN', token)
  //   } else {
  //     localStorage.removeItem('TOKEN')
  //   }
  //   _setUserToken(token);
  // }

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
