'use client'
import { createHash } from 'crypto'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Image from 'next/image'
import '@/sass/containers/pagos/Checkout.scss'
import { Paypal } from '@/components/Paypal'
import { useEffect, useState } from 'react'
import { BASE_URL, payU } from '@/helpers/services'
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
const paisesEuropeos = [
    'Albania',
    'Alemania',
    'Andorra',
    'Armenia',
    'Austria',
    'Azerbaiyán',
    'Bélgica',
    'Bielorrusia',
    'Bosnia y Herzegovina',
    'Bulgaria',
    'Ciudad del Vaticano',
    'Chipre',
    'Croacia',
    'Dinamarca',
    'Eslovaquia',
    'Eslovenia',
    'España',
    'Estonia',
    'Finlandia',
    'Francia',
    'Georgia',
    'Grecia',
    'Hungría',
    'Irlanda',
    'Islandia',
    'Italia',
    'Kazajistán',
    'Kosovo',
    'Letonia',
    'Liechtenstein',
    'Lituania',
    'Luxemburgo',
    'Malta',
    'Moldavia',
    'Mónaco',
    'Montenegro',
    'Noruega',
    'Países Bajos',
    'Polonia',
    'Portugal',
    'Reino Unido',
    'República Checa',
    'Rumanía',
    'Rusia',
    'San Marino',
    'Serbia',
    'Suecia',
    'Suiza',
    'Turquía',
    'Ucrania',
]

