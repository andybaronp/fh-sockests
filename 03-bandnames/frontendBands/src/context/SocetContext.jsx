import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";


export const SockectContex = createContext()


export const SocetProvider = ({ children }) => {
  const { online, socket } = useSocket('http://localhost:8080')
  return (
    <SockectContex.Provider value={{ online, socket }}>
      {children}
    </SockectContex.Provider>
  )
}