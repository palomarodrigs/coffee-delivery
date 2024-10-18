import {
  CartContainer,
  CartItem,
  Price,
  Details,
  Actions,
  Divider,
  RemoveButton,
  Summary,
  TotalPrice,
  ConfirmOrderButton,
} from './styles'
import { Trash } from 'phosphor-react'

import { Stepper } from '../../../../components/Stepper'

import AmericanCoffee from '../../../../assets/american-coffee.png'

export function Cart() {
  return (
    <CartContainer>
      <CartItem>
        <img src={AmericanCoffee} />

        <Details>
          <p>Americano</p>

          <Actions>
            <Stepper />
            <RemoveButton>
              <Trash size={20} />
              <span>Remover</span>
            </RemoveButton>
          </Actions>
        </Details>

        <Price>R$ 9,90</Price>
      </CartItem>

      <Divider />

      <CartItem>
        <img src={AmericanCoffee} />

        <Details>
          <p>Americano</p>
          <Actions>
            <Stepper />
            <RemoveButton>
              <Trash size={20} />
              <span>Remover</span>
            </RemoveButton>
          </Actions>
        </Details>

        <Price>R$ 9,90</Price>
      </CartItem>

      <Divider />

      <Summary>
        <TotalPrice>
          <p>Total de itens</p>
          <span>R$ 29,70</span>
        </TotalPrice>

        <TotalPrice>
          <p>Entrega</p>
          <span>R$ 3,50</span>
        </TotalPrice>

        <TotalPrice>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </TotalPrice>
      </Summary>

      <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
    </CartContainer>
  )
}
