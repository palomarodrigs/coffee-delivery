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
