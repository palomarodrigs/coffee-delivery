import { Link } from 'react-router-dom'

import { CartButton, HeaderContainer, Location } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} />

      <nav>
        <Location>
          <MapPin size={22} />
          <p>Porto Alegre, RS</p>
        </Location>

        <Link to="/checkout">
          <CartButton>
            <ShoppingCart size={22} />
          </CartButton>
        </Link>
      </nav>
    </HeaderContainer>
  )
}
