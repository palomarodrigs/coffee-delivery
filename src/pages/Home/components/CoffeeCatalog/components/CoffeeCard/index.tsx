import { useContext, useState } from 'react'
import { CartContext } from '../../../../../../contexts/CartContext'

import {
  Actions,
  Buy,
  CartButton,
  CoffeeCardContainer,
  CoffeeCardWrapper,
  Description,
  Price,
  Tags,
} from './styles'
import { ShoppingCartSimple } from 'phosphor-react'

import { Badge } from '../Badge'
import { Stepper } from '../../../../../../components/Stepper'

export interface Coffee {
  id: number
  name: string
  price: number
  tags?: string[]
  image?: string
  description: string
}

interface ICoffeeCardProps {
  coffees: Coffee[]
}

export function CoffeeCard({ coffees }: ICoffeeCardProps) {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({})

  const { items, addItem, increment } = useContext(CartContext)

  const handleIncrement = (coffeeId: number) => {
    setQuantities(prev => ({
      ...prev,
      [coffeeId]: (prev[coffeeId] || 0) + 1
    }))
  }

  const handleDecrement = (coffeeId: number) => {
    setQuantities(prev => ({
      ...prev,
      [coffeeId]: Math.max((prev[coffeeId] || 0) - 1, 0)
    }))
  }

  const handleAddToCart = (coffee: Coffee) => {
    const cartItem = items.find((item) => item.id === coffee.id)
    const quantity = quantities[coffee.id] || 0

    if (cartItem) {
      for (let i = 0; i < quantity; i++) {
        increment(coffee.id)
      }
    } else {
      addItem({
        id: coffee.id,
        name: coffee.name,
        price: coffee.price,
        quantity: quantity || 1,
        image: coffee.image,
      })
    }

    setQuantities(prev => ({
      ...prev,
      [coffee.id]: 0
    }))

    alert(`${quantity || 1}x ${coffee.name} foi adicionado ao carrinho.`)
  }

  return (
    <CoffeeCardContainer>
      {coffees.map((coffee) => {
        const quantity = quantities[coffee.id] || 0
        
        return (
          <CoffeeCardWrapper key={coffee.id}>
            <img src={coffee.image} alt={coffee.name} />

            <Tags>
              {coffee?.tags?.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </Tags>

            <h3>{coffee.name}</h3>
            <Description>{coffee.description}</Description>

            <Buy>
              <Price>
                R$ <span>{coffee.price.toFixed(2).replace('.', ',')}</span>
              </Price>

              <Actions>
                <Stepper
                  quantity={quantity}
                  onIncrement={() => handleIncrement(coffee.id)}
                  onDecrement={() => handleDecrement(coffee.id)}
                />

                <CartButton onClick={() => handleAddToCart(coffee)}>
                  <ShoppingCartSimple size={22} />
                </CartButton>
              </Actions>
            </Buy>
          </CoffeeCardWrapper>
        )
      })}
    </CoffeeCardContainer>
  )
}