export const Checkout = ({
    cart,
    removeFromCart,
    addQuantity,
    subQuantity,
    totalAmount,
    countries,
    client = { id: '', service_id: '', name: '', address: '', country: '', email: '', document_type: '', document: '' },
}) => {
    const [isPaypal, setIsPaypal] = useState(true)
    const [buyer, setBuyer] = useState(client)
    const [currency, setCurrency] = useState('')
    const signature = (string) => {
        return createHash('MD5').update(string).digest('hex')
    }
    const handleChange = (evt) => {
        const { target } = evt
        const { name, value } = target
        const newValues = {
            ...buyer,
            [name]: value,
        }
        setBuyer(newValues)
    }
    useEffect(() => {
        setBuyer(client)

        setCurrency(!paisesEuropeos.includes(client.country) ? 'USD' : 'EUR')
    }, [client])

    // Validar que todos los datos necesarios del comprador estén completos
    const isBuyerDataComplete = () => {
        return (
            buyer.name &&
            buyer.email &&
            buyer.address &&
            buyer.country &&
            buyer.country !== 'Seleccione una opción' &&
            buyer.document_type &&
            buyer.document_type !== 'Seleccione una opción' &&
            buyer.document
        )
    }

    return (
        <section className="Checkout-container container">
            <h1>
                Información <span>de facturación</span>
            </h1>
            {cart.length > 0 && (
                <div className="Service-info">
                    {cart.map((service) => (
                        <div key={service.name} className="Service-info-group">
                            <div className="Service-info-name">
                                <div className="Service-info-logo">
                                    <Image src={'/icons/service-cart-icon.svg'} alt="Icon" fill={true} />
                                </div>
                                <p>{service?.name || 'No ha seleccionado un servicio'} </p>
                                {service.additional && (
                                    <span>
                                        <button disabled={service.quantity < 2} onClick={() => subQuantity(service)}>
                                            -
                                        </button>{' '}
                                        {service.quantity} <button onClick={() => addQuantity(service)}>+</button>
                                    </span>
                                )}
                            </div>
                            <div className="Service-info-value">
                                <p>
                                    <span>Valor: </span> ${service?.price || 0} {currency}
                                </p>
                                <button onClick={() => removeFromCart(service)}>x</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                <fieldset>
                    <p>Datos personales</p>
                    <input
                        value={buyer.name}
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        required
                        onChange={handleChange}
                    />
                    <input
                        value={buyer.address}
                        type="text"
                        name="address"
                        placeholder="Dirección"
                        required
                        onChange={handleChange}
                    />
                    <div className="Input-group">
                        <select value={buyer.country} name="country" required onChange={handleChange}>
                            <option value="Seleccione una opción">Seleccione una opción</option>
                            {countries.map((country) => {
                                return (
                                    <option key={`country-${country.id}`} value={country.country_name}>
                                        {country.country_name}
                                    </option>
                                )
                            })}
                        </select>
                        <input
                            value={buyer.email}
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={handleChange}
                        />
                        <select value={buyer.document_type} name="document_type" required onChange={handleChange}>
                            <option value="Seleccione una opción">Seleccione una opción</option>
                            <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                            <option value="Documento país de residencia">Documento país de residencia</option>
                            <option value="Visa">Visa</option>
                        </select>
                        <input
                            value={buyer.document}
                            type="number"
                            name="document"
                            placeholder="N° de documento"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <input name="merchantId" type="hidden" value={payU.merchantId} />
                    <input name="accountId" type="hidden" value={payU.accountId} />
                    <input name="description" type="hidden" value="Servicios Colraices" />
                    <input name="referenceCode" type="hidden" value={payU.referenceCode} />
                    <input name="amount" type="hidden" value={totalAmount(cart)} />
                    <input name="tax" type="hidden" value="0" />
                    <input name="taxReturnBase" type="hidden" value="0" />
                    <input name="currency" type="hidden" value={currency} />
                    <input
                        name="signature"
                        type="hidden"
                        value={signature(
                            `${payU.apiKey}~${payU.merchantId}~${payU.referenceCode}~${totalAmount(cart)}~${currency}`
                        )}
                    />
                    <input name="test" type="hidden" value="0" />
                    <input name="buyerEmail" type="hidden" value={buyer.email} />
                    <input name="responseUrl" type="hidden" value={`${BASE_URL}/pagos/confirmacion`} />
                </fieldset>
                <aside>
                    <div className="Payment-method">
                        <p>Metodo de pago</p>
                        <label>
                            <input type="radio" checked={isPaypal} onChange={() => setIsPaypal(true)} />{' '}
                            <Image src="/icons/paypal-icon.svg" alt="Paypal" width={71} height={40} />
                        </label>
                        {/* <label>
                            <input type="radio" checked={!isPaypal} onChange={() => setIsPaypal(false)} />{' '}
                            <Image src="/icons/payu-icon.svg" alt="PayU" width={71} height={40} />
                        </label> */}
                    </div>
                    <div className="Payment-resume">
                        <p className="title">Detalles de compra</p>
                        {cart.length > 0 ? (
                            <>
                                {cart.map((service) => (
                                    <div key={service.name} className="Resume-info">
                                        <p>{service.name}</p>
                                        <span>
                                            $ {service.price} {currency}
                                        </span>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="Resume-info">
                                <p>Seleccione un servicio</p>
                                <span>$ 0 {currency}</span>
                            </div>
                        )}
                        <div className="Resume-info-total">
                            <p>Total</p>
                            <span>
                                $ {totalAmount(cart)} {currency}
                            </span>
                        </div>
                        {cart.length > 0 ? (
                            <>
                                {!isBuyerDataComplete() && (
                                    <div className="Validation-message">
                                        <p
                                            style={{
                                                color: '#ff6b6b',
                                                fontSize: '1.4rem',
                                                textAlign: 'center',
                                                margin: '1rem 0',
                                            }}
                                        >
                                            Por favor, completa todos los datos personales antes de proceder al pago.
                                        </p>
                                    </div>
                                )}
                                {
                                    isPaypal && currency && isBuyerDataComplete() && CLIENT_ID && (
                                        <PayPalScriptProvider
                                            options={{
                                                clientId: CLIENT_ID,
                                                dataNamespace: 'paypal_sdk',
                                                components: 'buttons',
                                                currency,
                                                intent: 'capture',
                                            }}
                                        >
                                            <Paypal
                                                totalValue={totalAmount(cart)}
                                                description={'Compra de servicio'}
                                                buyer={buyer}
                                                currency_code={currency}
                                            />
                                        </PayPalScriptProvider>
                                    )
                                    // : (
                                    //     <button
                                    //         onClick={toSheets(
                                    //             'https://script.google.com/macros/s/AKfycbz5snw6plTX2ylT1PXLfq3MxNrlMwzaPZLOQl79bA5x5g3HLycw5YLTRbHFKHSaFTQOZw/exec',
                                    //             buyer,
                                    //             totalAmount(cart),
                                    //             'PayU'
                                    //         )}
                                    //     >
                                    //         Pagar
                                    //     </button>
                                    // )
                                }
                            </>
                        ) : (
                            ''
                        )}
                    </div>
                </aside>
            </form>
            <a className="Go-back" href="#">
                {'< Regresar'}
            </a>
        </section>
    )
}
