import styled from "styled-components";

export const Container = styled.li`
  /* background-color: whitesmoke; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  border-radius: 10px 10px 0 0;

  :hover {
    border-bottom: 2px solid var(--grey-50);
  }

  h3 {
    border-radius: 10px 10px 0 0;
    height: 70px;
    width: 100%;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;
    background-color: #487eb0;
    color: var(--white);
  }

  img {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  p {
  }
  span {
    color: #aa5b39;
    font-weight: 900;
    font-size: 1.5rem;
  }
  div {
    button {
      margin-bottom: 10px;
    }

    button + button {
      margin-left: 10px;
    }
  }
`;
