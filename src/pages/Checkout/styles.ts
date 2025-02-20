import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 1.25rem;
  margin: 2.5rem 0;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }

  @media (min-width: 853px) and (max-width: 912px) {
    gap: 1.5rem;
  }

  @media (min-width: 1280px) {
    padding: 0;
    justify-content: center;
    gap: 2rem;
  }
`

const BaseContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`

export const CompleteOrder = styled(BaseContent)``

export const FinishCheckout = styled(BaseContent)``

export const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem;
`

export const EmptyCartContent = styled.div`
  max-width: 25rem;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme['base-text']};
    font-size: 1.125rem;
  }

  button {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    border: none;
    color: ${(props) => props.theme['white']};
    background-color: ${(props) => props.theme['purple']};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['purple-dark']};
      transition: background-color 0.2s;
    }
  }
`
