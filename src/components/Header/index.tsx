import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { Link } from 'react-router-dom'

import { CartButton, CartCount, HeaderContainer, Location } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  const { items } = useContext(CartContext)

  const itemCount = items.length

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
            <CartCount>
              {itemCount}
            </CartCount>
            <ShoppingCart size={22} />
          </CartButton>
        </Link>
      </nav>
    </HeaderContainer>
  )
}
