
type Image = {
  thumbnail: string
  desktop: string
}

export type Dessert = {
  image: Image
  name: string
  category: string
  price: number
}

export type CartItem = Dessert & {
  quantity: number
}