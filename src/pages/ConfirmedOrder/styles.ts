import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  padding: 1.25rem;
  margin: 2.5rem 0;

  img {
    width: 20rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }

  @media (min-width: 1280px) {
    padding: 0;
    flex-direction: row;
    justify-content: center;
    gap: 6rem;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const ConfirmedOrderHeader = styled.div`
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 375px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`

export const OrderDetails = styled.div`
  padding: 1px;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(45deg, #dbac2c, #8047f8);
`

export const OrderDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: #fff;
  border-radius: 6px 36px 6px 36px;

  @media (min-width: 1024px) {
    width: 32rem;
  }
`

const INFO_COLORS = {
  purple: 'purple',
  yellow: 'yellow',
  yellow_dark: 'yellow-dark',
} as const

interface InfoProps {
  $infoColor: keyof typeof INFO_COLORS
}

export const Info = styled.div<InfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: 0.875rem;
    font-weight: bold;
  }

  div {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    color: #fff;
    border-radius: 9999px;
    background: ${(props) => props.theme[INFO_COLORS[props.$infoColor]]};
  }
`
