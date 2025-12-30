import { useMemo } from 'react'
import type { CartItem } from '../types'
import OrderConfirmed from '../assets/icon-order-confirmed.svg'

type OrderProps = {
  cart: CartItem[]
  resetOrder: () => void
}

export const Order = ({ cart, resetOrder } : OrderProps) => {

  const orderTotal = useMemo(() => cart.reduce((total, cartItem) => (cartItem.price * cartItem.quantity) + total, 0) ,[cart])
  
  return (
    <div className="transition duration-300 space-y-4 z-10 fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 bg-white text-white p-10 rounded-xl md:w-xl">
      <div>
        <img 
          src={OrderConfirmed} 
          alt="Order confirmed icon"
        />
        <p className="font-bold text-5xl mt-4 text-black">Order Confirmed</p>
        <p className="text-black">We hope you enjoy your food!</p>
      </div>

      <div className="bg-rose-100 py-4 px-6 rounded-xl">
        {cart.map(cartItem => (
          <div 
            key={cartItem.name}
            className='flex items-center justify-between py-3 border-b border-gray-200'
          >
            <div className="flex flex-col">
              <p className="text-rose-900 font-semibold">{cartItem.name}</p>
              <p className="text-rose-500">
                <span className="font-semibold text-red">{cartItem.quantity}x </span> 
                @ ${cartItem.price}
              </p>
            </div>

            <div>
              <p className=" text-black">${cartItem.price * cartItem.quantity}</p>
            </div>
          </div>
        ))}

          <div className="flex justify-between items-center py-4">
            <p className="text-rose-900">Order Total</p>
            <p className="font-bold text-xl text-rose-900">${orderTotal}</p>
          </div>
      </div>

      <div>
        <button 
          className="bg-red text-white font-bold p-4 rounded-4xl w-full cursor-pointer"
          onClick={resetOrder}
        >Order new Order</button>
      </div>
    </div>
  )
}
