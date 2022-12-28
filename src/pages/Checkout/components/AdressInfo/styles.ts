import styled from 'styled-components'

export const AdressInfoContainer = styled.article`
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
    div {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    span {
      position: absolute;
      font-size: 0.875rem;
      color: red;
    }

    input {
      height: 2.625rem;

      border: 1px solid transparent;
      border-radius: 6px;
      padding: 0.75rem;

      &:focus {
        border: 1px solid ${(props) => props.theme['yellow-600']};
      }
    }

    .cep {
      width: 12.5rem;
      display: block;
      margin-bottom: 1rem;
    }

    .rua {
      display: inline;
      width: 100%;
      margin-bottom: 1rem;
    }

    .numero {
      width: 12.5rem;
      margin-bottom: 1rem;
      margin-right: 0.75rem;
    }

    .complemento {
      width: 300px;
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
