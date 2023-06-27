import { useState } from 'react'

const useCart = () => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart((currentCart) => {
            if (currentCart.find((item) => item.id === product.id)) {
                return currentCart
            }
            return [...currentCart, product]
        })
    }

    const removeFromCart = (product) => {
        setCart(cart.filter((items) => items.id !== product.id))
    }

    const addQuantity = (product) => {
        setCart((currentCart) => {
            if (currentCart.find((item) => item.id === product.id)) {
                return currentCart.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            }
        })
    }

    const subQuantity = (product) => {
        setCart((currentCart) => {
            if (currentCart.find((item) => item.id === product.id)) {
                return currentCart.map((item) => {
                    if (item.id === product.id && item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 }
                    }

                    return item
                })
            }
        })
    }

    const totalAmount = (cart) => {
        const multipliedServices = cart.map((item) =>
            item.quantity > 1 ? { ...item, price: item.quantity * item.price } : item
        )
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price
        const sum = multipliedServices.reduce(reducer, 0)
        return sum
    }

    return { cart, addToCart, removeFromCart, addQuantity, subQuantity, totalAmount }
}
export default useCart
