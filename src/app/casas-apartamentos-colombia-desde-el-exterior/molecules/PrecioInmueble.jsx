'use client'
import useSWR from 'swr'
import { useState } from 'react'
import { useCurrency } from '../hooks/useCurrency';

export const PrecioInmueble = ({ inmueble }) => {

    const { precio } = inmueble;

    const [formatePrice] = useCurrency();
    const [currency, setCurrency] = useState("COP");
    const { data: exchangeRate, error } = useSWR(
        'https://api.exchangerate-api.com/v4/latest/COP',
        async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            return data.rates;
        }
    );
    const converterCurrency = () => {
        if (!exchangeRate || error) return 'Error obteniendo tasas de cambio';
        return (precio * exchangeRate[currency]);

    }
    const handleCurrency = (e) => {
        setCurrency(e.target.value);
    }

    return (
        <div className='container-price'>
            <h2 className='title-price'>Desde:</h2>
            <div className='container-currency'>
                <select value={currency} onChange={handleCurrency}>
                    <option value="COP">COP / $</option>
                    <option value="USD">USD / $</option>
                    <option value="EUR">EUR / $</option>
                    <option value="GBP">GBP / $</option>
                </select>
                <p>{formatePrice(converterCurrency())}</p>
            </div>
            <a className='action-link' href="https://colraices.com/cupocreditoalinstante/" target='_bank'>
                Conoce tu Cupo de Crédito
            </a>
        </div>
    )
}
