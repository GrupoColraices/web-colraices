'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { toSheets } from '@/helpers/services'

export const Paypal = ({ totalValue, description, buyer, currency_code }) => {
    const router = useRouter()
    const [orderID, setOrderID] = useState(null)
    const [success, setSuccess] = useState(false)
    console.log({ currency_code }, '****************************')
    // check Approval
    const onApprove = (data, actions) => {
        console.log(data, buyer)
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

    const onError = (data, actions) => {
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
                paymentId: data.paymentID,
                paymentMethod: 'PAYPAL',
            }),
        })
        console.log('error', actions, data)
        return actions.order.capture().then(async function (details) {
            console.log(data)
            router.push('/pagos/confirmacion?message=DECLINED')
        })
    }
    const onCancel = (data, actions) => {
        // console.log(data, buyer)
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
                paymentId: data.paymentID,
                paymentMethod: 'PAYPAL',
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))

        router.push('/pagos/confirmacion?message=CANCELLED')
        // console.log(actions, data)
        // return router.push('/pagos/confirmacion?message=DECLINED')
        // return actions.order.capture().then(async function (details) {
        //     console.log(data)
        //     router.push('/pagos/confirmacion?message=DECLINED')
        // })
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
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        description: description,
                                        amount: {
                                            currency_code,
                                            value: totalValue,
                                        },
                                    },
                                ],
                            })
                            .then((orderID) => {
                                toSheets(
                                    'https://script.google.com/macros/s/AKfycbz5snw6plTX2ylT1PXLfq3MxNrlMwzaPZLOQl79bA5x5g3HLycw5YLTRbHFKHSaFTQOZw/exec',
                                    buyer,
                                    totalValue,
                                    'PayPal'
                                )
                                setOrderID(orderID)
                                return orderID
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
