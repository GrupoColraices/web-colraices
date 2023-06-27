'use client'
import { BannerSection } from '@/containers/pagos/BannerSection'
import { Checkout } from '@/containers/pagos/Checkout'
import useCart from '@/hooks/useCart'

export const metadata = {
    title: 'Comprar casa en Colombia desde el exterior | Colraices',
    description: 'Comprar casa en Colombia desde el exterior | Colraices',
}

export default function PagosPage() {
    const { cart, addToCart, removeFromCart, addQuantity, subQuantity, totalAmount } = useCart()
    const handleAddToCard = (service) => {
        addToCart(service)
    }

    return (
        <>
            <BannerSection handleAddToCard={handleAddToCard} />
            <Checkout
                cart={cart}
                removeFromCart={removeFromCart}
                addQuantity={addQuantity}
                subQuantity={subQuantity}
                totalAmount={totalAmount}
            />
        </>
    )
}
