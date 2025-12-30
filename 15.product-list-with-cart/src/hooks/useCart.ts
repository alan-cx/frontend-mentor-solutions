import { useState } from "react"
import type { Dessert } from "../types"
import type { CartItem } from "../types"
import data from '../data/data.json'

export const useCart = () => {

  const [jsonData] = useState<Dessert[]>(data)
  const [cart, setCart] = useState<CartItem[]>([])
  const [activeOrder, setActiveOrder] = useState(false)

  const MIN_ITEMS = 1

  function addToCart(item: Dessert) {
    const itemExist = cart.find(cartItem => cartItem.name === item.name)

    if (itemExist) return

    const updatedItem = { ...item, quantity: 1 }
    setCart([...cart, updatedItem])      
  }

  function deleteFromCart(name: string) {
    setCart(cart.filter(cartItem => cartItem.name !== name))
  }

  function incrementQuantity(dessertName: string) {
    setCart(cart.map(cartItem => {
      if (cartItem.name === dessertName) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      else {
        return cartItem
      }
    }))
  }

  function decrementQuantity(dessertName: string) {
    setCart(cart.map(cartItem => {
      if (cartItem.name === dessertName && cartItem.quantity > MIN_ITEMS) {
        return { ...cartItem, quantity: cartItem.quantity - 1 }
      }
      else {
        return cartItem
      }
    }))
  }

  function handleOrder() {
    setActiveOrder(true)
  }

  function resetOrder() {
    setActiveOrder(false)
    setCart([])
  }

  return {
    jsonData,
    addToCart,
    cart,
    deleteFromCart,
    incrementQuantity,
    decrementQuantity,
    activeOrder,
    handleOrder,
    resetOrder
  }
}
