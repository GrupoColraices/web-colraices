'use client'
import { createContext, useState } from 'react'
const FormContext = createContext();
const FormProvider = ({ children }) => {
    const [formState, setFormState] = useState(false)
    return (
        <FormContext.Provider value={{ formState, setFormState }}>
            {children}
        </FormContext.Provider>
    )
}
export { FormContext, FormProvider }