import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.25rem;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  @media (min-width: 1300px) {
    padding: 2rem 10rem;
  }
`

export const Location = styled.div`
  width: 9rem;
  padding: 0.625rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-light']};

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const CartButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;

  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};

  color: ${(props) => props.theme['yellow-dark']};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['yellow-light']};
    transition: 0.3s;
  }
`
