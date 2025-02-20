import { useContext, useState, useEffect } from 'react'

import { CartContext } from '../../../../contexts/CartContext'

import { Option, Options, PaymentMethodContainer, PaymentMethodHeader } from './styles'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

export function PaymentMethod() {
  const { paymentMethod, onPaymentMethodChange } = useContext(CartContext)
  const [selectedMethod, setSelectedMethod] = useState(paymentMethod)

  useEffect(() => {
    setSelectedMethod(paymentMethod)
  }, [paymentMethod])

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method)
    onPaymentMethodChange(method)
  }

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
        <Option
          onClick={() => handleSelectMethod('credit')}
          selected={selectedMethod === 'credit'}
        >
          <CreditCard size={20} />
          <p>Cartão de Crédito</p>
        </Option>

        <Option
          onClick={() => handleSelectMethod('debit')}
          selected={selectedMethod === 'debit'}
        >
          <Bank size={20} />
          <p>Cartão de Débito</p>
        </Option>

        <Option
          onClick={() => handleSelectMethod('cash')}
          selected={selectedMethod === 'cash'}
        >
          <Money size={20} />
          <p>Dinheiro</p>
        </Option>
      </Options>
    </PaymentMethodContainer>
  )
}
