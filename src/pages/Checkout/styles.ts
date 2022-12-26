import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  button {
    all: unset;
    cursor: pointer;
  }
  .formProvider {
    display: grid;
    grid-template-columns: 640px 1fr;

    gap: 2rem;
    align-items: flex-start;

    color: ${(props) => props.theme['gray-800']};
  }
`

export const AndressAndPayment = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CoffeCardContainer = styled.div`
  max-height: 19.7rem;
  overflow: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme['gray-300']};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['yellow-300']};
    border-radius: 10px;
  }
`

export const CheckoutSummary = styled.aside`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-200']};

  border-radius: 6px;

  margin-top: 1rem;
`
