import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { CheckoutContainer, CompleteOrder, FinishCheckout } from './styles'

import { Cart } from './components/Cart'
import { AddressForm } from './components/AddressForm'
import { PaymentMethod } from './components/PaymentMethod'

export function Checkout() {
  const { items } = useContext(CartContext)
  
  const itemCount = items.length
  const itemText = itemCount === 1 ? 'Café selecionado' : 'Cafés selecionados'

  return (
    <CheckoutContainer>
      <CompleteOrder>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <PaymentMethod />
      </CompleteOrder>

      <FinishCheckout>
        <h2>{itemText}</h2>
        <Cart />
      </FinishCheckout>
    </CheckoutContainer>
  )
}
