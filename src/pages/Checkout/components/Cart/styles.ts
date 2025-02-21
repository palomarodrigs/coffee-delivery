import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;
  padding: 1.25rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme['base-card']};

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 22rem;
    padding: 1.5rem;
  }

  @media (min-width: 1280px) {
    width: 28.5rem;
    padding: 2.5rem;
  }
`

export const CartItem = styled.div`
  display: flex;

  img {
    width: 3rem;
    height: 3rem;
  }

  @media (min-width: 1280px) {
    img {
      width: 4rem;
      height: 4rem;
    }
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 2rem;

  @media (max-width: 375px) {
    margin: 0 1.5rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 1rem;
  }

  @media (min-width: 1280px) {
    margin: 0 3rem 0 1.25rem;
  }
`

export const Price = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ButtonBase = styled.button`
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`

export const RemoveButton = styled(ButtonBase)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['purple']};
  background-color: ${(props) => props.theme['base-button']};

  span {
    display: none;
  }

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['base-hover']};
    transition: all 0.2s;
  }

  @media (min-width: 768px) {
    span {
      display: block;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 1.5rem 0;
  background-color: ${(props) => props.theme['base-button']};
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;

  span {
    font-size: 1rem;
  }

  strong {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmOrderButton = styled(ButtonBase)<{ $isConfirmed: boolean }>`
  width: 100%;
  padding: 0.75rem 0;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme['white']};
  background-color: ${(props) =>
    props.$isConfirmed ? props.theme['green'] : props.theme['yellow']};

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    transition: background-color 0.2s;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`
