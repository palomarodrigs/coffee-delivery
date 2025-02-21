import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import {
  ConfirmedOrderContainer,
  ConfirmedOrderHeader,
  Info,
  OrderDetails,
  OrderDetailsWrapper,
  OrderInfo,
} from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import Delivery from '../../assets/delivery.svg'

export function ConfirmedOrder() {
  const { address, paymentMethod } = useContext(CartContext)

  return (
    <ConfirmedOrderContainer>
      <OrderInfo>
        <ConfirmedOrderHeader>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </ConfirmedOrderHeader>

        <OrderDetails>
          <OrderDetailsWrapper>
            <Info $infoColor="purple">
              <div>
                <MapPin size={16} />
              </div>
              <p>
                Entrega em{' '}
                <span>
                  {address?.street}, {address?.number}
                </span>
                <br />
                {address?.neighborhood} - {address?.city}, {address?.state}
              </p>
            </Info>

            <Info $infoColor="yellow">
              <div>
                <Timer size={16} />
              </div>
              <p>
                Previsão de entrega
                <br />
                <span>20 min - 30 min</span>
              </p>
            </Info>

            <Info $infoColor="yellow_dark">
              <div>
                <CurrencyDollar size={16} />
              </div>
              <p>
                Pagamento na entrega
                <br />
                <span>
                  {paymentMethod === 'credit'
                    ? 'Cartão de Crédito'
                    : paymentMethod === 'debit'
                    ? 'Cartão de Débito'
                    : 'Dinheiro'}
                </span>
              </p>
            </Info>
          </OrderDetailsWrapper>
        </OrderDetails>
      </OrderInfo>

      <img src={Delivery} />
    </ConfirmedOrderContainer>
  )
}
