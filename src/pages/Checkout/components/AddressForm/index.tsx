import {
  AddressFormContainer,
  FormHeader,
  FormHeaderInfo,
  InputsWrapper,
  ZipCodeInput,
  StreetInput,
  NumberInput,
  ComplementInput,
  NeighborhoodInput,
  CityInput,
  StateInput,
} from './styles'
import { MapPinLine } from 'phosphor-react'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <FormHeader>
        <MapPinLine size={22} />

        <FormHeaderInfo>
          <span> Endereço de entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </FormHeaderInfo>
      </FormHeader>

      <InputsWrapper>
        <ZipCodeInput type="number" placeholder="CEP" />
        <StreetInput type="text" placeholder="Rua" />
        <NumberInput type="number" placeholder="Número" />
        <ComplementInput type="text" placeholder="Complemento" />
        <NeighborhoodInput type="text" placeholder="Bairro" />
        <CityInput type="text" placeholder="Cidade" />
        <StateInput type="text" placeholder="UF" />
      </InputsWrapper>
    </AddressFormContainer>
  )
}
