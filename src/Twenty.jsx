import React from 'react'
import { useCart } from './context/CartContext'

function Twenty() {
    const { cartState, cartDispatch } = useCart();
    const addToCart = (item) => {
        const existingCartItem = cartState.cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingCartItem) {
            cartDispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: existingCartItem.quantity + 1 } })
        } else
            cartDispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } })
    }

    const decrementQuantity = (item) => {
        cartDispatch({ type: 'DECREMENT_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })
    }

    const removeFromCart = (item) => {
        cartDispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } })
    }

    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
    ]
    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartState.cartItems.map((item, index) => (
                <li key={index}>{item.name} - {item.quantity}
                    <button onClick={() => addToCart(item)}>+</button>
                    <button onClick={() => decrementQuantity(item)}>-</button>
                    <button onClick={() => removeFromCart(item)}>Remove from cart</button>
                </li>
            ))}
            <h4>Products List</h4>
            <ul>
                {products.map((product) => {
                    return <>
                        <li key={product.id}>{product.name}<button onClick={() => addToCart(product)}>Add to Cart</button></li>

                    </>
                })}
            </ul>
        </div>
    )
}

export default Twenty