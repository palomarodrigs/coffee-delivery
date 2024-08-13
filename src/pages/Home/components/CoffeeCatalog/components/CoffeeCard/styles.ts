import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) and (max-width: 853px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 912px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const CoffeeCardWrapper = styled.div`
  width: 16rem;
  height: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme['base-card']};

  img {
    width: 7.5rem;
    margin: -2.5rem 0 0;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0.75rem 0 1rem;
`

export const Description = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
`

export const Buy = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const Price = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CartButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;

  border: none;
  border-radius: 6px;

  color: ${(props) => props.theme['base-card']};
  background-color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['purple']};
    transition: 0.2s;
  }
`
