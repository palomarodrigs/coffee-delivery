import { CheckoutContainer, CompleteOrder, FinishCheckout } from './styles'

import { Cart } from './components/Cart'
import { AddressForm } from './components/AddressForm'
import { PaymentMethod } from './components/PaymentMethod'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <PaymentMethod />
      </CompleteOrder>

      <FinishCheckout>
        <h2>Café selecionado</h2>
        <Cart />
      </FinishCheckout>
    </CheckoutContainer>
  )
}
