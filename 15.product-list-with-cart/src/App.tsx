import { useCart } from "./hooks/useCart"

// components
import { Dessert } from "./components/Dessert"
import { Cart } from "./components/Cart"
import { Order } from "./components/Order"

function App() {

  const { 
    jsonData, 
    addToCart, 
    cart, 
    deleteFromCart, 
    incrementQuantity, 
    decrementQuantity,
    activeOrder,
    handleOrder,
    resetOrder
  } = useCart()

  return (
    <main className="mx-auto max-w-7xl md:p-10 p-4 grid md:grid-cols-3 gap-6">

      <section className="md:col-span-2">
        <h1 className="text-4xl font-bold mb-4">Desserts</h1>
        <div className="auto-grid">
          {jsonData.map(dessert => (
            <Dessert
              key={dessert.name}
              dessert={dessert}
              addToCart={addToCart}
              cart={cart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          ))}          
        </div>
      </section>
      
      <Cart
        cart={cart}
        deleteFromCart={deleteFromCart}
        handleOrder={handleOrder}
      />

      { activeOrder && (<>
        <div className="w-full h-full z-5 fixed top-0 left-0 bg-capa transition duration-300"></div>
        <Order 
          cart={cart}
          resetOrder={resetOrder}
        />
      </>)}
    </main>
  )
}

export default App
