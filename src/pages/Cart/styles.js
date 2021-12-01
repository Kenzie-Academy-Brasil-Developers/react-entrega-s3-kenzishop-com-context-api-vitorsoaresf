import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1444px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ContainerCart = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-left: 0;
  padding: 0;
  max-width: 650px;

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

  @media (min-width: 1024px) {
    margin-left: 20px;
  }
`;

export const ContainerAmount = styled.div`
  background-color: var(--white);
  width: 310px;
  height: 110px;
  border-radius: 10px;
  margin: 20px 20px;

  header {
    display: flex;
    align-items: center;
    border-radius: 10px 10px 0 0;
    height: 60px;
    background-color: var(--blue-logo);
    color: var(--white);
    font-weight: 600;
    font-size: 1.1rem;

    p {
      margin-left: 5px;
    }
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span,
    p {
      margin: 0;
    }

    p + span {
      margin-left: 10px;
    }

    p {
      margin-left: 10px;
      font-size: 1.2rem;
      color: var(--blue-logo);
      font-weight: 500;
    }

    span {
      margin-right: 10px;
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--orange);
    }
  }

  @media (min-width: 1024px) {
    margin-right: 20px;
  }
`;
