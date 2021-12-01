import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  z-index: 0;
`;

export const ContainerTitle = styled.header`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 100px;
  border-radius: 10px 10px 0 0;
  max-width: 1444px;
  z-index: 0;

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
    display: flex;
    button {
      background-color: var(--blue-logo);
      color: var(--white);
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      :hover {
        background-color: var(--orange);
      }

      span {
        position: absolute;
        transform: translateX(-50%);
        margin-top: -7px;
        border-radius: 100%;
        background-color: var(--orange);
        padding: 0 5px;
      }

      svg {
        font-size: 1.1rem;
      }
    }
    button + button {
      margin-left: 5px;
      margin-right: 10px;
    }
  }

  @media (min-width: 1024px) {
    .container_logo {
      img {
        width: 100px;
        height: 100px;
      }

      h3 {
        padding: 4px 5px;
        margin-top: 40px;
        margin-left: -20px;
        font-size: 1.5rem;
      }
    }

    .container_bt {
      button {
        padding: 15px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s;

        :hover {
          background-color: var(--orange);
        }
        span {
          transform: translateX(-50%);
          margin-top: -7px;
          padding: 2px 8px;
          font-size: 1rem;
        }

        svg {
          font-size: 1.7rem;
        }
      }
    }
  }
`;

export const ContainerSearch = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: var(--blue-logo);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  max-width: 1444px;
  text-align: center;
  color: var(--white);
  border-radius: 0px 0px 10px 10px;

  h3 {
    margin: 5px 0;
  }

  div {
    width: 80%;
    border-radius: 5px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 100%;
      max-width: 500px;
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
      background-color: var(--orange);
    }

    svg {
      font-size: 1.5rem;
    }
  }
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 27, 133, 0.5);
  margin: 0;
  color: var(--white);
  font-size: 3rem;
  z-index: 1;
`;
