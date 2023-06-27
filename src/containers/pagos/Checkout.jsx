'use client'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Image from 'next/image'
import '@/sass/containers/pagos/Checkout.scss'
import { Paypal } from '@/components/Paypal'
import { useState } from 'react'
const CLIENT_ID = 'AWXeQTn3YEZJw_thO8-XrQgcwiMuqz1u_RQYf8nysU_aQY0uyNgClyEEESZklGd8CSHW7LAQCytmCaKt'
export const Checkout = ({ cart, removeFromCart, addQuantity, subQuantity, totalAmount }) => {
    const [isPaypal, setIsPaypal] = useState(true)
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
            <form>
                <fieldset>
                    <p>Datos personales</p>
                    <input type="text" name="name" placeholder="Nombre completo" required />
                    <input type="text" name="address" placeholder="Dirección" required />
                    <div className="Input-group">
                        <input type="text" name="country" placeholder="País" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <select name="document_type" required>
                            <option value="Seleccione una opción">Seleccione una opción</option>
                            <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                            <option value="Documento país de residencia">Documento país de residencia</option>
                            <option value="Visa">Visa</option>
                        </select>
                        <input type="number" name="document" placeholder="N° de documento" required />
                    </div>
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
                                <Paypal totalValue={totalAmount(cart)} description={'Compra de servicio'} />
                            </PayPalScriptProvider>
                        ) : (
                            <button>Pagar</button>
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
