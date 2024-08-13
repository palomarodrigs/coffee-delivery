import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeCatalogContainer } from './styles'

export function CoffeeCatalog() {
  return (
    <CoffeeCatalogContainer>
      <h2>Nossos Cafés</h2>

      <CoffeeCard />
    </CoffeeCatalogContainer>
  )
}
