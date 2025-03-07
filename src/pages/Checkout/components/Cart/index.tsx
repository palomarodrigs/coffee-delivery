import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

import { useNavigate } from 'react-router-dom'

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

interface ICoffee {
  id: number
  name: string
  price: number
  quantity: number
}

type OrderStatus = 'default' | 'processing' | 'confirming' | 'confirmed'

const buttonTexts = {
  default: 'Confirmar Pedido',
  processing: 'Processando pagamento...',
  confirming: 'Confirmando...',
  confirmed: 'Pedido Confirmado!',
}

export function Cart() {
  const [orderStatus, setOrderStatus] = useState<OrderStatus>('default')

  const {
    items,
    addItem,
    removeItem,
    increment,
    decrement,
    cartTotal,
    confirmOrder,
    clearCart,
  } = useContext(CartContext)

  const navigate = useNavigate()

  const handleIncrement = (coffee: ICoffee) => {
    const cartItem = items.find((item) => item.id === coffee.id)

    if (cartItem) {
      increment(coffee.id)
    } else {
      addItem({
        id: coffee.id,
        name: coffee.name,
        price: coffee.price,
        quantity: 1,
      })
    }
  }

  const handleDecrement = (coffeeId: number) => {
    const cartItem = items.find((item) => item.id === coffeeId)

    if (cartItem) {
      decrement(coffeeId)
    }
  }

  const handleRemoveItem = (coffeeId: number) => {
    const confirmRemoval = window.confirm(
      'Tem certeza que deseja remover este item do carrinho?',
    )

    if (confirmRemoval) {
      removeItem(coffeeId)
    }
  }

  const handleConfirmOrder = () => {
    setOrderStatus('processing')

    setTimeout(() => {
      setOrderStatus('confirming')

      setTimeout(() => {
        confirmOrder()
        setOrderStatus('confirmed')

        setTimeout(() => {
          navigate('/success')
          clearCart()
        }, 2000)
      }, 2000)
    }, 2000)
  }

  return (
    <CartContainer>
      {items.map((item) => (
        <div key={item.id}>
          <CartItem>
            <img src={item.image} alt={item.name} />

            <Details>
              <p>{item.name}</p>

              <Actions>
                <Stepper
                  quantity={item.quantity}
                  onIncrement={() => handleIncrement(item)}
                  onDecrement={() => handleDecrement(item.id)}
                />
                <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                  <Trash size={20} />
                  <span>Remover</span>
                </RemoveButton>
              </Actions>
            </Details>

            <Price>R$ {item.price.toFixed(2).replace('.', ',')}</Price>
          </CartItem>

          <Divider />
        </div>
      ))}

      <Summary>
        <TotalPrice>
          <p>Total de itens</p>
          <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
        </TotalPrice>

        <TotalPrice>
          <p>Entrega</p>
          <span>R$ 3,50</span>
        </TotalPrice>

        <TotalPrice>
          <strong>Total</strong>
          <strong>R$ {(cartTotal + 3.5).toFixed(2).replace('.', ',')}</strong>
        </TotalPrice>
      </Summary>
      <ConfirmOrderButton
        onClick={handleConfirmOrder}
        disabled={orderStatus !== 'default'}
        $isConfirmed={orderStatus === 'confirmed'}
      >
        {buttonTexts[orderStatus]}
      </ConfirmOrderButton>
    </CartContainer>
  )
}
