import { createContext, ReactNode, useEffect, useReducer } from 'react'

import { CartItem, itemsReducer } from '../../reducers/items/reducer'
import {
  addItemAction,
  decrementAction,
  incrementAction,
  removeItemAction,
} from '../../reducers/items/actions'

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  increment: (id: number) => void
  decrement: (id: number) => void
  cartTotal: number
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, dispatch] = useReducer(itemsReducer, [], () => {
    const storedItems = localStorage.getItem('@coffee-delivery:cartItems')
    return storedItems ? JSON.parse(storedItems) : []
  })

  const addItem = (item: CartItem) => {
    dispatch(addItemAction(item))
  }

  const removeItem = (id: number) => {
    dispatch(removeItemAction(id))
  }

  const increment = (id: number) => {
    dispatch(incrementAction(id))
  }

  const decrement = (id: number) => {
    dispatch(decrementAction(id))
  }

  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:cartItems', JSON.stringify(items))
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        increment,
        decrement,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
