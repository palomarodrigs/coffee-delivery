import { useState } from 'react'

import { Minus, Plus } from 'phosphor-react'
import { StepperContainer } from './styles'

export function Stepper() {
  const [value, setValue] = useState(1)

  const increment = () => setValue((prevValue) => prevValue + 1)
  const decrement = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1)
    }
  }

  return (
    <StepperContainer>
      <button onClick={decrement}>
        <Minus size={14} />
      </button>

      <span>{value}</span>

      <button onClick={increment}>
        <Plus size={14} />
      </button>
    </StepperContainer>
  )
}
