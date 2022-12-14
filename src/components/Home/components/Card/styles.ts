import styled from 'styled-components'

export const CardContainer = styled.article`
  button {
    all: unset;
    cursor: pointer;
  }

  width: 16rem;

  padding: 1.25rem;

  border-radius: 6px 36px;

  background-color: ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme['gray-900']};
`

export const CardDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: -3rem;

  text-align: center;

  img {
    width: 7.5rem;
  }

  span {
    padding: 0.3rem;

    font-size: 0.625rem;
    font-weight: bold;

    border-radius: 8px;

    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-600']};
  }

  h5 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;

    color: ${(props) => props.theme['gray-600']};
  }
`

export const CardAddToCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;

  span {
    &.dollarSign {
      font-size: 0.875rem;
      margin-right: 0.2rem;
    }

    &.productPrice {
      font-family: 'Baloo 2', cursive;
      font-size: 1.625rem;

      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const AddToCartAndQuantity = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    &.quantitySelector {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      padding: 0.6rem;
      border-radius: 8px;

      background-color: ${(props) => props.theme['purple-100']};

      button {
        line-height: 0;
        svg {
          color: ${(props) => props.theme['purple-600']};
        }
      }
    }
  }

  button {
    &.addToCartButton {
      padding: 0.5rem;
      border-radius: 8px;

      background-color: ${(props) => props.theme['purple-600']};
      color: ${(props) => props.theme.white};

      line-height: 0;
    }
  }
`
