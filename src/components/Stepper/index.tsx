import { Minus, Plus } from 'phosphor-react'
import { StepperContainer } from './styles'

interface StepperProps {
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
}

export function Stepper({ quantity, onIncrement, onDecrement }: StepperProps) {
  return (
    <StepperContainer>
      <button onClick={onDecrement} disabled={quantity === 0}>
        <Minus size={14} />
      </button>

      <span>{quantity}</span>

      <button onClick={onIncrement}>
        <Plus size={14} />
      </button>
    </StepperContainer>
  )
}
