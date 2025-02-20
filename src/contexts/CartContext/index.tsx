import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'

import { CartItem, itemsReducer } from '../../reducers/items/reducer'
import {
  addItemAction,
  decrementAction,
  incrementAction,
  removeItemAction,
} from '../../reducers/items/actions'

interface Address {
  zipCode: string
  street: string
  number: number
  complement?: string
  neighborhood: string
  city: string
  state: string
}

interface CartContextType {
  items: CartItem[]
  address: Address | null
  setAddress: (address: Address) => void
  paymentMethod: string
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  increment: (id: number) => void
  decrement: (id: number) => void
  cartTotal: number
  confirmOrder: () => void
  onAddressChange: (address: Address) => void
  onPaymentMethodChange: (method: string) => void
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

  const [address, setAddress] = useState<Address | null>(null)
  const [paymentMethod, setPaymentMethod] = useState('')

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

  const confirmOrder = () => {
    if (
      !address?.zipCode ||
      !address?.street ||
      !address?.number ||
      !address?.neighborhood ||
      !address?.city ||
      !address?.state
    ) {
      alert('Por favor, preencha com o seu endereço antes de confirmar o pedido.')
      return
    }

    if (!paymentMethod) {
      alert('Por favor, selecione um método de pagamento antes de confirmar o pedido.')
      return
    }

    localStorage.setItem('@coffee-delivery:methodPayment', JSON.stringify(paymentMethod))
    localStorage.setItem('@coffee-delivery:address', JSON.stringify(address))
  }

  const onAddressChange = (address: Address) => {
    setAddress(address)
  }

  const onPaymentMethodChange = (method: string) => {
    setPaymentMethod(method)
  }

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:cartItems', JSON.stringify(items))
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        address,
        setAddress,
        paymentMethod,
        addItem,
        removeItem,
        increment,
        decrement,
        cartTotal,
        confirmOrder,
        onAddressChange,
        onPaymentMethodChange,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
