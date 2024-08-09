import { CartButton, HeaderContainer, Location } from './styles'

import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} />

      <nav>
        <Location>
          <MapPin size={22} />
          <p>Porto Alegre, RS</p>
        </Location>

        <CartButton>
          <ShoppingCart size={22} />
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
