import styled from 'styled-components'

export const PaymentInfoContainer = styled.article`
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
  }

  .radio-custom {
    visibility: hidden;
    appearance: none;
  }

  .radio-custom:checked ~ label {
    color: ${(props) => props.theme['purple-300']};
    border: 1px solid ${(props) => props.theme['purple-300']};
    background-color: ${(props) => props.theme['purple-100']};
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;

    padding: 1rem 0.5rem;
    border-radius: 8px;

    font-size: 0.9rem;

    background-color: ${(props) => props.theme['gray-300']};
    border: 1px solid transparent;

    cursor: pointer;
  }

  .input-group {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .text-group-field {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }

  .inner-block {
    display: flex;
    flex: 1;
  }
`
