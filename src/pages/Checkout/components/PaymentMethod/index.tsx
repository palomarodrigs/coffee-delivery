import { Option, Options, PaymentMethodContainer, PaymentMethodHeader } from './styles'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <PaymentMethodHeader>
        <CurrencyDollar size={20} />
        <div>
          <span>Pagamento</span>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </PaymentMethodHeader>

      <Options>
        <Option>
          <CreditCard size={20} />
          <p>Cartão de Crédito</p>
        </Option>

        <Option>
          <Bank size={20} />
          <p>Cartão de Débito</p>
        </Option>

        <Option>
          <Money size={20} />
          <p>Dinheiro</p>
        </Option>
      </Options>
    </PaymentMethodContainer>
  )
}
