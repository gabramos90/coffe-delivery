import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  button {
    all: unset;
    cursor: pointer;
  }

  display: grid;
  grid-template-columns: 640px 1fr;

  gap: 2rem;
  align-items: flex-start;

  color: ${(props) => props.theme['gray-800']};
`

export const AndressAndPayment = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const AdressInfo = styled.article`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-200']};

  border-radius: 6px;

  margin-top: -0.5rem;

  header {
    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme['yellow-600']};
    }

    div {
      p:last-child {
        font-size: 0.75rem;
        margin-top: 0.125rem;
      }
    }
  }

  form {
    input {
      height: 2.625rem;

      border: 0;
      border-radius: 6px;
      padding: 0.75rem;
    }

    .cep {
      width: 12.5rem;
      display: block;
      margin-bottom: 1rem;
    }

    .rua {
      display: block;
      width: 100%;
      margin-bottom: 1rem;
    }

    .numero {
      width: 12.5rem;
      margin-bottom: 1rem;
      margin-right: 0.75rem;
    }

    .complemento {
      width: 348px;
    }

    .bairro {
      width: 12.5rem;
      margin-right: 0.75rem;
    }

    .cidade {
      width: 17.25rem;
      margin-right: 0.75rem;
    }

    .uf {
      width: 3.75rem;
    }
  }
`

export const PaymentInfo = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-200']};

  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme['purple-300']};
    }

    div {
      p:last-child {
        font-size: 0.75rem;
        margin-top: 0.125rem;
      }
    }
  }

  form {
    display: flex;
    gap: 0.75rem;
    cursor: pointer;

    button {
      display: flex;
      align-items: center;
      flex: 1;
      gap: 0.75rem;
      padding: 1rem;

      border: 0;
      border-radius: 8px;
      background-color: ${(props) => props.theme['gray-100']};

      line-height: none;
      font-size: 0.75rem;
      cursor: pointer;

      &:checked {
        background-color: red;
      }

      input {
        display: none;
      }

      svg {
        line-height: 0;
        color: ${(props) => props.theme['purple-300']};
      }

      label {
        cursor: pointer;
        text-align: center;
      }
    }
  }
`

export const CheckoutSummary = styled.aside`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-200']};

  border-radius: 6px;

  margin-top: 1rem;
`

export const PriceAndDelivery = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;

  padding-top: 1.5rem;

  .priceSummary {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div {
      display: flex;
      justify-content: space-between;

      strong {
        font-size: 1.25rem;
      }
    }
  }

  button {
    display: flex;
    justify-content: center;

    margin-top: 1.5rem;
    padding: 0.8rem;
    border-radius: 6px;

    font-size: 0.875rem;

    background-color: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme.white};
  }
`
