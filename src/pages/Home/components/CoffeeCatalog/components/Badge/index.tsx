import { BadgeContainer } from './styles'

interface BadgeProps {
  children: React.ReactNode
}

export function Badge({ children }: BadgeProps) {
  return <BadgeContainer>{children}</BadgeContainer>
}
