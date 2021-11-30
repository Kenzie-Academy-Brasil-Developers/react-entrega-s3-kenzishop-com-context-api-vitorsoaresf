import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerTitle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .container_logo {
    display: flex;
    justify-content: center;
    margin-left: 10px;

    img {
      width: 50px;
      height: 50px;
      z-index: 0;
    }

    h3 {
      background-color: var(--blue-logo);
      color: var(--white);
      padding: 1px 5px;
      border-radius: 0 5px 5px 0;
      margin-left: -9px;
      margin-top: 18px;
      z-index: 1;
    }
  }

  .container_bt {
    button {
      background-color: var(--blue-logo);
      color: var(--white);
      padding: 10px;
      border: none;
      border-radius: 5px;

      svg {
        font-size: 1.1rem;
      }
    }
    button + button {
      margin-left: 5px;
      margin-right: 10px;
    }
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;

  h3 {
  }

  div {
    border-radius: 5px;
    height: 50px;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      border: 0.1px solid black;
      border-radius: 5px 0px 0px 5px;
      outline: none;
      height: 50px;
      font-size: 1.2rem;
      color: var(--blue-logo);
      font-weight: 700;

      :focus {
        border: solid 1px #e67e22;
      }

      ::placeholder {
        font-style: italic;
      }
    }

    button {
      height: 54px;
      border-radius: 0 5px 5px 0;

      :hover {
        background-color: #e67e22;
      }
    }
    svg {
      font-size: 1.5rem;
    }
  }
`;
