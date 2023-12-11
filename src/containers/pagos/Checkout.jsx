'use client'
import { createHash } from 'crypto'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Image from 'next/image'
import '@/sass/containers/pagos/Checkout.scss'
import { Paypal } from '@/components/Paypal'
import { useState } from 'react'
import { BASE_URL, payU, toSheets } from '@/helpers/services'
const CLIENT_ID = 'AWXeQTn3YEZJw_thO8-XrQgcwiMuqz1u_RQYf8nysU_aQY0uyNgClyEEESZklGd8CSHW7LAQCytmCaKt'

export const Checkout = ({ cart, removeFromCart, addQuantity, subQuantity, totalAmount }) => {
    const [isPaypal, setIsPaypal] = useState(true)
    const [buyer, setBuyer] = useState({
        name: '',
        address: '',
        country: '',
        email: '',
        document_type: '',
        document: '',
    })
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
                                    <span>Valor: </span> ${service?.price || 0}USD
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
                    <input type="text" name="name" placeholder="Nombre completo" required onChange={handleChange} />
                    <input type="text" name="address" placeholder="Dirección" required onChange={handleChange} />
                    <div className="Input-group">
                        <input type="text" name="country" placeholder="País" required onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                        <select name="document_type" required onChange={handleChange}>
                            <option value="Seleccione una opción">Seleccione una opción</option>
                            <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                            <option value="Documento país de residencia">Documento país de residencia</option>
                            <option value="Visa">Visa</option>
                        </select>
                        <input
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
                    <input name="currency" type="hidden" value="USD" />
                    <input
                        name="signature"
                        type="hidden"
                        value={signature(
                            `${payU.apiKey}~${payU.merchantId}~${payU.referenceCode}~${totalAmount(cart)}~USD`
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
                        <label>
                            <input type="radio" checked={!isPaypal} onChange={() => setIsPaypal(false)} />{' '}
                            <Image src="/icons/payu-icon.svg" alt="PayU" width={71} height={40} />
                        </label>
                    </div>
                    <div className="Payment-resume">
                        <p className="title">Detalles de compra</p>
                        {cart.length > 0 ? (
                            <>
                                {cart.map((service) => (
                                    <div key={service.name} className="Resume-info">
                                        <p>{service.name}</p>
                                        <span>$ {service.price} USD</span>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="Resume-info">
                                <p>Seleccione un servicio</p>
                                <span>$ 0 USD</span>
                            </div>
                        )}
                        <div className="Resume-info-total">
                            <p>Total</p>
                            <span>$ {totalAmount(cart)} USD</span>
                        </div>
                        {cart.length > 0 ? (
                            <>
                                {isPaypal ? (
                                    <PayPalScriptProvider
                                        options={{
                                            clientId: CLIENT_ID,
                                            dataNamespace: 'paypal_sdk',
                                            components: 'buttons',
                                            currency: 'USD',
                                            intent: 'capture',
                                        }}
                                    >
                                        <Paypal
                                            totalValue={totalAmount(cart)}
                                            description={'Compra de servicio'}
                                            buyer={buyer}
                                        />
                                    </PayPalScriptProvider>
                                ) : (
                                    <button
                                        onClick={toSheets(
                                            'https://script.google.com/macros/s/AKfycbz5snw6plTX2ylT1PXLfq3MxNrlMwzaPZLOQl79bA5x5g3HLycw5YLTRbHFKHSaFTQOZw/exec',
                                            buyer,
                                            totalAmount(cart),
                                            'PayU'
                                        )}
                                    >
                                        Pagar
                                    </button>
                                )}
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
