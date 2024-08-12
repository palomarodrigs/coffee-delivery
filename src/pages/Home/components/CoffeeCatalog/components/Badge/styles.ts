import styled from 'styled-components'

export const BadgeContainer = styled.div`
  padding: 0.25rem 0.5rem;

  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  border-radius: 9999px;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
`
