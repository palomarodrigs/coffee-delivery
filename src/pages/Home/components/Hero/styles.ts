import styled from 'styled-components'
import HeroBackground from '../../../../assets/hero-background.png'

export const HeroContainer = styled.div`
  width: 100%;
  height: 34rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
  padding: 0 1.25rem;

  background: url(${HeroBackground}) center/cover no-repeat;

  img {
    width: 15rem;
  }

  @media (max-width: 390px) {
    img {
      width: 13rem;
    }
  }

  @media (min-width: 768px) and (max-width: 820px) {
    flex-direction: row;
    gap: 3.5rem;

    img {
      width: 20rem;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 3.5rem;

    img {
      width: 29rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img {
      width: 22rem;
    }
  }
`

export const HeroContent = styled.div`
  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (min-width: 1024px) {
    h1,
    p {
      width: 36rem;
    }

    h1 {
      font-size: 3rem;
    }
  }
`

export const ProductBenefits = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'compra embalagem'
    'entrega cafe';
  gap: 1.25rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
  }
`

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:nth-child(1) {
    grid-area: compra;
  }

  &:nth-child(2) {
    grid-area: entrega;
  }

  &:nth-child(3) {
    grid-area: embalagem;
  }

  &:nth-child(4) {
    grid-area: cafe;
  }
`

const ICON_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface IconProps {
  $iconColor: keyof typeof ICON_COLORS
}

export const Icon = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[ICON_COLORS[props.$iconColor]]};
`
