'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { toSheets } from '@/helpers/services'

export const Paypal = ({ totalValue, description, buyer }) => {
    const router = useRouter()
    const [orderID, setOrderID] = useState(null)
    const [success, setSuccess] = useState(false)

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details
            console.log('payer', payer)
            setSuccess(true)
        })
    }

    const onError = (data, actions) => {
        router.push('/pagos/confirmacion?message=DECLINED')
    }
    useEffect(() => {
        if (success) {
            router.push('/pagos/confirmacion?message=APPROVED')
        }
    }, [success, orderID, router])
    return (
        <>
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
                                        currency_code: 'USD',
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
            />
        </>
    )
}
