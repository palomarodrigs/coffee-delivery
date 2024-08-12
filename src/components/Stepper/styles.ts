import styled from 'styled-components'

export const StepperContainer = styled.div`
  height: 2.5rem;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: 6px;
  color: ${(props) => props.theme['base-title']};
  background-color: ${(props) => props.theme['base-button']};

  button {
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
      transition: 0.2s;
    }
  }
`
