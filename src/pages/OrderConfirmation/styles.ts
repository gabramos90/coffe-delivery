import styled from 'styled-components'

export const OrderConfirmationContainer = styled.main`
  margin-top: 5rem;

  div {
    h1 {
      color: ${(props) => props.theme['yellow-600']};
    }

    p {
      color: ${(props) => props.theme['gray-800']};
    }
  }
`
export const UserInformations = styled.article`
  display: flex;
  gap: 6.5rem;
  align-items: center;

  margin-top: 2.5rem;

  .userInfo {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    border: 1px solid ${(props) => props.theme['yellow-600']};

    border-radius: 6px 36px;

    div {
      display: flex;

      gap: 0.5rem;
    }
  }
`
