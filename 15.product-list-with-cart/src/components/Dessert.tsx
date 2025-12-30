import type { CartItem, Dessert as DessertType } from "../types"

// Icons
import AddToCart from '../assets/icon-add-to-cart.svg'
import IncrementIcon from '../assets/icon-increment-quantity.svg'
import DecrementIcon from '../assets/icon-decrement-quantity.svg'

// Images
import Baklava from '../assets/image-baklava-desktop.jpg'
import Brownie from "../assets/image-brownie-desktop.jpg"
import Cake from "../assets/image-cake-desktop.jpg"
import Creme from "../assets/image-creme-brulee-desktop.jpg"
import Macaron from "../assets/image-macaron-desktop.jpg"
import Meringue from "../assets/image-meringue-desktop.jpg"
import Panna from "../assets/image-panna-cotta-desktop.jpg"
import Tiramisu from "../assets/image-tiramisu-desktop.jpg"
import Waffle from "../assets/image-waffle-desktop.jpg"

type DessertProps = {
  dessert: DessertType
  addToCart: (item: DessertType) => void
  cart: CartItem[]
  incrementQuantity: (dessertName: string) => void
  decrementQuantity: (dessertName: string) => void
}

export const Dessert = ({ dessert, addToCart, cart, incrementQuantity, decrementQuantity } : DessertProps) => {

  const { 
    image: {thumbnail},
    name, 
    category, 
    price 
  } = dessert

  const activeImage = thumbnail === "1" ? Waffle : thumbnail === "2" ? Creme : thumbnail === "3" ? Macaron : thumbnail === "4" ? Tiramisu : thumbnail === "5" ? Baklava : thumbnail === "6" ? Meringue : thumbnail === "7" ? Cake : thumbnail === "8" ? Brownie : Panna
  const elementExist = cart.find(cartItem => cartItem.name === dessert.name)

  return (
    <article className="w-full">
      <div className="relative">
        <div>
          <img 
            className={`cover rounded-lg ${elementExist ? "border-2 border-solid border-red" : ""}`}
            src={activeImage} 
            alt={`${name} image`}
          />
        </div>

        <div>

          { elementExist ? 
            <div className="bg-red p-3 rounded-3xl flex items-center justify-between absolute -bottom-6 z-3 w-42 transform left-1/2 -translate-x-1/2">
              <button
                onClick={() => decrementQuantity(dessert.name)}
                className="rounded-full cursor-pointer w-5 h-5 border-2 border-solid border-white flex items-center justify-center"
              >
                <img 
                  className="w-full"
                  src={DecrementIcon} 
                  alt="Decrement Icon" 
                />
              </button>

              <p className="text-white">{elementExist.quantity}</p>

              <button
                onClick={() => incrementQuantity(dessert.name)}
                className="rounded-full cursor-pointer w-5 h-5 border-2 border-solid border-white flex items-center justify-center"
              >
                <img 
                  src={IncrementIcon} 
                  alt="Increment Icon" 
                />
              </button>
            </div>
              : 
            <button 
              className="flex justify-center absolute -bottom-6 z-3 left-1/2 transform -translate-x-1/2 w-42 items-center px-6 py-3 gap-2 font-semibold cursor-pointer border border-rose-900 border-solid rounded-3xl text-rose-900 bg-white"
              onClick={() => addToCart(dessert)}
            >
              <img src={AddToCart} alt="Add to cart icon" />
              Add to Cart
            </button>              
          }
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <span className="text-[.9rem] text-rose-500">{category}</span>
        <p className="font-semibold text-rose-900">{name}</p>
        <p className="font-semibold text-red">${price}</p>
      </div>
    </article>
  )
}
