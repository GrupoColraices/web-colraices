'use client'

import { FormProvider } from "@/context/FormContext"

export const Providers = ({ children }) => {
    return (
        <FormProvider>
            {children}
        </FormProvider>
    )
}
