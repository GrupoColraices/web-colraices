'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

export const useFairMode = (initialPrice, fairPrice) => {
    const pathName = usePathname()
    const [currency, setCurrency] = useState('COP')
    const countries = {
        // "españa": "EUR",
        // "suiza": "CHF",
        // "alemania": "EUR",
        // "reino-unido": "GBP",
        canada: 'CAD',
        // "panama": "PAB",
        // "mexico": "MXN",
        // "costa-rica": "CRC",
        // "peru": "PEN",
        // "estados-unidos": "USD",
        // "emiratos-arabes-unidos": "AED"
    }
    const foundCountry = Object.keys(countries).find((country) => pathName.includes(country))

    // Solo hacer fetch si estamos en una ruta de feria y necesitamos conversión
    const shouldFetchRates = foundCountry || currency !== 'COP'

    const { data: exchangeRate, error } = useSWR(
        shouldFetchRates ? `https://api.exchangerate-api.com/v4/latest/COP` : null,
        async (url) => {
            const response = await fetch(url)
            const data = await response.json()
            return data.rates
        },
        {
            revalidateOnFocus: false, // No re-fetch cuando la ventana recibe foco
            revalidateOnReconnect: false, // No re-fetch cuando se reconecta
            refreshInterval: 300000, // Solo refrescar cada 5 minutos (300,000ms)
            dedupingInterval: 60000, // Deduplicar requests por 1 minuto
        }
    )
    useEffect(() => {
        if (foundCountry) {
            setFairMode(true)
            setCurrency(countries[foundCountry])
        }
    }, [])

    const converterCurrency = () => {
        // Si no necesitamos conversión (COP), retornar precios originales
        if (currency === 'COP') {
            return { price: initialPrice, fairprice: fairPrice }
        }

        // Si hay error o no tenemos datos, retornar error
        if (!exchangeRate || error) {
            return 'Error obteniendo tasas de cambio'
        }

        // Convertir precios
        const price = initialPrice * exchangeRate[currency]
        const fairprice = fairPrice * exchangeRate[currency]
        return { price, fairprice }
    }

    const handleCurrency = (newCurrency) => {
        setCurrency(newCurrency)
    }

    const fairRoutes = new Set(
        Object.keys(countries).map((country) => `/casas-apartamentos-colombia-desde-el-exterior/feria/${country}`)
    )

    const [fairMode, setFairMode] = useState(fairRoutes.has(pathName))

    const discountRate = fairPrice !== null && ((initialPrice - fairPrice) / initialPrice) * 100

    return {
        fairMode,
        setFairMode,
        fairRoutes,
        countries,
        convertedPrice: converterCurrency(),
        currency,
        setCurrency: handleCurrency,
        discountRate,
    }
}
