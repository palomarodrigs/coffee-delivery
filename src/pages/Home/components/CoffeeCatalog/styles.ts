import styled from 'styled-components'

export const CoffeeCatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (min-width: 768px) {
    align-items: self-start;
  }
`
