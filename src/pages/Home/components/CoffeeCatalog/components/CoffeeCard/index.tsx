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

import { coffees } from './data'

import { Badge } from '../Badge'
import { Stepper } from '../../../../../../components/Stepper'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      {coffees.map((coffee) => (
        <CoffeeCardWrapper key={coffee.name}>
          <img src={coffee.image} alt={coffee.name} />

          <Tags>
            {coffee.tags.map((tag) => (
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
              <Stepper />

              <CartButton>
                <ShoppingCartSimple size={22} />
              </CartButton>
            </Actions>
          </Buy>
        </CoffeeCardWrapper>
      ))}
    </CoffeeCardContainer>
  )
}
