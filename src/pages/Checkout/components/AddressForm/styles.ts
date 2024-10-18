import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const FormHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['yellow-dark']};
  margin-bottom: 2rem;
`

export const FormHeaderInfo = styled.div`
  span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

export const InputBase = styled.input`
  width: 100%;
  padding: 0.75rem;

  border: none;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};

  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-input']};

  &::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const ZipCodeInput = styled(InputBase)`
  width: 100%;

  @media (min-width: 1024px) {
    width: 12.5rem;
  }
`

export const StreetInput = styled(InputBase)`
  width: 100%;
`

export const NumberInput = styled(InputBase)`
  width: 100%;

  @media (min-width: 1024px) {
    width: 12.5rem;
  }
`

export const ComplementInput = styled(InputBase)`
  width: 100%;

  @media (min-width: 1024px) {
    width: 21.75rem;
  }
`

export const NeighborhoodInput = styled(InputBase)`
  width: 100%;

  @media (min-width: 1024px) {
    width: 12.5rem;
  }
`

export const CityInput = styled(InputBase)`
  width: 100%;

  @media (min-width: 1024px) {
    width: 17rem;
  }
`

export const StateInput = styled(InputBase)`
  width: 100%;

  @media (min-width: 1024px) {
    width: 4rem;
  }
`
