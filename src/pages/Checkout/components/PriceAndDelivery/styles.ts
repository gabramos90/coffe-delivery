import styled from 'styled-components'

export const PriceAndDeliveryContainer = styled.div`
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

  a {
    display: flex;
    justify-content: center;

    margin-top: 1.5rem;
    padding: 0.8rem;
    border-radius: 6px;

    font-size: 0.875rem;
    text-decoration: none;

    background-color: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme.white};

  }
`
