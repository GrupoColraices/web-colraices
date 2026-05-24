"use client"
import { createContext } from "react"
import { useFairMode } from "../hooks/useFairMode"
const FairMode = createContext()


const FairModeContextProvider = ({ children }) => {
    const { fairMode, setFairMode, fairRoutes, countries, convertedPrice } = useFairMode();
    return (
        <FairMode.Provider value={{ fairMode, setFairMode, fairRoutes, countries, convertedPrice }}>
            {children}
        </FairMode.Provider>
    )
}
export { FairMode, FairModeContextProvider }