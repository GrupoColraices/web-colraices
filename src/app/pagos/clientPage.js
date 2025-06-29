'use client'
import { BannerSection } from '@/containers/pagos/BannerSection'
import { Checkout } from '@/containers/pagos/Checkout'
import useCart from '@/hooks/useCart'
import { getCountries, getDataClient, getServices } from '@/service/client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ClientPage() {
    const { cart, addToCart, removeFromCart, addQuantity, subQuantity, totalAmount } = useCart()
    const handleAddToCard = (service) => {
        addToCart(service)
    }
    const searchParams = useSearchParams()
    const [dataClient, setDataClient] = useState([])
    const [services, setServices] = useState([])
    const [countries, setCountries] = useState([])
    const client = searchParams.get('id')
    const service = searchParams.get('s')

    const init = async () => {
        await getCountries(setCountries)
        if (client) {
            await getDataClient({ national_document_number: client }, setDataClient)
        }
        await getServices((data) => {
            setServices(data)
            if (service) {
                const add = data.find((s) => s.id == service)
                handleAddToCard({
                    id: add.id,
                    name: add.name,
                    price: parseInt(add.usd_value),
                })
            }
        })
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <>
            <BannerSection handleAddToCard={handleAddToCard} services={services} />
            <Checkout
                client={{
                    name: dataClient.name || '',
                    address: dataClient.address || '',
                    country: dataClient?.Residence?.country_name || '',
                    document: dataClient?.Identification?.national_document_number || '',
                    document_type: dataClient?.Identification?.NationalDocument?.national_document_name,
                    email: dataClient?.email || '',
                    id: client,
                    service_id: cart?.[0]?.id,
                }}
                cart={cart}
                countries={countries}
                removeFromCart={removeFromCart}
                addQuantity={addQuantity}
                subQuantity={subQuantity}
                totalAmount={totalAmount}
            />
        </>
    )
}
