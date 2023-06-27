'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

export const Paypal = ({ totalValue, description }) => {
    const router = useRouter()
    const [orderID, setOrderID] = useState(null)
    const [success, setSuccess] = useState(false)

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details
            console.log(payer)
            setSuccess(true)
        })
    }

    useEffect(() => {
        if (success) {
            router.push('/')
            console.log('Order successful . Your order id is--', orderID)
        }
    }, [success, orderID, router])
    return (
        <>
            <PayPalButtons
                style={{ layout: 'vertical', shape: 'pill', color: 'silver' }}
                forceReRender={[totalValue, description]}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    description: description,
                                    amount: {
                                        currency_code: 'USD',
                                        value: totalValue,
                                    },
                                },
                            ],
                        })
                        .then((orderID) => {
                            setOrderID(orderID)
                            return orderID
                        })
                }}
                onApprove={onApprove}
            />
        </>
    )
}
