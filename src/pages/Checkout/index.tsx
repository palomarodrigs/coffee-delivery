import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import {
  CheckoutContainer,
  CompleteOrder,
  EmptyCartContainer,
  EmptyCartContent,
  FinishCheckout,
} from './styles'

import { Cart } from './components/Cart'
import { AddressForm } from './components/AddressForm'
import { PaymentMethod } from './components/PaymentMethod'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const { items } = useContext(CartContext)
  const navigate = useNavigate()

  const itemCount = items.length
  const itemText = itemCount === 1 ? 'Café selecionado' : 'Cafés selecionados'

  if (itemCount === 0) {
    return (
      <EmptyCartContainer>
        <EmptyCartContent>
          <h2>Seu carrinho está vazio</h2>
          <p>Adicione produtos ao seu carrinho para continuar.</p>
          <button onClick={() => navigate('/')}>Adicionar produtos</button>
        </EmptyCartContent>
      </EmptyCartContainer>
    )
  }

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
