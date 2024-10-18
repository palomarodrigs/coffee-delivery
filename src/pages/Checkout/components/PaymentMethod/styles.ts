import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  width: 100%;
  padding: 1.25rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  @media (min-width: 768px) and (max-width: 820px) {
    width: 22rem;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    width: 38rem;
    padding: 1.5rem;
  }

  @media (min-width: 1280px) {
    width: 40rem;
    padding: 2.5rem;
  }
`

export const PaymentMethodHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme['purple']};
  margin-bottom: 2rem;

  div {
    line-height: 1.4;
    color: ${(props) => props.theme['base-subtitle']};

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const Option = styled.button`
  width: 100%;
  height: 3rem;

  border: none;
  border-radius: 6px;
  text-decoration: none;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem 0.625rem;
  cursor: pointer;

  color: ${(props) => props.theme['purple']};
  background-color: ${(props) => props.theme['base-button']};

  p {
    font-size: 0.875rem;
    white-space: nowrap;
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    filter: brightness(0.9);
    transition: filter 0.2s;
  }
  &:focus {
    border: 1px solid ${(props) => props.theme['purple']};
    background-color: ${(props) => props.theme['purple-light']};
  }

  @media (min-width: 1024px) {
    width: 13rem;
    height: 3.5rem;

    p {
      font-size: 1rem;
    }
  }
`
