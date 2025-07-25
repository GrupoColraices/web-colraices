'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { toSheets } from '@/helpers/services'

export const Paypal = ({ totalValue, description, buyer, currency_code }) => {
    const router = useRouter()
    const [orderID, setOrderID] = useState(null)
    const [success, setSuccess] = useState(false)

    // check Approval
    const onApprove = (data, actions) => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                client_name: buyer.name,
                document: buyer.document,
                client_id: buyer.id,
                service_id: buyer.service_id,
                amount: totalValue,
                currency: currency_code,
                status: 'SUCCESS',
                paymentDate: new Date(),
                paymentId: data.paymentID,
                paymentMethod: 'PAYPAL',
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
        return actions.order.capture().then(async function (details) {
            const { payer } = details
            console.log('payer', payer)
            setSuccess(true)
        })
    }

    const onError = (err) => {
        console.error('PayPal Error:', err)

        // Registro del error en el backend
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                client_name: buyer.name,
                document: buyer.document,
                client_id: buyer.id,
                service_id: buyer.service_id,
                amount: totalValue,
                currency: currency_code,
                status: 'ERROR',
                paymentDate: new Date(),
                paymentId: 'N/A',
                paymentMethod: 'PAYPAL',
                error_details: err.message || 'Unknown error',
            }),
        }).catch((error) => console.error('Error registering payment error:', error))

        router.push('/pagos/confirmacion?message=DECLINED')
    }
    const onCancel = (data) => {
        console.log('PayPal payment cancelled:', data)

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                client_name: buyer.name,
                document: buyer.document,
                client_id: buyer.id,
                service_id: buyer.service_id,
                amount: totalValue,
                currency: currency_code,
                status: 'CANCELLED',
                paymentDate: new Date(),
                paymentId: data.orderID || 'N/A',
                paymentMethod: 'PAYPAL',
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error registering cancellation:', error))

        router.push('/pagos/confirmacion?message=CANCELLED')
    }
    useEffect(() => {
        if (success) {
            router.push('/pagos/confirmacion?message=APPROVED')
        }
    }, [success, orderID, router])
    return (
        <>
            {currency_code && (
                <PayPalButtons
                    style={{ layout: 'vertical', shape: 'pill', color: 'silver' }}
                    forceReRender={[totalValue, description, buyer]}
                    createOrder={(data, actions) => {
                        // Validar datos antes de crear la orden
                        if (!totalValue || totalValue <= 0) {
                            throw new Error('Monto inválido')
                        }

                        if (!buyer.name || !buyer.email) {
                            throw new Error('Información del comprador incompleta')
                        }

                        console.log('Creating PayPal order with:', {
                            totalValue,
                            currency_code,
                            buyer: buyer.name,
                            email: buyer.email,
                        })

                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        description: description,
                                        amount: {
                                            currency_code,
                                            value: totalValue.toString(),
                                        },
                                        payee: {
                                            email_address: buyer.email,
                                        },
                                    },
                                ],
                                payer: {
                                    name: {
                                        given_name: buyer.name.split(' ')[0],
                                        surname: buyer.name.split(' ').slice(1).join(' ') || buyer.name,
                                    },
                                    email_address: buyer.email,
                                },
                            })
                            .then((orderID) => {
                                console.log('PayPal order created:', orderID)
                                toSheets(
                                    'https://script.google.com/macros/s/AKfycbz5snw6plTX2ylT1PXLfq3MxNrlMwzaPZLOQl79bA5x5g3HLycw5YLTRbHFKHSaFTQOZw/exec',
                                    buyer,
                                    totalValue,
                                    'PayPal'
                                )
                                setOrderID(orderID)
                                return orderID
                            })
                            .catch((error) => {
                                console.error('Error creating PayPal order:', error)
                                throw error
                            })
                    }}
                    onApprove={onApprove}
                    onError={onError}
                    onCancel={onCancel}
                />
            )}
        </>
    )
}
