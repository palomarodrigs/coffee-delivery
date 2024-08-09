import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Benefit, ProductBenefits, HeroContainer, HeroContent, Icon } from './styles'

import CupCoffee from '../../../../assets/cup-coffee.png'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <ProductBenefits>
          <Benefit>
            <Icon $iconColor="yellow-dark">
              <ShoppingCart />
            </Icon>
            Compra simples e segura
          </Benefit>

          <Benefit>
            <Icon $iconColor="yellow">
              <Timer />
            </Icon>
            Entrega rápida e rastreada
          </Benefit>

          <Benefit>
            <Icon $iconColor="gray">
              <Package />
            </Icon>
            Embalagem mantém o café intacto
          </Benefit>

          <Benefit>
            <Icon $iconColor="purple">
              <Coffee />
            </Icon>
            O café chega fresquinho até você
          </Benefit>
        </ProductBenefits>
      </HeroContent>

      <img src={CupCoffee} />
    </HeroContainer>
  )
}
