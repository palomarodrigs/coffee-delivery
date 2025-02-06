import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeCatalogContainer } from './styles'

import { coffees } from './components/CoffeeCard/data'

export function CoffeeCatalog() {
  return (
    <CoffeeCatalogContainer>
      <h2>Nossos Cafés</h2>

      <CoffeeCard coffees={coffees} />
    </CoffeeCatalogContainer>
  )
}
