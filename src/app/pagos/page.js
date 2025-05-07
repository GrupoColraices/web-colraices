'use client'
import { BannerSection } from '@/containers/pagos/BannerSection'
import { Checkout } from '@/containers/pagos/Checkout'
import useCart from '@/hooks/useCart'
import { getDataClient, getServices } from '@/service/client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PagosPage() {
    const { cart, addToCart, removeFromCart, addQuantity, subQuantity, totalAmount } = useCart()
    const handleAddToCard = (service) => {
        addToCart(service)
    }
    const searchParams = useSearchParams()
    const [dataClient, setDataClient] = useState([])
    const [services, setServices] = useState([])
    const client = searchParams.get('id')
    const service = searchParams.get('s')
    console.log({ service })

    const init = async () => {
        if (client) {
            console.log({ client })

            await getDataClient({ national_document_number: client }, setDataClient)
            await getServices((data) => {
                setServices(data)
                if (service) {
                    const add = data.find((s) => s.id == service)
                    handleAddToCard({
                        id: service.id,
                        name: add.name,
                        price: parseInt(add.usd_value),
                    })
                }
            })
        }
    }
    useEffect(() => {
        init()
    }, [])
    console.log(dataClient)
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
                removeFromCart={removeFromCart}
                addQuantity={addQuantity}
                subQuantity={subQuantity}
                totalAmount={totalAmount}
            />
        </>
    )
}
