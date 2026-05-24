'use client'
import { useContext } from 'react'
import { FairMode } from '../Context/Mode'
import { useCurrency } from '../hooks/useCurrency'

export const PrecioInmueble = (props) => {
    const { price, currency, setCurrency, fairMode, isInFair } = props
    const [formatePrice] = useCurrency()
    const isFair = fairMode && isInFair

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value)
    }

    return (
        <div className="container-price">
            <h2 className="title-price">
                Desde:
                <span>
                    {formatePrice(price.price)} {currency}
                </span>
            </h2>

            <div className="container-currency">
                <select value={currency} onChange={handleCurrencyChange}>
                    <option value="COP">COP / $</option>
                    <option value="USD">USD / $</option>
                    <option value="EUR">EUR / $</option>
                    <option value="GBP">GBP / $</option>
                    {/* {fairMode && <option value="CAD">CAD / $</option>} */}
                </select>
                {isInFair && (
                    <p>
                        Precio feria: {formatePrice(price.fairprice)} {currency}
                    </p>
                )}
            </div>
            <a className="action-link" href="https://colraices.com/cupocreditoalinstante/" target="_bank">
                Conoce tu Cupo de Crédito
            </a>
        </div>
    )
}
