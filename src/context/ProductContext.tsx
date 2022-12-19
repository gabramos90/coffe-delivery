import { createContext, useState } from 'react'

export interface CoffeProps {
  image: string
  id: number
  tags: TagProps[]
  name: string
  description: string
  price: number
}

export interface TagProps {
  firstTag: string
  secTag: string
  thirdTag: string
}

export const ProductContext = createContext()

export function ProductProvider() {
    const [cartItem, setCartItem] = useState([])

    

  return (

  )
}
