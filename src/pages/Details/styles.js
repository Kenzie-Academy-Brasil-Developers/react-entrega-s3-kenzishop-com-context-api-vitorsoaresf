import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10px;

  img {
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  h3 {
    font-size: 0.9rem;
    color: var(--grey-100);
  }

  hr {
    width: 80%;
    height: 0.1px;
    background-color: var(--grey-50);
  }

  .description {
    header {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--grey-100);
      margin: 10px 0;
    }

    p {
      width: 80%;
      text-align: justify;
      margin: 10px auto;
      color: var(--grey-100);
    }
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;

    header {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--grey-100);
      margin: 10px 0;
    }
    div {
      margin: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 30px;
      margin-bottom: 20px;

      p {
        display: flex;
        margin: 5px 0;
        color: var(--grey-100);
        width: 100%;
        font-size: 1rem;
        font-weight: 800;

        svg {
          font-size: 1.5rem;
          margin-right: 5px;
        }
      }
    }
  }
`;
