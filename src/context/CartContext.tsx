import produce from 'immer'
import { createContext, ReactNode, useState } from 'react'

export interface CartItem {
  photo: string
  id: number
  name: string
  description: string
  price: number
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeToCart: (coffe: CartItem) => void
  cartQuantity: number
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increment' | 'decrement',
  ) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  function addCoffeToCart(coffe: CartItem) {
    const coffeAllReadyExists = cartItems.findIndex(
      (cartItem) => cartItem.id === coffe.id,
    )

    const NewCart = produce(cartItems, (draft) => {
      if (coffeAllReadyExists < 0) {
        draft.push(coffe)
      } else {
        draft[coffeAllReadyExists].quantity += coffe.quantity
      }
    })

    setCartItems(NewCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increment' | 'decrement',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeExistInCart > 0) {
        const item = draft[coffeExistInCart]
        draft[coffeExistInCart].quantity =
          type === 'increment' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeToCart,
        cartQuantity,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
