"use client"
import { createContext } from "react"
import { useFairMode } from "../hooks/useFairMode"
const FairMode = createContext()


const FairModeContextProvider = ({ children }) => {
    const { fairMode } = useFairMode();
    return (
        <FairMode.Provider value={{ fairMode }}>
            {children}
        </FairMode.Provider>
    )
}
export { FairMode, FairModeContextProvider }