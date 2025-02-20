import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CartContext } from '../../../../contexts/CartContext'

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

const addressSchema = z.object({
  zipCode: z.string().min(8, 'CEP inválido'),
  street: z.string().min(3, 'Rua é obrigatória'),
  number: z.coerce.number().positive('Número inválido'),
  complement: z.string().optional(),
  neighborhood: z.string().min(3, 'Bairro é obrigatório'),
  city: z.string().min(2, 'Cidade é obrigatória'),
  state: z.string().length(2, 'UF deve ter 2 letras'),
})

type AddressFormInputs = z.infer<typeof addressSchema>

export function AddressForm() {
  const [zipCode, setZipCode] = useState('')

  const { address, setAddress } = useContext(CartContext)

  const {
    register,
    watch,
    setValue,
  } = useForm<AddressFormInputs>({
    resolver: zodResolver(addressSchema),
  })

  const formData = watch()

  const maskZipCode = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{5})(\d{3})/, '$1-$2')
  }

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedZipCode = maskZipCode(e.target.value)
    setZipCode(maskedZipCode)
    setValue('zipCode', maskedZipCode)
  }

  useEffect(() => {
    if (JSON.stringify(formData) !== JSON.stringify(address)) {
      setAddress(formData)
    }
  }, [formData, setAddress, address])

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
        <ZipCodeInput
          {...register('zipCode')}
          value={zipCode}
          onChange={handleZipCodeChange}
          placeholder="CEP"
          maxLength={10}
        />
        <StreetInput {...register('street')} placeholder="Rua" />
        <NumberInput
          {...register('number', { valueAsNumber: true })}
          type="number"
          placeholder="Número"
        />
        <ComplementInput {...register('complement')} placeholder="Complemento" />
        <NeighborhoodInput {...register('neighborhood')} placeholder="Bairro" />
        <CityInput {...register('city')} placeholder="Cidade" />
        <StateInput {...register('state')} placeholder="UF" />
      </InputsWrapper>
    </AddressFormContainer>
  )
}
