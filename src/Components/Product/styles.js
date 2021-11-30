import styled from "styled-components";

export const Container = styled.li`
  /* background-color: whitesmoke; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0;
  border: 0.5px solid var(--grey-50);

  :hover {
    border-bottom: 2px solid var(--grey-50);
  }

  a {
    border-radius: 10px 10px 0 0;
    height: 70px;
    width: 100%;
    margin-top: 0;
    height: 10px;
    font-size: 1rem;
    font-weight: 600;
    color: var(--blue);
    text-decoration: none;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  img {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 10px auto;
  }
  p,
  span,
  a {
    margin-left: 40px;
  }
  p {
    font-style: italic;
    font-size: 1rem;
  }
  span {
    margin-top: 40px;
    color: var(--red);
    font-weight: 600;
    font-size: 1.5rem;
  }
  div {
    margin: 0 auto;
    button {
      margin-bottom: 10px;
    }

    button + button {
      margin-left: 10px;
    }
  }
`;
