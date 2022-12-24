import styled from 'styled-components'

export const CoffeCartContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  padding: 1.5rem 0;

  img {
    width: 5rem;
  }

  border-bottom: 1px solid ${(props) => props.theme['gray-300']};

  .handleButtons {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-top: 0.75rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      padding: 0.5rem;

      border-radius: 6px;
      background-color: ${(props) => props.theme['gray-100']};

      button {
        display: flex;
        align-items: center;

        svg {
          color: ${(props) => props.theme['purple-300']};
        }
      }

      .trashButton {
        font-size: 0.7rem;
      }
    }
  }

  .productPrice {
    display: flex;
    flex: 1;
    flex-direction: row-reverse;
    align-items: flex-end;
    margin-bottom: 3.1rem;

    font-weight: bold;
  }
`
