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
