import { Minus, Plus } from 'phosphor-react'
import { StepperContainer } from './styles'

export function Stepper() {
  return (
    <StepperContainer>
      <button>
        <Minus size={14} />
      </button>

      <span>1</span>

      <button>
        <Plus size={14} />
      </button>
    </StepperContainer>
  )
}
