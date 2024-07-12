"use client"

import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';
import useSWR from 'swr';


export const useFairMode = (initialPrice, fairPrice) => {
    const pathName = usePathname();
    const [currency, setCurrency] = useState("COP");
    const countries = {
        // "españa": "EUR",
        // "suiza": "CHF",
        // "alemania": "EUR",
        // "reino-unido": "GBP",
        "canada": "CAD",
        // "panama": "PAB",
        // "mexico": "MXN",
        // "costa-rica": "CRC",
        // "peru": "PEN",
        // "estados-unidos": "USD",
        // "emiratos-arabes-unidos": "AED"
    };
    const foundCountry = Object.keys(countries).find(country => pathName.includes(country));

    const { data: exchangeRate, error } = useSWR(
        `https://api.exchangerate-api.com/v4/latest/COP`,
        async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            return data.rates;
        }
    );
    useEffect(() => {
        if (foundCountry) {
            setFairMode(true)
            setCurrency(countries[foundCountry]);
        }
    }, [])

    const converterCurrency = () => {
        if (!exchangeRate || error) return 'Error obteniendo tasas de cambio';
        const price = initialPrice * exchangeRate[currency]
        const fairprice = fairPrice * exchangeRate[currency]
        return { price, fairprice };
    };

    const handleCurrency = (newCurrency) => {
        setCurrency(newCurrency);
    };

    const fairRoutes = new Set(
        Object.keys(countries).map(country => `/casas-apartamentos-colombia-desde-el-exterior/feria/${country}`)
    );

    const [fairMode, setFairMode] = useState(fairRoutes.has(pathName));

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
