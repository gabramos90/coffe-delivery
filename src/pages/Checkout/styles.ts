import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 640px 1fr;

  gap: 2rem;
  align-items: flex-start;
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
`

export const PaymentInfo = styled.article`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-200']};

  border-radius: 6px;
`

export const CheckoutSummary = styled.aside`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-200']};

  border-radius: 6px;
`
