import type { CartItem } from "../types"

// Icons
import EmptyCart from '../assets/illustration-empty-cart.svg'
import RemoveIcon from "../assets/icon-remove-item.svg"
import CarbonIcon from '../assets/icon-carbon-neutral.svg'
import { useMemo } from "react"

type CartProps = {
  cart: CartItem[]
  deleteFromCart: (name: string) => void
  handleOrder: () => void
}

export const Cart = ({ cart, deleteFromCart, handleOrder } : CartProps) => {

  const quantityItems = useMemo(() => cart.reduce((total, cartItem) => cartItem.quantity + total, 0), [cart])
  const orderTotal = useMemo(() => cart.reduce((total, cartItem) => (cartItem.price * cartItem.quantity) + total, 0) ,[cart])

  return (
    <section>
      { cart.length === 0 ? (
        <div className="bg-white px-16 py-10 rounded-lg flex flex-col gap-2">
          <h2 className="font-bold text-2xl text-red">Your Cart (0)</h2>
          <img 
            className="block mx-auto"
            width={180}
            height={180}
            src={EmptyCart} 
            alt="Empty Cart illustration" 
          />
          <p className="text-rose-500 font-semibold text-center">Your added items will appear here</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl p-6 space-y-4">
          <h2 className="font-bold text-2xl text-red">Your Cart ({quantityItems})</h2>
          
          <div>
            {cart.map(cartItem => (
              <article 
                className="flex items-center justify-between py-3 border-b border-gray-200"
                key={cartItem.name}
              >
                <div>
                  <p className="font-semibold text-rose-900">{cartItem.name}</p>
                  <div className="flex gap-3">
                    <p className="text-red font-bold">{cartItem.quantity}x</p>
                    <p className="text-rose-500">@ ${cartItem.price} <span className="font-semibold">${cartItem.price * cartItem.quantity}</span></p>
                  </div>
                </div>
                <button 
                  onClick={() => deleteFromCart(cartItem.name)}
                  className="border border-rose-500 h-5 w-5 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <img src={RemoveIcon} alt="Remove icon" height={12} width={12} />
                </button>
              </article>
            ))}
          </div>

          <div className="flex justify-between items-center py-3">
            <p className="text-rose-900">Order Total</p>
            <p className="font-bold text-2xl text-rose-900">${orderTotal}</p>
          </div>

          <div className="bg-rose-100 p-4 rounded-xl flex gap-2 items-center justify-center">
            <img src={CarbonIcon} alt="Carbon-neutral icon" />
            <p className="text-rose-900">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
          </div>
          <button 
            className="bg-red text-white font-bold p-4 rounded-xl w-full cursor-pointer"
            onClick={handleOrder}
          >
            Confirm Order
          </button>
        </div>
      )}
    </section>
  )
}
