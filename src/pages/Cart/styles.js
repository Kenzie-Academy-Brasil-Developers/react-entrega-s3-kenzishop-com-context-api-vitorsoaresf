import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  li {
    button {
      background-color: var(--red);

      :hover {
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 1rem;
      font-weight: 600;
      color: var(--grey-50);
    }
    img {
      width: 90%;
      height: 90%;
    }

    @media (min-width: 768px) {
      p {
        font-size: 2rem;
      }
    }
  }
`;
