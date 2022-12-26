import produce from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'

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
  removeCartItem: (cartItemId: number) => void
  cartItemsTotal: number
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFE_ITEMS_STORAGE_KEY = 'coffeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storageCardItems = localStorage.getItem(COFFE_ITEMS_STORAGE_KEY)
    if (storageCardItems) {
      return JSON.parse(storageCardItems)
    }

    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

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

      if (coffeExistInCart >= 0) {
        const item = draft[coffeExistInCart]
        draft[coffeExistInCart].quantity =
          type === 'increment' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeExistInCart >= 0) {
        draft.splice(coffeExistInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeCartItem,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
