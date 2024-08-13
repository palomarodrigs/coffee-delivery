import { HomeContainer, HomeWrapper } from './styles'

import { Hero } from './components/Hero'
import { CoffeeCatalog } from './components/CoffeeCatalog'

export function Home() {
  return (
    <HomeContainer>
      <Hero />

      <HomeWrapper>
        <CoffeeCatalog />
      </HomeWrapper>
    </HomeContainer>
  )
}
