import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;

  div {
    display: flex;
    gap: 1rem;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      border-radius: 6px;
      padding: 0.5rem;

      background-color: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['purple-600']};
    }

    a {
      display: flex;
      align-items: center;

      border-radius: 6px;
      padding: 0.5rem;

      background-color: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-600']};
    }

    svg {
      margin-bottom: 2px;
    }
  }
`
