import styled from 'styled-components'
import backgroundImage from '../../assets/background.png'

export const HomeContainer = styled.main``

export const MainBannerContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding-top: 5rem;
  padding-bottom: 5rem;

  background: ${() => `url(${backgroundImage}) no-repeat center`};
  background-size: cover;
`

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  color: ${(props) => props.theme['gray-900']};

  h1 {
    font-size: 3rem;
    line-height: 130%;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 400;
  }
`

export const Subheadline = styled.h3`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;
    font-weight: 400;

    svg {
      margin-bottom: 2px;

      padding: 0.4rem;
      border-radius: 50%;

      color: ${(props) => props.theme.white};

      &.cart {
        background-color: ${(props) => props.theme['yellow-600']};
      }
      &.clock {
        background-color: ${(props) => props.theme['gray-600']};
      }
      &.boudingbox {
        background-color: ${(props) => props.theme['yellow-300']};
      }
      &.coffe {
        background-color: ${(props) => props.theme['purple-600']};
      }
    }
  }
`

export const ProductsContainer = styled.section`
  padding: 2rem 0;

  h4 {
    margin-bottom: 3.375rem;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-900']};
  }
`
export const CardProductContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`
